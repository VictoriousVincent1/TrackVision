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
      description: "Complete the onboarding flow and initial preferences.",
      image: "/images/testers/step-1.png",
      tasks: [
        "Create a new test account or sign in with the test credentials.",
        "Select a home city and default currency.",
        "Complete the initial preference questions and finish onboarding.",
      ],
    },
    {
      id: "dashboard",
      title: "Dashboard — Overview",
      description: "Inspect the main dashboard panels and summaries.",
      image: "/images/testers/step-2.png",
      tasks: [
        "Confirm savings, debt, and net-worth widgets display expected numbers.",
        "Open the Financial Timeline and verify the net worth chart renders.",
        "Check that quick actions (Add, Advisor) open their respective flows.",
      ],
    },
    {
      id: "income",
      title: "Income & Schedule — Projections",
      description: "Update projected income and location to see take-home changes.",
      image: "/images/testers/step-3.png",
      tasks: [
        "Set Annual Gross to a sample value (e.g., $100,000).",
        "Change city/state and confirm tax/cost-of-living updates.",
        "Verify the discretionary amount updates as expected.",
      ],
    },
    {
      id: "ledger",
      title: "Ledger — Transactions & Goals",
      description: "Add, edit, and tag transactions and review goals.",
      image: "/images/testers/step-4.png",
      tasks: [
        "Add a new transaction and assign it to a category.",
        "Create or attach the transaction to an existing goal.",
        "Mark a recurring transaction and ensure it displays correctly.",
      ],
    },
    {
      id: "advisor",
      title: "Advisor — Chat & Suggestions",
      description: "Interact with the in-app Financial Advisor chat.",
      image: "/images/testers/step-5.png",
      tasks: [
        "Ask a budgeting question and evaluate the usefulness of the answer.",
        "Check that the advisor respects message limits and shows context.",
        "Report any hallucinations or irrelevant responses.",
      ],
    },
    {
      id: "debt",
      title: "Debt Overview — Portfolio & Payoff",
      description: "Inspect debt accounts, payoff projections, and allocation.",
      image: "/images/testers/step-6.png",
      tasks: [
        "Open a debt account and review minimum, APR, and payoff date.",
        "Adjust the monthly payment plan and confirm projections update.",
        "Verify payoff percentage and 'Months to payoff' calculations.",
      ],
    },
    {
      id: "timeline",
      title: "Financial Timeline — Net Worth & Milestones",
      description: "Explore the timeline and add a milestone.",
      image: "/images/testers/step-7.png",
      tasks: [
        "Slide the years control and watch the net worth projection change.",
        "Add a milestone for a target year and confirm it appears on the chart.",
        "Check descriptive text under the chart for clarity and typos.",
      ],
    },
    {
      id: "budget",
      title: "Budget Details — Categories & Limits",
      description: "Review monthly budget breakdown and category spending.",
      image: "/images/testers/step-8.png",
      tasks: [
        "Compare 'Spent' vs 'Limit' for Living Expenses and note any overages.",
        "Adjust a category limit if possible and ensure UI updates.",
        "Validate the trend summary text for accuracy.",
      ],
    },
  ];

  return (
    <main style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <h1>Tester Walkthrough</h1>
      <p style={{ color: "#94a3b8" }}>Follow each step and submit a rating and comment for the feature.</p>

      {steps.map((s) => (
        <StepFeedback key={s.id} id={s.id} title={s.title} description={s.description} imageSrc={s.image} tasks={s.tasks} />
      ))}

      <p style={{ color: "#64748b", marginTop: 24 }}>Place your screenshots in `public/images/testers/step-1.png`, `step-2.png`, etc.</p>
    </main>
  );
}
