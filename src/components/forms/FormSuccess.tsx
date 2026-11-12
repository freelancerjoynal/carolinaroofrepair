"use client";

import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { resetQuote } from "@/store/actions";
import { site } from "@/lib/site";

export default function FormSuccess() {
  const dispatch = useAppDispatch();
  const reference = useAppSelector((state) => state.quote.reference);

  return (
    <div className="text-center">
      <div className="relative mx-auto grid size-20 place-items-center rounded-full bg-moss/10">
        <span className="absolute inset-0 animate-ring rounded-full border-2 border-moss/30" />
        <span className="grid size-14 place-items-center rounded-full bg-moss text-white">
          <Icon name="check" className="size-7" strokeWidth={2.5} />
        </span>
      </div>
      <h3 className="display-md mt-6 text-ink">Request received — thank you.</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
        A member of our Carolina team will reach out shortly to schedule your free
        inspection and talk through the options. If your roof is actively leaking,
        please call us now so we can prioritize your request.
      </p>

      {reference ? (
        <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-2xl border border-line/80 bg-cream px-5 py-3">
          <Icon name="fileText" className="size-4 text-copper" />
          <span className="text-left">
            <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
              Your reference
            </span>
            <span className="block font-mono text-sm font-bold text-ink">{reference}</span>
          </span>
        </div>
      ) : null}

      <div className="mx-auto mt-8 grid max-w-lg gap-3 text-left sm:grid-cols-3">
        {[
          { title: "We review", text: "Your notes and property details.", icon: "fileText" as const },
          { title: "We call", text: "To schedule a convenient visit.", icon: "phone" as const },
          { title: "We inspect", text: "Free, with photos and options.", icon: "search" as const },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-line/70 bg-white p-4">
            <Icon name={item.icon} className="size-4 text-copper" />
            <p className="mt-2 text-xs font-bold text-ink">{item.title}</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-muted">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a href={site.phoneHref} className="btn btn-primary">
          <Icon name="phone" className="size-4" />
          Call {site.phoneDisplay}
        </a>
        <Link href="/" className="btn btn-outline-dark">
          Back to home
        </Link>
        <button
          type="button"
          onClick={() => dispatch(resetQuote())}
          className="btn btn-outline-dark"
        >
          Start another request
        </button>
      </div>
    </div>
  );
}
