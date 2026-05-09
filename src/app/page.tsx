import { DemoShell } from "@/components/demo-shell";
import { LandingPage } from "@/components/season-pages";

export default function Page() {
  return (
    <DemoShell
      eyebrow="Clickable product demo"
      title="My Tennis Season"
      description="A premium, friendly tennis web app for amateur players who want to customize a Grand Slam-like personal season."
    >
      <LandingPage />
    </DemoShell>
  );
}
