import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const gallery = [
  {
    src: "/images/a96ae16f42d77c31b735fece82b1ed6f_1200_80.webp",
    label: "Slate-inspired profile",
    alt: "Euroshield slate-look roof",
    tall: true,
  },
  {
    src: "/images/Picture1.png",
    label: "Shake-inspired profile",
    alt: "Euroshield shake-look roof",
    tall: false,
  },
  {
    src: "/images/Picture2.png",
    label: "Design details",
    alt: "Euroshield roofing detail",
    tall: false,
  },
  {
    src: "/images/uroshield-section.webp",
    label: "Installed system",
    alt: "Installed Euroshield roofing system",
    tall: true,
  },
];

export default function StyleGallery() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="container-x relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Styles & colors"
            title={
              <>
                Old-world looks.
                <br />
                <span className="text-gradient-dark italic">New-world armor.</span>
              </>
            }
            description="Choose from a wide variety of styles and colors that pair beautifully with Carolina architecture — without the fragility of real slate or wood."
          />
          <div className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-ink/60">
            <Icon name="sparkles" className="size-3.5 text-copper" />
            Samples available on request
          </div>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <Reveal key={item.label} delay={index * 70}>
              <div
                className={`group relative overflow-hidden rounded-3xl ${
                  item.tall ? "aspect-[3/4]" : "aspect-[3/3.3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">
                    Euroshield®
                  </p>
                  <p className="mt-0.5 font-display text-lg text-white">
                    {item.label}
                  </p>
                </div>
                <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full border border-white/20 bg-ink/40 text-white/80 backdrop-blur transition-colors group-hover:bg-copper group-hover:text-white">
                  <Icon name="arrowUpRight" className="size-3.5" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
