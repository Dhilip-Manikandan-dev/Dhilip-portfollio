import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-background text-foreground">
      <div className="max-w-md w-full p-8 rounded-3xl border border-border bg-card/80 backdrop-blur-md shadow-2xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block mb-2">
          Error 404
        </span>

        <h1 className="font-heading text-3xl font-bold text-foreground mb-3">
          Page Not Found
        </h1>

        <p className="text-sm text-muted-foreground leading-relaxed mb-8">
          The requested page could not be located. It might have been relocated or does not exist.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
