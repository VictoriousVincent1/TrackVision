export type LegalSection = {
  heading?: string;
  content: string;
};

type LegalDocumentProps = {
  sections?: LegalSection[];
  body?: string;
};

export function LegalDocument({ sections, body }: LegalDocumentProps) {
  if (sections && sections.length > 0) {
    return (
      <>
        {sections.map((section, index) => (
          <section key={section.heading ?? index}>
            {section.heading ? (
              <h2 className="text-lg font-semibold text-white">
                {section.heading}
              </h2>
            ) : null}
            <div
              className={`whitespace-pre-wrap text-base leading-relaxed text-slate-300 ${section.heading ? "mt-3" : ""}`}
            >
              {section.content}
            </div>
          </section>
        ))}
      </>
    );
  }

  return (
    <p className="whitespace-pre-wrap text-base leading-relaxed text-slate-400">
      {body ??
        "Content coming soon. Replace the text in the content file with your agreement."}
    </p>
  );
}
