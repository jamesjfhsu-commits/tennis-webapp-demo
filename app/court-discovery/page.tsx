import { DemoShell } from "@/components/demo-shell";
import { CourtDiscoveryPage } from "@/components/season-pages";

export default function Page() {
  return (
    <DemoShell
      eyebrow="Train"
      title="Court discovery"
      description="Find courts by location, surface, mood, availability, and season fit."
    >
      <CourtDiscoveryPage />
    </DemoShell>
  );
}
