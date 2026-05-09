import { DemoShell } from "@/components/demo-shell";
import { GroupTrainingPage } from "@/components/season-pages";

export default function Page() {
  return (
    <DemoShell
      eyebrow="Connect"
      title="Group training"
      description="Discover friendly training groups that reinforce the season plan."
    >
      <GroupTrainingPage />
    </DemoShell>
  );
}
