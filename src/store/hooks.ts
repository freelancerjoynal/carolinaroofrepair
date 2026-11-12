"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import {
  defaultRootState,
  type AppAction,
  type AppDispatch,
  type AppStore,
  type RootState,
} from "./types";

export const StoreContext = createContext<AppStore | null>(null);

const noopSubscribe = () => () => {};

// Actions dispatched before the client store has loaded are queued and replayed
// once it exists, so an early click is never silently dropped.
const pendingActions: AppAction[] = [];

const noopDispatch: AppDispatch = (action) => {
  pendingActions.push(action);
};

export function flushPendingActions(store: AppStore) {
  while (pendingActions.length > 0) {
    const action = pendingActions.shift();
    if (action) store.dispatch(action);
  }
}

export function useAppStore(): AppStore | null {
  return useContext(StoreContext);
}

export function useAppDispatch(): AppDispatch {
  const store = useContext(StoreContext);
  return store ? store.dispatch : noopDispatch;
}

export function useAppSelector<T>(selector: (state: RootState) => T): T {
  const store = useContext(StoreContext);

  return useSyncExternalStore(
    store ? store.subscribe : noopSubscribe,
    () => selector(store ? store.getState() : defaultRootState),
    () => selector(defaultRootState),
  );
}
