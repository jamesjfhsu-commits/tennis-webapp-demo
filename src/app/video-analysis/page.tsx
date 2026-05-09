import { DemoShell } from "@/components/demo-shell";
import { VideoAnalysisPage } from "@/components/season-pages";

export default function Page() {
  return (
    <DemoShell
      eyebrow="Analyze"
      title="Video analysis"
      description="Convert serve footage into clear feedback, next drills, and coach-ready context."
    >
      <VideoAnalysisPage />
    </DemoShell>
  );
}
