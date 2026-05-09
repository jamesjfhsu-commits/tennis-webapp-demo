import { DemoShell } from "@/components/demo-shell";
import { DashboardPage } from "@/components/season-pages";

export default function Page() {
  return (
    <DemoShell
      eyebrow="Improve"
      title="Season dashboard"
      description="A command center for Alex Chen's Road to My First Slam season."
    >
      <DashboardPage />
    </DemoShell>
  );
}
