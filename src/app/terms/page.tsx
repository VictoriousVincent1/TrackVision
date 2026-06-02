import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { termsOfService } from "@/content/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service — =MovUs",
  description: "MovUs terms of service.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title={termsOfService.title}
      lastUpdated={termsOfService.lastUpdated}
    >
      <LegalDocument
        sections={termsOfService.sections}
        body={termsOfService.body}
      />
    </LegalPageLayout>
  );
}
