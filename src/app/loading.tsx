import React from "react";

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="w-12 h-12 rounded-full border-2 border-indigo-500/20 border-t-primary animate-spin" />
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground animate-pulse">
          Loading...
        </span>
      </div>
    </div>
  );
}
