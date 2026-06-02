import type { LegalSection } from "@/components/LegalDocument";

export const privacyPolicy = {
  title: "Privacy Policy",
  lastUpdated: "June 1, 2026",
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

Third-Party Data
If you connect external financial institutions, payment providers, banks, accounting software, or other third-party services, we may receive information authorized by you from those providers.`,
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
      heading: "4. Artificial Intelligence Features",
      content: `Our Service may use artificial intelligence, machine learning, and automated systems to analyze financial information and generate recommendations, forecasts, summaries, and planning suggestions.

AI-generated outputs:
• May contain errors, inaccuracies, or incomplete information.
• Are provided for informational purposes only.
• Should not be considered financial, investment, tax, accounting, legal, or professional advice.
• Should be independently verified before making financial decisions.

You acknowledge that any decisions made based on AI-generated outputs are solely your responsibility.`,
    },
    {
      heading: "5. No Financial Advice",
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
      heading: "6. Data Sharing",
      content: `We may share information with:

• Service providers and infrastructure partners
• Analytics providers
• AI service providers that assist in generating features
• Legal authorities when required by law
• Successors in the event of a merger, acquisition, or sale

We do not sell your personal financial information to third parties.`,
    },
    {
      heading: "7. Data Security",
      content: `We implement reasonable administrative, technical, and organizational safeguards designed to protect information.

However, no method of transmission, storage, or electronic processing is completely secure. We cannot guarantee absolute security of any information.`,
    },
    {
      heading: "8. Data Retention",
      content: `We retain information for as long as necessary to:

• Provide the Service
• Comply with legal obligations
• Resolve disputes
• Enforce agreements

We may delete or anonymize information when it is no longer required.`,
    },
    {
      heading: "9. User Responsibilities",
      content: `You are responsible for:

• Ensuring information provided is accurate
• Maintaining the security of your account credentials
• Reviewing recommendations before acting on them
• Complying with applicable laws and regulations`,
    },
    {
      heading: "10. Disclaimer of Warranties",
      content: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE."

TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, RELIABILITY, AND NON-INFRINGEMENT.

WE DO NOT WARRANT THAT:
• THE SERVICE WILL BE ERROR-FREE;
• AI-GENERATED OUTPUTS WILL BE ACCURATE;
• FINANCIAL PROJECTIONS WILL BE CORRECT;
• THE SERVICE WILL MEET YOUR EXPECTATIONS OR REQUIREMENTS.`,
    },
    {
      heading: "11. Limitation of Liability",
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
• DATA INACCURACIES;
• SERVICE INTERRUPTIONS;
• THIRD-PARTY DATA SOURCES.

YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK.`,
    },
    {
      heading: "12. Third-Party Services",
      content: `The Service may integrate with third-party financial institutions, APIs, payment systems, and data providers.

We are not responsible for:
• Third-party data accuracy
• Third-party outages
• Third-party privacy practices
• Decisions or actions of third-party providers`,
    },
    {
      heading: "13. Children's Privacy",
      content: `The Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.`,
    },
    {
      heading: "14. International Users",
      content: `If you access the Service from outside our operating jurisdiction, you understand that your information may be transferred to and processed in countries with different data protection laws.`,
    },
    {
      heading: "15. Changes to This Policy",
      content: `We may update this Privacy Policy at any time. Continued use of the Service after changes become effective constitutes acceptance of the updated policy.`,
    },
    {
      heading: "16. Contact Information",
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
