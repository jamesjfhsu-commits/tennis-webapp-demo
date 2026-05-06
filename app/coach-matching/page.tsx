import { DemoShell } from "@/components/demo-shell";
import { CoachMatchingPage } from "@/components/season-pages";

export default function Page() {
  return (
    <DemoShell
      eyebrow="Connect"
      title="Coach matching"
      description="Find coaches who match Alex's level, location, season goal, and training style."
    >
      <CoachMatchingPage />
    </DemoShell>
  );
}
