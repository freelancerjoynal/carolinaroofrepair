import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";

const sections = [
  {
    title: "Information we collect",
    body: [
      "When you submit an estimate request, contact form or email, we may collect your name, email address, phone number, property address, project details and any photos or documents you choose to share.",
      "We also receive standard technical information that browsers send automatically, such as device type, approximate location and pages visited. This is used only to understand how the site is used and to keep it working properly.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "We use the information you provide to respond to your request, schedule inspections, prepare estimates, coordinate work and follow up on warranty or service questions.",
      "We may also use your contact details to send project updates or, where permitted, occasional service information. You can ask us to stop these communications at any time.",
    ],
  },
  {
    title: "Sharing and third parties",
    body: [
      "We do not sell your personal information. We may share limited details with trusted service providers who help us operate the business — for example scheduling, payment processing or financing partners such as EnerBank USA — only as needed to serve your request.",
      "We may disclose information when required by law, to protect our legal rights, or to prevent fraud or harm.",
    ],
  },
  {
    title: "Cookies and analytics",
    body: [
      "This site may use cookies or similar technologies for essential functionality and anonymous usage measurement. You can control cookies through your browser settings; disabling them may affect some features.",
      "Any third-party analytics or advertising tools, if used, are configured to limit collection to what is necessary for measurement and improvement.",
    ],
  },
  {
    title: "Data retention and security",
    body: [
      "We retain project and contact records for as long as needed to provide services, meet legal and warranty obligations, and resolve disputes. We use reasonable administrative and technical safeguards, though no method of transmission or storage is completely secure.",
    ],
  },
  {
    title: "Your choices",
    body: [
      `You may request access to, correction of, or deletion of the personal information we hold about you by emailing ${site.email}. We will respond within a reasonable timeframe and in accordance with applicable law.`,
      "If you are a California or North Carolina resident with specific privacy rights, contact us and we will explain the options available to you.",
    ],
  },
  {
    title: "Children's privacy",
    body: [
      "This site is intended for adults. We do not knowingly collect personal information from children under 13. If you believe a child has provided information, contact us and we will delete it.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy from time to time. Material changes will be reflected by a new effective date on this page. Continued use of the site after an update means you accept the revised policy.",
    ],
  },
];

export default function PrivacyContent() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-line/70 bg-white p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-copper">
                On this page
              </p>
              <ul className="mt-3 space-y-2">
                {sections.map((section) => (
                  <li key={section.title}>
                    <a
                      href={`#${section.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")}`}
                      className="text-xs font-semibold text-muted transition-colors hover:text-copper"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-line/70 pt-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                  Questions?
                </p>
                <a
                  href={site.emailHref}
                  className="mt-1 flex items-center gap-2 break-all text-xs font-bold text-ink hover:text-copper"
                >
                  <Icon name="mail" className="size-3.5 shrink-0 text-copper" />
                  {site.email}
                </a>
                <a
                  href={site.phoneHref}
                  className="mt-2 flex items-center gap-2 text-xs font-bold text-ink hover:text-copper"
                >
                  <Icon name="phone" className="size-3.5 shrink-0 text-copper" />
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </aside>

          <div className="prose-site max-w-none">
            <p className="rounded-2xl bg-sky/60 px-5 py-4 text-sm leading-relaxed text-ink/70">
              <strong className="text-ink">Effective date:</strong> November 12,
              2026. This policy explains what information Carolina Roof Repair
              collects, how it is used, and the choices you have. It applies to
              this website and to information you share with us in person, by
              phone or by email.
            </p>

            {sections.map((section) => (
              <div
                key={section.title}
                id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="scroll-mt-28"
              >
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}

            <div className="mt-8 rounded-2xl border border-line/70 bg-cream/70 p-5">
              <h2 className="!mt-0 !text-lg">Contact us about privacy</h2>
              <p className="!mb-0 text-sm">
                Carolina Roof Repair · {site.address.full} ·{" "}
                <a
                  href={site.emailHref}
                  className="font-semibold text-copper underline underline-offset-2"
                >
                  {site.email}
                </a>{" "}
                ·{" "}
                <a
                  href={site.phoneHref}
                  className="font-semibold text-copper underline underline-offset-2"
                >
                  {site.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
