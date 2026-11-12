import ContactForm from "./ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";

export default function ContactFormSection() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-20 top-10 size-80 rounded-full bg-sky/60 blur-3xl" />
      <div className="container-x relative">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Send a message"
              title={
                <>
                  Tell us what
                  <br />
                  <span className="text-gradient-dark italic">the roof is doing.</span>
                </>
              }
              description="A few details help us route your request to the right person. Photos and addresses are always welcome — and never required."
            />

            <div className="mt-8 rounded-3xl bg-ink p-6 text-white">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-gold/15 text-gold">
                  <Icon name="alert" className="size-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Active leak or damage?
                  </p>
                  <p className="font-display text-lg">Call us first.</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/60">
                Storm damage and active leaks move to the front of the line. A
                phone call is the fastest way to protect your home from further
                damage.
              </p>
              <a
                href={site.phoneHref}
                className="mt-4 flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold transition-colors hover:bg-white/10"
              >
                {site.phoneDisplay}
                <Icon name="phone" className="size-4 text-gold" />
              </a>
              <a
                href={site.emailHref}
                className="mt-2 flex items-center gap-2 px-1 text-[11px] text-white/50 transition-colors hover:text-white"
              >
                <Icon name="mail" className="size-3.5" />
                {site.email}
              </a>
            </div>
          </div>

          <div className="card p-5 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
