import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { privacyPolicy } from "@/content/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy — TrackVision",
  description: "TrackVision privacy policy.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title={privacyPolicy.title}
      lastUpdated={privacyPolicy.lastUpdated}
    >
      <LegalDocument
        sections={privacyPolicy.sections}
        body={privacyPolicy.body}
      />
    </LegalPageLayout>
  );
}
