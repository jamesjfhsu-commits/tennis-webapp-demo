"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CalendarCheck,
  ChevronRight,
  ClipboardList,
  Dumbbell,
  MapPin,
  Menu,
  PlayCircle,
  Settings,
  Sparkles,
  Trophy,
  Users,
  Video,
  X,
} from "lucide-react";
import { useState } from "react";
import { navItems, persona } from "@/lib/demo-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": Trophy,
  "/onboarding": Sparkles,
  "/dashboard": BarChart3,
  "/training-log": ClipboardList,
  "/video-analysis": Video,
  "/coach-matching": Users,
  "/coach-profile": Activity,
  "/group-training": Dumbbell,
  "/match-signup": CalendarCheck,
  "/court-discovery": MapPin,
  "/court-detail": PlayCircle,
  "/profile-settings": Settings,
};

export function DemoShell({
  children,
  eyebrow,
  title,
  description,
  action,
}: {
  children: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-court-lines court-grid opacity-35" />
      <div className="mx-auto flex w-full max-w-[1500px] gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <aside className="sticky top-4 hidden h-[calc(100vh-2rem)] w-72 shrink-0 rounded-[2rem] bg-navy-950 p-5 text-white shadow-premium lg:block">
          <BrandBlock />
          <nav className="mt-8 space-y-1">
            {navItems.map((item) => {
              const Icon = iconMap[item.href] ?? ChevronRight;
              const active = pathname === item.href;
              return (
                <Link
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-bold text-white/68 transition hover:bg-white/10 hover:text-white",
                    active && "bg-white text-navy-950 shadow-court hover:bg-white hover:text-navy-950",
                  )}
                  href={item.href}
                  key={item.href}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 rounded-[1.5rem] bg-white/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-tennis-yellow">
              Season Goal
            </p>
            <p className="mt-2 text-sm leading-6 text-white/78">{persona.goal}</p>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="mb-6 rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-premium backdrop-blur md:p-6">
            <div className="flex items-center justify-between gap-3 lg:hidden">
              <BrandBlock compact />
              <Button variant="secondary" size="icon" onClick={() => setOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-6 grid gap-6 lg:mt-0 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Badge tone="yellow">{eyebrow}</Badge>
                <h1 className="mt-4 max-w-4xl font-display text-5xl font-black tracking-[-0.05em] text-navy-950 md:text-7xl">
                  {title}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-navy-950/68 md:text-lg">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {action}
                <Button asChild variant="accent">
                  <Link href="/dashboard">
                    Resume season <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </header>
          {children}
        </main>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-navy-950/45 p-4 backdrop-blur lg:hidden">
          <div className="h-full overflow-auto rounded-[2rem] bg-navy-950 p-5 text-white shadow-premium">
            <div className="flex items-center justify-between">
              <BrandBlock />
              <Button variant="secondary" size="icon" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="mt-8 grid gap-2">
              {navItems.map((item) => {
                const Icon = iconMap[item.href] ?? ChevronRight;
                return (
                  <Link
                    className="flex items-center gap-3 rounded-2xl bg-white/8 px-3 py-3 text-sm font-bold"
                    href={item.href}
                    key={item.href}
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function BrandBlock({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="flex items-center gap-3" href="/">
      <div className="grid h-11 w-11 place-items-center rounded-full bg-tennis-yellow text-lg font-black text-navy-950 shadow-court">
        M
      </div>
      <div>
        <p className="font-display text-xl font-black tracking-tight">My Tennis Season</p>
        {!compact ? <p className="text-xs font-bold text-white/50">Grand Slam energy, personal scale</p> : null}
      </div>
    </Link>
  );
}
