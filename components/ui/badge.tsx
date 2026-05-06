import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "green",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "green" | "blue" | "yellow" | "clay" | "navy";
}) {
  const tones = {
    green: "bg-tennis-green/10 text-tennis-green ring-tennis-green/20",
    blue: "bg-tennis-blue/10 text-tennis-blue ring-tennis-blue/20",
    yellow: "bg-tennis-yellow/70 text-navy-950 ring-tennis-yellow",
    clay: "bg-tennis-clay/10 text-tennis-clay ring-tennis-clay/20",
    navy: "bg-navy-950 text-white ring-navy-950",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold ring-1",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
