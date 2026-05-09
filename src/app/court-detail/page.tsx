import { DemoShell } from "@/components/demo-shell";
import { CourtDetailPage } from "@/components/season-pages";

export default function Page() {
  return (
    <DemoShell
      eyebrow="Train"
      title="Court detail"
      description="Turn court discovery into a booked training block."
    >
      <CourtDetailPage />
    </DemoShell>
  );
}
