import type { LegalSection } from "@/components/LegalDocument";

export const termsOfService = {
  title: "Terms of Service",
  lastUpdated: "June 1, 2026",
  body: "",
  sections: [
    {
      heading: "1. Agreement",
      content: `By accessing or using Movus Financials ("Service"), you agree to these Terms of Service.

If you do not agree, do not use the Service.`,
    },
    {
      heading: "2. Description of Service",
      content: `Movus Financials is a financial management platform that may:

• Track income and revenue
• Track expenses and spending
• Track debts and liabilities
• Analyze financial activity
• Generate budgets
• Generate forecasts
• Provide AI-powered financial insights
• Integrate with third-party financial providers

The Service is intended solely for informational and organizational purposes.`,
    },
    {
      heading: "3. No Financial Advice",
      content: `The Service does not provide professional financial, legal, tax, or accounting advice.

    • Financial advice
    • Investment advice
    • Legal advice
    • Tax advice
    • Accounting advice

    Any information, recommendation, projection, forecast, score, rating, analysis, or AI-generated output is provided for informational purposes only.

    You are solely responsible for any financial decisions you make.`,
    },
    {
      heading: "4. AI Disclaimer",
      content: `The Service may use artificial intelligence and machine learning systems.

AI-generated outputs may:

• Be inaccurate
• Be incomplete
• Contain errors
• Be outdated
• Fail to consider important factors

You agree not to rely solely on AI-generated outputs when making financial decisions.

You should independently verify all information before acting upon it.`,
    },
    {
      heading: "5. User Responsibilities",
      content: `You agree to:

• Provide accurate information
• Keep account credentials secure
• Review imported financial data
• Verify recommendations before acting
• Comply with applicable laws`,
    },
    {
      heading: "6. Third-Party Services",
      content: `The Service may integrate with banks, payment providers, accounting systems, APIs, and other third-party providers.

We do not control third-party services and are not responsible for:

• Data accuracy
• Service availability
• Security incidents
• Financial institution errors`,
    },
    {
      heading: "7. Intellectual Property",
      content: `All software, designs, branding, algorithms, content, and materials associated with the Service are owned by Movus Financials or its licensors.

No rights are granted except those expressly provided in these Terms.`,
    },
    {
      heading: "8. Disclaimer of Warranties",
      content: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE."

TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES INCLUDING:

• MERCHANTABILITY
• FITNESS FOR A PARTICULAR PURPOSE
• ACCURACY
• RELIABILITY
• NON-INFRINGEMENT

WE DO NOT GUARANTEE:

• ACCURATE RESULTS
• CORRECT FINANCIAL ANALYSIS
• ACCURATE FORECASTS
• CONTINUOUS SERVICE AVAILABILITY
• ERROR-FREE OPERATION`,
    },
    {
      heading: "9. Limitation of Liability",
      content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, MOVUS FINANCIALS, ITS AFFILIATES, OWNERS, OFFICERS, EMPLOYEES, CONTRACTORS, AGENTS, AND PARTNERS SHALL NOT BE LIABLE FOR:

• Financial losses
• Investment losses
• Lost profits
• Lost revenue
• Missed payments
• Credit score impacts
• Tax consequences
• Data inaccuracies
• AI errors
• Service interruptions
• Indirect damages
• Consequential damages
• Special damages
• Punitive damages

ARISING FROM OR RELATED TO THE USE OF THE SERVICE.

IF LIABILITY CANNOT BE EXCLUDED, OUR TOTAL LIABILITY SHALL NOT EXCEED THE GREATER OF:

• $100 USD
• THE AMOUNT PAID BY YOU TO USE THE SERVICE DURING THE PREVIOUS TWELVE MONTHS`,
    },
    {
      heading: "10. Indemnification",
      content: `You agree to defend, indemnify, and hold harmless Movus Financials from claims, damages, liabilities, losses, costs, and expenses arising from:

• Your use of the Service
• Your violation of these Terms
• Your misuse of AI-generated outputs
• Your violation of applicable law`,
    },
    {
      heading: "11. Termination",
      content: `We may suspend or terminate accounts at any time for any reason, including violations of these Terms.`,
    },
    {
      heading: "12. Governing Law",
      content: `These Terms shall be governed by the laws of the State of Texas, without regard to conflict-of-law principles.`,
    },
    {
      heading: "13. Arbitration",
      content: `Any dispute arising from these Terms shall be resolved through binding arbitration except where prohibited by law.

Users waive the right to participate in class actions to the extent permitted by applicable law.`,
    },
    {
      heading: "14. Changes",
      content: `We may modify these Terms at any time. Continued use of the Service constitutes acceptance of updated Terms.`,
    },
  ] satisfies LegalSection[],
};
