import StepFeedback from "@/components/testers/StepFeedback";

export const metadata = {
  title: "Tester Walkthrough",
  description: "Steps for testers with feedback boxes and ratings",
};

export default function TestersPage() {
  const steps = [
    {
      id: "onboarding",
      title: "Onboarding — Welcome and Setup",
      description: "Complete the onboarding flow: create an account, connect a test account, and set preferences.",
      image: "/images/testers/step-1.png",
    },
    {
      id: "dashboard",
      title: "Dashboard — Overview",
      description: "Inspect the main dashboard: savings, debt, and timeline widgets.",
      image: "/images/testers/step-2.png",
    },
    {
      id: "advisor",
      title: "Advisor — Chat & Suggestions",
      description: "Open the Financial Advisor chat, ask a question, and review responses.",
      image: "/images/testers/step-3.png",
    },
    {
      id: "ledger",
      title: "Ledger — Transactions & Goals",
      description: "Add or edit a transaction, then tag it to a goal or category.",
      image: "/images/testers/step-4.png",
    },
  ];

  return (
    <main style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <h1>Tester Walkthrough</h1>
      <p style={{ color: "#94a3b8" }}>Follow each step and submit a rating and comment for the feature.</p>

      {steps.map((s) => (
        <StepFeedback key={s.id} id={s.id} title={s.title} description={s.description} imageSrc={s.image} />
      ))}

      <p style={{ color: "#64748b", marginTop: 24 }}>Place your screenshots in `public/images/testers/step-1.png`, `step-2.png`, etc.</p>
    </main>
  );
}
