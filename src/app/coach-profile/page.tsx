import { DemoShell } from "@/components/demo-shell";
import { CoachProfilePage } from "@/components/season-pages";

export default function Page() {
  return (
    <DemoShell
      eyebrow="Connect"
      title="Coach profile"
      description="A premium coach profile focused on decision-making, trust, and next action."
    >
      <CoachProfilePage />
    </DemoShell>
  );
}
