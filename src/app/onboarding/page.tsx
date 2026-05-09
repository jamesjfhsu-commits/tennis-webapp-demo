import { DemoShell } from "@/components/demo-shell";
import { OnboardingPage } from "@/components/season-pages";

export default function Page() {
  return (
    <DemoShell
      eyebrow="Plan"
      title="Build Alex's season"
      description="A guided onboarding flow turns tennis ambition into a personalized season plan."
    >
      <OnboardingPage />
    </DemoShell>
  );
}
