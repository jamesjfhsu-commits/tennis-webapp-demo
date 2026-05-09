import { DemoShell } from "@/components/demo-shell";
import { MatchSignupPage } from "@/components/season-pages";

export default function Page() {
  return (
    <DemoShell
      eyebrow="Compete"
      title="Match signup"
      description="Join level-fit matches that help Alex prepare for local tournament pressure."
    >
      <MatchSignupPage />
    </DemoShell>
  );
}
