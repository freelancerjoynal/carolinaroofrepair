"use client";

import { useEffect, useState } from "react";
import { StoreContext, flushPendingActions } from "./hooks";
import type { AppStore } from "./types";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store, setStore] = useState<AppStore | null>(null);

  useEffect(() => {
    let active = true;

    // The Redux store is created after hydration. Importing Redux during the
    // static prerender would evaluate its module-level Math.random() and abort
    // the prerender, so the whole store module is loaded on the client only.
    import("./index").then(({ makeStore }) => {
      if (active) {
        const store = makeStore();
        flushPendingActions(store);
        setStore(store);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
