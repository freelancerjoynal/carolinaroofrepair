import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const cards = [
  {
    title: "Call or text",
    value: site.phoneDisplay,
    secondary: site.phoneAltDisplay,
    href: site.phoneHref,
    icon: "phone" as const,
    note: "Fastest option for active leaks and storm damage.",
    accent: "bg-copper text-white",
  },
  {
    title: "Email",
    value: site.email,
    secondary: "Support available 24/7",
    href: site.emailHref,
    icon: "mail" as const,
    note: "Send photos, plans or questions any time.",
    accent: "bg-ink text-gold",
  },
  {
    title: "Visit the office",
    value: site.address.full,
    secondary: "By appointment",
    href: "https://maps.google.com/?q=Norwood,+NC+28128",
    icon: "mapPin" as const,
    note: "Serving homes and businesses across both Carolinas.",
    accent: "bg-moss text-white",
  },
];

export default function ContactCards() {
  return (
    <section className="section-tight relative overflow-hidden">
      <div className="container-x relative">
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 80}>
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card card-hover group flex h-full flex-col p-6"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`grid size-12 place-items-center rounded-2xl ${card.accent}`}
                  >
                    <Icon name={card.icon} className="size-5" />
                  </span>
                  <Icon
                    name="arrowUpRight"
                    className="size-5 text-muted/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper"
                  />
                </div>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                  {card.title}
                </p>
                <p className="mt-1 break-words font-display text-lg leading-tight text-ink">
                  {card.value}
                </p>
                <p className="text-xs font-semibold text-copper">{card.secondary}</p>
                <p className="mt-auto pt-4 text-xs leading-relaxed text-muted">
                  {card.note}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
