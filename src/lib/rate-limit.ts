/**
 * Rate Limiter for Serverless / Next.js Route Handlers
 * Uses sliding window counter per client identifier (IP / header).
 */

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

// In-memory store for instances; can be replaced with Upstash/Redis if persistent distributed store requested.
const ipCache = new Map<string, RateLimitRecord>();

// Cleanup stale records periodically to prevent memory leaks
const CLEANUP_INTERVAL_MS = 60 * 1000;
let lastCleanup = Date.now();

function cleanupStaleRecords(): void {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  for (const [key, record] of ipCache.entries()) {
    if (now > record.resetAt) {
      ipCache.delete(key);
    }
  }
}

export interface RateLimitOptions {
  windowMs: number; // e.g. 60000 (1 minute)
  maxRequests: number; // e.g. 5 requests per window
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetTime: number;
}

export function rateLimit(
  identifier: string,
  options: RateLimitOptions = { windowMs: 60 * 1000, maxRequests: 5 }
): RateLimitResult {
  cleanupStaleRecords();

  const now = Date.now();
  const record = ipCache.get(identifier);

  if (!record || now > record.resetAt) {
    ipCache.set(identifier, {
      count: 1,
      resetAt: now + options.windowMs,
    });
    return {
      success: true,
      remaining: options.maxRequests - 1,
      resetTime: now + options.windowMs,
    };
  }

  if (record.count >= options.maxRequests) {
    return {
      success: false,
      remaining: 0,
      resetTime: record.resetAt,
    };
  }

  record.count += 1;
  return {
    success: true,
    remaining: options.maxRequests - record.count,
    resetTime: record.resetAt,
  };
}
