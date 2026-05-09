import { DemoShell } from "@/components/demo-shell";
import { TrainingLogPage } from "@/components/season-pages";

export default function Page() {
  return (
    <DemoShell
      eyebrow="Train"
      title="Training log"
      description="Log workouts, track consistency, and keep every session tied to the season goal."
    >
      <TrainingLogPage />
    </DemoShell>
  );
}
