import type { LegalSection } from "@/components/LegalDocument";

export const privacyPolicy = {
  title: "Privacy Policy",
  lastUpdated: "August 2, 2026",
  body: "",
  sections: [
    {
      heading: "1. Introduction",
  content: `Welcome to Movus Financials ("we," "our," or "us"). This Privacy Policy explains how we collect, use, store, and protect information when you use our application and related services (the "Service").

By using the Service, you agree to the collection and use of information as described in this Privacy Policy.`,
    },
    {
      heading: "2. Information We Collect",
  content: `Depending on how you use the Service, we may collect:

Financial Information

• Income and revenue information you provide
• Expense and spending information
• Debt and liability information
• Asset and account information
• Budgeting and financial planning data
• Payment history and transaction information
• Financial goals and projections

Account Information

• Name
• Email address
• Username
• Authentication credentials

Device and Usage Information

• IP address
• Device identifiers
• Browser and operating system information
• App usage data
• Analytics and performance information

Third-Party Financial Data (via Plaid)
If you connect a bank or other financial institution using Plaid Inc. ("Plaid"), Plaid securely authenticates you directly with your institution — we never see or store your bank login credentials. Once you authorize a connection, Plaid shares certain information with us that may include:

• Account holder name and account type
• Account and routing numbers
• Account balances
• Transaction history and merchant/category details
• Identity information your institution makes available (as permitted by your authorization)

See Section 4 below for details on how this data is used and your controls over it.`,
    },
    {
      heading: "3. How We Use Your Information",
      content: `We use collected information to:

• Provide financial tracking and budgeting tools
• Analyze spending patterns and expenses
• Monitor debt obligations and payment schedules
• Generate financial insights and forecasts
• Provide AI-powered recommendations and planning assistance
• Improve our products and services
• Maintain security and prevent fraud
• Comply with legal obligations
• Communicate with users regarding the Service`,
    },
    {
  heading: "4. Connecting Financial Accounts Through Plaid",
  content: `How it works. The Service uses Plaid to let you securely connect your bank or other financial accounts. When you choose to link an account, you are directed to Plaid's own interface to authenticate with your financial institution. Your login credentials are entered directly into Plaid's system and are never received or stored by us.

What data flows to us. Once you authorize a connection, Plaid retrieves and shares account and transaction data with us (see Section 2 above) so the Service can power features like your Health Score, budgets, benchmarking, and AI insights.

Plaid's own privacy practices. Plaid's collection and use of your information is also governed by Plaid's End User Privacy Policy, available at plaid.com/legal. We encourage you to review it, since Plaid acts as an independent data controller/processor for the authentication step.

Your control.

• You may unlink any connected financial account at any time from the Service's account settings.
• Unlinking stops the Service from retrieving new data from that institution going forward.
• You may request deletion of previously retrieved financial data at any time; see Section 9 (Data Retention) for how deletion is handled.

Security of Plaid-sourced data. Financial data retrieved via Plaid is encrypted in transit and at rest, and access to it is restricted to systems and personnel with a specific operational need, consistent with our internal security policies.`,
    },
    {
  heading: "5. Artificial Intelligence Features",
  content: `Our Service includes optional AI features — the "AI Advisor" chat and the "Weekly Insight" summary — that use artificial intelligence to analyze your financial information and generate recommendations, forecasts, summaries, and planning suggestions.

Third-party AI processing. These features are powered by Google's Gemini AI service (Google LLC). When you use them, a summary of your financial data is sent to Google for processing. This summary may include your income, budget rule, spending totals, savings and investment goals, debt and loan balances, and financial health score — some of which may be derived from data retrieved via Plaid. Your name, email, bank login credentials, and full account numbers are NOT sent. Google processes this data to generate a response and is not provided with your identity. Google's handling of this data is governed by Google's own privacy terms.

Your control. AI features are off until you explicitly opt in. Before any data is shared, the app tells you what is sent and asks for your permission. You can review or withdraw this consent at any time from the app's Profile screen; withdrawing it stops all sharing with the AI service.

AI-generated outputs:

• May contain errors, inaccuracies, or incomplete information.
• Are provided for informational purposes only.
• Should not be considered financial, investment, tax, accounting, legal, or professional advice.
• Should be independently verified before making financial decisions.

You acknowledge that any decisions made based on AI-generated outputs are solely your responsibility.`,
    },
    {
  heading: "6. No Financial Advice",
  content: `The Service is intended solely as an informational and organizational tool.

We are not:

• Financial advisors
• Investment advisors
• Accountants
• Tax professionals
• Attorneys

Nothing within the Service constitutes financial, investment, tax, legal, or professional advice.

You should consult qualified professionals before making significant financial decisions.`,
    },
    {
  heading: "7. Data Sharing",
      content: `We may share information with:

• Service providers and infrastructure partners
• Plaid Inc., to enable financial account linking and data retrieval (see Section 4)
• Analytics providers
• AI service providers that assist in generating features (currently Google LLC's Gemini service — see Section 4 for what is shared and how to control it)
• Legal authorities when required by law
• Successors in the event of a merger, acquisition, or sale

We do not sell your personal financial information to third parties.`,
    },
    {
  heading: "8. Data Security",
  content: `We implement reasonable administrative, technical, and organizational safeguards designed to protect information, including encryption of financial data in transit and at rest and access controls limiting who can view Plaid-sourced financial data.

However, no method of transmission, storage, or electronic processing is completely secure. We cannot guarantee absolute security of any information.`,
    },
    {
  heading: "9. Data Retention",
      content: `We retain information for as long as necessary to:

• Provide the Service
• Comply with legal obligations
• Resolve disputes
• Enforce agreements

When you unlink a financial account or delete your account, we take reasonable steps to delete or anonymize the associated Plaid-sourced financial data within a reasonable period, except where we are required or permitted to retain it (for example, to comply with legal obligations or resolve disputes).`,
    },
    {
  heading: "10. User Responsibilities",
      content: `You are responsible for:

• Ensuring information provided is accurate
• Maintaining the security of your account credentials
• Only linking financial accounts you are authorized to access
• Reviewing recommendations before acting on them
• Complying with applicable laws and regulations`,
    },
    {
  heading: "11. Disclaimer of Warranties",
      content: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE."

TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, RELIABILITY, AND NON-INFRINGEMENT.

WE DO NOT WARRANT THAT:
• THE SERVICE WILL BE ERROR-FREE;
• AI-GENERATED OUTPUTS WILL BE ACCURATE;
• FINANCIAL PROJECTIONS WILL BE CORRECT;
• DATA RETRIEVED VIA PLAID OR ANY OTHER THIRD-PARTY PROVIDER WILL BE ACCURATE, COMPLETE, OR AVAILABLE WITHOUT INTERRUPTION;
• THE SERVICE WILL MEET YOUR EXPECTATIONS OR REQUIREMENTS.`,
    },
    {
  heading: "12. Limitation of Liability",
  content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, MOVUS FINANCIALS, ITS OWNERS, OFFICERS, EMPLOYEES, AFFILIATES, CONTRACTORS, AND PARTNERS SHALL NOT BE LIABLE FOR:

• FINANCIAL LOSSES
• LOST PROFITS
• LOST REVENUE
• INVESTMENT LOSSES
• MISSED PAYMENTS
• CREDIT SCORE IMPACTS
• TAX CONSEQUENCES
• INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES

ARISING OUT OF OR RELATED TO:

• USE OF THE SERVICE;
• RELIANCE ON AI-GENERATED CONTENT;
• FINANCIAL DECISIONS MADE BY USERS;
• DATA INACCURACIES, INCLUDING THOSE ORIGINATING FROM PLAID OR A LINKED FINANCIAL INSTITUTION;
• SERVICE INTERRUPTIONS;
• THIRD-PARTY DATA SOURCES.

YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK.`,
    },
    {
      heading: "13. Third-Party Services",
      content: `The Service may integrate with third-party financial institutions, APIs, payment systems, and data providers, including Plaid.

We are not responsible for:

• Third-party data accuracy
• Third-party outages
• Third-party privacy practices
• Decisions or actions of third-party providers`,
    },
    {
      heading: "14. Children's Privacy",
      content: `The Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.`,
    },
    {
      heading: "15. International Users",
      content: `If you access the Service from outside our operating jurisdiction, you understand that your information may be transferred to and processed in countries with different data protection laws.`,
    },
    {
      heading: "16. Changes to This Policy",
      content: `We may update this Privacy Policy at any time. Continued use of the Service after changes become effective constitutes acceptance of the updated policy.`,
    },
    {
      heading: "17. Contact Information",
      content: `For privacy-related questions, contact:

Movus Financials
Email: vincentwu@utexas.edu`,
    },
    {
      heading: "Security Incident Disclaimer",
      content: `We implement commercially reasonable administrative, technical, and organizational measures designed to protect user information and maintain the security of the Service.

However, no website, application, server, database, network, or electronic storage system can be guaranteed to be completely secure or immune from unauthorized access, cyberattacks, data breaches, hacking, malware, ransomware, service disruptions, or other security incidents.

By using the Service, you acknowledge and accept these inherent risks.

To the fullest extent permitted by applicable law, Movus Financials, its owners, officers, directors, employees, contractors, affiliates, and partners shall not be liable for any losses, damages, claims, expenses, liabilities, lost profits, lost revenue, financial losses, identity theft, unauthorized account access, data loss, data corruption, or other damages arising from or related to any security incident, cyberattack, hacking event, unauthorized access, or breach of systems, except where such limitation is prohibited by applicable law.

Users are responsible for maintaining the confidentiality of their account credentials and for taking reasonable precautions to protect their own devices, networks, and accounts.`,
    },
  ] satisfies LegalSection[],
};
