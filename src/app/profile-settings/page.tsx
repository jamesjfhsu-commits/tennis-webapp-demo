import { DemoShell } from "@/components/demo-shell";
import { ProfileSettingsPage } from "@/components/season-pages";

export default function Page() {
  return (
    <DemoShell
      eyebrow="Improve"
      title="Profile and season settings"
      description="Tune Alex's personal profile, locations, goals, and season preferences."
    >
      <ProfileSettingsPage />
    </DemoShell>
  );
}
