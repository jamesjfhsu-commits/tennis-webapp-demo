"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Camera,
  Check,
  Clock,
  Dumbbell,
  Flame,
  MapPin,
  MessageCircle,
  Play,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { coaches, courts, journey, matches, persona, trainingSessions } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

export function LandingPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.15fr_.85fr]">
      <Card className="relative min-h-[540px] overflow-hidden bg-navy-950 p-8 text-white">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-tennis-yellow/80 blur-2xl" />
        <div className="absolute bottom-12 right-12 hidden h-80 w-80 rounded-full border-[18px] border-white/12 md:block" />
        <Badge tone="yellow">Plan &gt; Train &gt; Analyze &gt; Connect &gt; Compete &gt; Improve</Badge>
        <h2 className="mt-8 max-w-2xl font-display text-6xl font-black tracking-[-0.06em] md:text-8xl">
          Your amateur season, with Slam-level intention.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
          Build a personal tennis calendar, log the work, analyze your game, and find the right people and courts around Taipei.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="accent" size="lg">
            <Link href="/onboarding">
              Start Alex's season <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/video-analysis">Watch analysis demo</Link>
          </Button>
        </div>
      </Card>
      <div className="grid gap-6">
        <PersonaCard />
        <Card>
          <CardHeader>
            <CardTitle>Season Loop</CardTitle>
            <CardDescription>Every page maps to the product rhythm, so the demo feels connected.</CardDescription>
          </CardHeader>
          <div className="grid gap-3">
            {journey.map((item, index) => (
              <div className="flex items-center gap-4 rounded-2xl bg-navy-950/[0.04] p-4" key={item.step}>
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-tennis-green text-sm font-black text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="font-bold text-navy-950">{item.step}</p>
                  <p className="text-sm text-navy-950/60">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export function OnboardingPage() {
  const [step, setStep] = useState(1);
  const steps = [
    ["Choose your season", "Road to My First Slam", "A 12-week plan with weekly serve, rally, and match blocks."],
    ["Set the north star", "Serve consistency", "Alex wants a reliable second serve before local tournament play."],
    ["Build the starter plan", "3 sessions / week", "Blend solo practice, coach feedback, and match-pressure reps."],
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
      <Card>
        <CardHeader>
          <CardTitle>Onboarding Flow</CardTitle>
          <CardDescription>Tap through the setup cards to simulate first-run personalization.</CardDescription>
        </CardHeader>
        <div className="space-y-3">
          {steps.map((item, index) => (
            <button
              className={cn(
                "w-full rounded-3xl border p-4 text-left transition",
                step === index + 1
                  ? "border-tennis-green bg-tennis-mint shadow-court"
                  : "border-navy-950/10 bg-white/70 hover:bg-white",
              )}
              key={item[0]}
              onClick={() => setStep(index + 1)}
            >
              <Badge tone={step === index + 1 ? "green" : "blue"}>Step {index + 1}</Badge>
              <p className="mt-3 font-display text-2xl font-black">{item[0]}</p>
              <p className="mt-1 text-sm text-navy-950/62">{item[2]}</p>
            </button>
          ))}
        </div>
      </Card>
      <Card className="overflow-hidden bg-navy-950 p-0 text-white">
        <div className="bg-tennis-blue p-6">
          <Badge tone="yellow">{steps[step - 1][0]}</Badge>
          <h2 className="mt-4 font-display text-5xl font-black tracking-tight">{steps[step - 1][1]}</h2>
        </div>
        <div className="grid gap-4 p-6 md:grid-cols-3">
          {["Serve", "Footwork", "Match play"].map((label, index) => (
            <div className="rounded-3xl bg-white/10 p-5" key={label}>
              <div className="mb-8 h-2 rounded-full bg-tennis-yellow" style={{ width: `${90 - index * 18}%` }} />
              <p className="font-bold">{label}</p>
              <p className="mt-2 text-sm text-white/62">Priority block {index + 1}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 px-6 pb-6">
          <Button variant="accent" onClick={() => setStep((current) => Math.min(3, current + 1))}>
            Continue setup
          </Button>
          <Button asChild variant="secondary">
            <Link href="/dashboard">Generate season</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}

export function DashboardPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.05fr_.95fr]">
      <Card className="bg-navy-950 text-white">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Badge tone="yellow">Week 5 of 12</Badge>
            <h2 className="mt-4 font-display text-5xl font-black tracking-tight">Serve phase: pressure proofing</h2>
            <p className="mt-3 max-w-xl text-white/65">This week balances two technical sessions, one video review, and one friendly ladder match.</p>
          </div>
          <div className="rounded-3xl bg-white/10 p-5 text-center">
            <p className="font-display text-5xl font-black text-tennis-yellow">72</p>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Season score</p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Metric label="Serve consistency" value="68%" icon={Target} />
          <Metric label="Training streak" value="9 days" icon={Flame} />
          <Metric label="Match readiness" value="B+" icon={Trophy} />
        </div>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Next Best Actions</CardTitle>
          <CardDescription>The dashboard nudges Alex through the full improvement loop.</CardDescription>
        </CardHeader>
        <ActionLink href="/training-log" icon={Plus} title="Log today's serve session" copy="Capture reps, accuracy, and mood." />
        <ActionLink href="/video-analysis" icon={Video} title="Review toss timing clip" copy="AI found drift on pressure points." />
        <ActionLink href="/match-signup" icon={Users} title="Join intermediate ladder" copy="1.8 km away, good level fit." />
      </Card>
      <Card className="xl:col-span-2">
        <CardHeader>
          <CardTitle>Season Roadmap</CardTitle>
          <CardDescription>A Grand Slam-like arc for an amateur player.</CardDescription>
        </CardHeader>
        <div className="grid gap-4 md:grid-cols-4">
          {["Foundation", "Serve Phase", "Match Pressure", "Tournament Week"].map((phase, index) => (
            <div className={cn("rounded-3xl p-5", index === 1 ? "bg-tennis-yellow" : "bg-navy-950/[0.04]")} key={phase}>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-navy-950/55">Block {index + 1}</p>
              <p className="mt-3 font-display text-2xl font-black">{phase}</p>
              <Progress className="mt-6" value={[100, 62, 18, 0][index]} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export function TrainingLogPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
      <Card>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle>Training Log</CardTitle>
            <CardDescription>Recent work against Alex's serve-focused season plan.</CardDescription>
          </div>
          <AddTrainingModal />
        </div>
        <div className="space-y-4">
          {trainingSessions.map((session) => (
            <div className="rounded-3xl border border-navy-950/10 bg-white/70 p-5" key={session.title}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-display text-2xl font-black">{session.title}</p>
                  <p className="text-sm text-navy-950/60">{session.date} · {session.duration} · {session.focus}</p>
                </div>
                <Badge tone={session.intensity === "High" ? "clay" : "blue"}>{session.intensity}</Badge>
              </div>
              <Progress className="mt-5" value={Number.parseInt(session.score)} />
              <p className="mt-2 text-sm font-bold text-navy-950/60">Serve target score {session.score}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card className="bg-tennis-green text-white">
        <Badge tone="yellow">Coach note</Badge>
        <h2 className="mt-4 font-display text-4xl font-black">Second serve is trending up, but pressure reps need volume.</h2>
        <p className="mt-4 text-white/70">Recommended: add one 20-minute target ladder after each rally session this week.</p>
        <Button asChild className="mt-6" variant="accent">
          <Link href="/coach-profile">Ask Coach Mia</Link>
        </Button>
      </Card>
    </div>
  );
}

export function VideoAnalysisPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
      <Card className="overflow-hidden bg-navy-950 p-0 text-white">
        <div className="relative grid min-h-[460px] place-items-center bg-[radial-gradient(circle_at_center,#176b9b,transparent_68%),linear-gradient(135deg,#0b2033,#061522)]">
          <div className="absolute inset-8 rounded-[2rem] border-2 border-white/20" />
          <button className="grid h-24 w-24 place-items-center rounded-full bg-tennis-yellow text-navy-950 shadow-court transition hover:scale-105">
            <Play className="h-10 w-10 fill-current" />
          </button>
          <div className="absolute bottom-6 left-6 right-6 grid gap-3 md:grid-cols-3">
            {["Toss drifts right", "Contact point late", "Recovery step slow"].map((item) => (
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur" key={item}>
                <p className="text-sm font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>AI Clip Notes</CardTitle>
          <CardDescription>Mock analysis turns video into drills and coach-ready context.</CardDescription>
        </CardHeader>
        <Insight title="Serve consistency" value="68%" copy="Best when toss lands 20 cm further left." />
        <Insight title="Pressure points" value="-14%" copy="Accuracy drops after 6-ball rallies." />
        <Insight title="Next drill" value="12 min" copy="Toss-catch ladder before full serves." />
      </Card>
    </div>
  );
}

export function CoachMatchingPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {coaches.map((coach, index) => (
        <Card className={index === 0 ? "bg-navy-950 text-white" : ""} key={coach.name}>
          <Badge tone={index === 0 ? "yellow" : "green"}>{coach.fit} fit</Badge>
          <h2 className="mt-4 font-display text-4xl font-black">{coach.name}</h2>
          <p className={cn("mt-3 leading-7", index === 0 ? "text-white/68" : "text-navy-950/65")}>{coach.specialty}</p>
          <div className="mt-6 space-y-3 text-sm font-bold">
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" />{coach.location}</p>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4" />{coach.price}</p>
          </div>
          <Button asChild className="mt-7" variant={index === 0 ? "accent" : "default"}>
            <Link href="/coach-profile">View profile</Link>
          </Button>
        </Card>
      ))}
    </div>
  );
}

export function CoachProfilePage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
      <Card className="bg-navy-950 text-white">
        <Badge tone="yellow">94% match for Alex</Badge>
        <h2 className="mt-4 font-display text-6xl font-black">Mia Huang</h2>
        <p className="mt-4 text-white/70">Former collegiate player specializing in serve rebuilds, tactical confidence, and tournament preparation for intermediate adults.</p>
        <div className="mt-7 grid grid-cols-3 gap-3">
          <Metric label="Rating" value="4.9" icon={Star} />
          <Metric label="Players" value="126" icon={Users} />
          <Metric label="Serve plans" value="42" icon={Target} />
        </div>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recommended Package</CardTitle>
          <CardDescription>A coach profile screen should make the next commitment obvious.</CardDescription>
        </CardHeader>
        <div className="rounded-3xl bg-tennis-mint p-5">
          <p className="font-display text-3xl font-black">4-week serve consistency sprint</p>
          <p className="mt-3 text-navy-950/65">Weekly private lesson, shared video notes, and two match-pressure homework blocks.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button>Book trial lesson</Button>
            <Button asChild variant="secondary">
              <Link href="/video-analysis">Send latest clip</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export function GroupTrainingPage() {
  return (
    <ListPage
      items={[
        ["Serve Lab: 12-player ladder", "Friday 19:30 · Da'an", "NT$650 · Coach Mia attending"],
        ["Blue-court rally club", "Saturday 08:00 · Riverside", "Intermediate depth and movement"],
        ["Tournament pressure night", "Tuesday 20:00 · Tianmu", "Tie-breaks, second serves, return starts"],
      ]}
      cta="Reserve group spot"
      icon={Dumbbell}
    />
  );
}

export function MatchSignupPage() {
  return (
    <ListPage
      items={matches.map((match) => [match.title, `${match.date} · ${match.level}`, match.spots])}
      cta="Join match"
      icon={Trophy}
    />
  );
}

export function CourtDiscoveryPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
      <Card className="min-h-[520px] bg-tennis-blue text-white">
        <Badge tone="yellow">Taipei court map</Badge>
        <div className="relative mt-8 h-[390px] overflow-hidden rounded-[2rem] bg-navy-950/30">
          {courts.map((court, index) => (
            <Link
              className="absolute rounded-full bg-tennis-yellow px-4 py-2 text-sm font-black text-navy-950 shadow-court transition hover:scale-105"
              href="/court-detail"
              key={court.name}
              style={{ left: `${18 + index * 24}%`, top: `${24 + (index % 2) * 30}%` }}
            >
              {index + 1}
            </Link>
          ))}
        </div>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Court Discovery</CardTitle>
          <CardDescription>Mock availability, surface, and season-fit data.</CardDescription>
        </CardHeader>
        {courts.map((court) => (
          <ActionLink href="/court-detail" icon={MapPin} key={court.name} title={court.name} copy={`${court.distance} · ${court.surface} · ${court.slots}`} />
        ))}
      </Card>
    </div>
  );
}

export function CourtDetailPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
      <Card className="overflow-hidden p-0">
        <div className="h-80 bg-[linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(135deg,#176b9b,#0f7a4f)] bg-[length:80px_80px,80px_80px,100%_100%]" />
        <div className="p-6">
          <Badge tone="green">Best fit for serve night</Badge>
          <h2 className="mt-3 font-display text-5xl font-black">Da'an Forest Court 3</h2>
          <p className="mt-3 text-navy-950/65">1.8 km from Alex · hard court · strong lighting · moderate evening demand.</p>
        </div>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Bookable Slots</CardTitle>
          <CardDescription>Designed for quick court-to-training conversion.</CardDescription>
        </CardHeader>
        {["Today 19:00", "Today 20:30", "Thu 18:00"].map((slot) => (
          <div className="mb-3 flex items-center justify-between rounded-2xl bg-navy-950/[0.04] p-4" key={slot}>
            <span className="font-bold">{slot}</span>
            <Button size="sm" variant="accent">Book</Button>
          </div>
        ))}
      </Card>
    </div>
  );
}

export function ProfileSettingsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
      <PersonaCard />
      <Card>
        <CardHeader>
          <CardTitle>Season Settings</CardTitle>
          <CardDescription>Personalize the season without losing the main goal.</CardDescription>
        </CardHeader>
        {[
          ["Season name", persona.season],
          ["Primary goal", persona.goal],
          ["Weekly training target", "3 sessions + 1 match"],
          ["Preferred areas", "Da'an, Tianmu, Riverside"],
        ].map(([label, value]) => (
          <div className="mb-3 rounded-2xl bg-white/80 p-4 ring-1 ring-navy-950/8" key={label}>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-navy-950/45">{label}</p>
            <p className="mt-2 font-bold text-navy-950">{value}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}

function AddTrainingModal() {
  const [saved, setSaved] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="accent"><Plus className="h-4 w-4" /> Add training</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Training Session</DialogTitle>
          <DialogDescription>Modal demo: log the work and immediately connect it to the season goal.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 md:grid-cols-2">
          {["Serve consistency", "75 minutes", "Da'an Forest Court", "High intensity"].map((field) => (
            <div className="rounded-2xl bg-navy-950/[0.04] p-4" key={field}>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-navy-950/45">Preset</p>
              <p className="mt-2 font-bold">{field}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl bg-tennis-yellow p-5">
          <p className="font-display text-2xl font-black">Suggested follow-up</p>
          <p className="mt-2 text-sm text-navy-950/70">Upload one serve clip so Alex can compare accuracy with toss placement.</p>
        </div>
        <Button className="mt-6 w-full" onClick={() => setSaved(true)}>
          {saved ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          {saved ? "Session added to demo log" : "Save training session"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}

function PersonaCard() {
  return (
    <Card className="bg-white">
      <Badge tone="green">Main persona</Badge>
      <h2 className="mt-4 font-display text-5xl font-black tracking-tight">{persona.name}</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Info label="Level" value={persona.level} icon={ShieldCheck} />
        <Info label="Location" value={persona.location} icon={MapPin} />
        <Info label="Season" value={persona.season} icon={Trophy} />
        <Info label="Goal" value="Serve consistency" icon={Target} />
      </div>
    </Card>
  );
}

function ListPage({
  items,
  cta,
  icon: Icon,
}: {
  items: string[][];
  cta: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map(([title, meta, copy], index) => (
        <Card className={index === 0 ? "bg-tennis-yellow" : ""} key={title}>
          <Icon className="h-9 w-9 text-tennis-green" />
          <h2 className="mt-5 font-display text-4xl font-black">{title}</h2>
          <p className="mt-3 font-bold text-navy-950/70">{meta}</p>
          <p className="mt-3 text-sm text-navy-950/60">{copy}</p>
          <Button className="mt-7" variant={index === 0 ? "default" : "accent"}>{cta}</Button>
        </Card>
      ))}
    </div>
  );
}

function Metric({ label, value, icon: Icon }: { label: string; value: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="rounded-3xl bg-white/10 p-5">
      <Icon className="h-5 w-5 text-tennis-yellow" />
      <p className="mt-4 font-display text-4xl font-black">{value}</p>
      <p className="text-sm text-white/62">{label}</p>
    </div>
  );
}

function Info({ label, value, icon: Icon }: { label: string; value: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="rounded-2xl bg-navy-950/[0.04] p-4">
      <Icon className="h-5 w-5 text-tennis-green" />
      <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-navy-950/45">{label}</p>
      <p className="mt-1 font-bold">{value}</p>
    </div>
  );
}

function ActionLink({ href, icon: Icon, title, copy }: { href: string; icon: React.ComponentType<{ className?: string }>; title: string; copy: string }) {
  return (
    <Link className="mb-3 flex items-center gap-4 rounded-3xl bg-navy-950/[0.04] p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-court" href={href}>
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-tennis-yellow">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-navy-950/58">{copy}</p>
      </div>
    </Link>
  );
}

function Insight({ title, value, copy }: { title: string; value: string; copy: string }) {
  return (
    <div className="mb-4 rounded-3xl bg-navy-950/[0.04] p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-bold">{title}</p>
        <Badge tone="blue">{value}</Badge>
      </div>
      <p className="mt-3 text-sm text-navy-950/60">{copy}</p>
    </div>
  );
}
