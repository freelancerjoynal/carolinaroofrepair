import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";

const sections = [
  {
    title: "Use of this website",
    body: [
      "This website is provided by Carolina Roof Repair for information and communication. By using it, you agree to use it lawfully and not to interfere with its operation, security or availability.",
      "Content, images and branding on this site are owned by or licensed to Carolina Roof Repair and may not be copied or reused for commercial purposes without written permission.",
    ],
  },
  {
    title: "Estimates and calculator results",
    body: [
      "The online calculator produces a planning range only. It is not a quote, a contract or a binding offer. Actual pricing depends on a physical inspection, decking condition, access, code requirements, material availability and other site-specific factors.",
      "All estimates and proposals are provided in writing and are subject to the terms stated in the proposal, including any expiration date and scope limitations.",
    ],
  },
  {
    title: "Scheduling and weather",
    body: [
      "Roofing work depends on safe weather and site conditions. Scheduled dates are targets, not guarantees. We will communicate changes as early as possible and reschedule to the next available safe window.",
    ],
  },
  {
    title: "Warranties",
    body: [
      "Manufacturer warranties are provided by the product manufacturer and are subject to their terms. Workmanship warranties are described in your written proposal or contract. This website does not create or expand any warranty.",
    ],
  },
  {
    title: "Payments and financing",
    body: [
      "Payment terms are stated in your proposal or contract. Financing, where offered, is provided by third-party lenders such as EnerBank USA and is subject to their application, credit approval and terms.",
      "Online payment links are provided for convenience. Always confirm the amount and payee before submitting a payment.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, Carolina Roof Repair is not liable for indirect, incidental or consequential damages arising from use of this website or reliance on its content. Nothing in these terms limits rights that cannot legally be limited.",
    ],
  },
  {
    title: "Third-party links",
    body: [
      "This site may link to third-party websites, including payment, financing and social media services. We do not control those sites and are not responsible for their content or privacy practices.",
    ],
  },
  {
    title: "Governing law",
    body: [
      "These terms are governed by the laws of the State of North Carolina, without regard to conflict-of-law rules. Any dispute will be handled in the appropriate courts of North Carolina unless applicable law requires otherwise.",
    ],
  },
];

export default function TermsContent() {
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
                  Need a copy?
                </p>
                <a
                  href={site.emailHref}
                  className="mt-1 flex items-center gap-2 break-all text-xs font-bold text-ink hover:text-copper"
                >
                  <Icon name="mail" className="size-3.5 shrink-0 text-copper" />
                  {site.email}
                </a>
              </div>
            </div>
          </aside>

          <div className="prose-site max-w-none">
            <p className="rounded-2xl bg-sky/60 px-5 py-4 text-sm leading-relaxed text-ink/70">
              <strong className="text-ink">Effective date:</strong> November 12,
              2026. These terms apply to your use of the Carolina Roof Repair
              website. Project-specific terms are set out in your written proposal
              or contract, which controls if there is any conflict.
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
              <h2 className="!mt-0 !text-lg">Questions about these terms</h2>
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
