import type { PostHog } from "posthog-js";
import posthog from "posthog-js";

const POSTHOG_KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY as string;
const POSTHOG_HOST =
  (import.meta.env.VITE_PUBLIC_POSTHOG_HOST as string) ||
  "https://us.posthog.com";

let clientPostHog: PostHog | undefined;

export function initPostHog(): PostHog | undefined {
  if (typeof window === "undefined") return undefined;
  if (clientPostHog) return clientPostHog;
  if (!POSTHOG_KEY) return undefined;

  clientPostHog = posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    persistence: "localStorage+cookie",
  });

  return clientPostHog;
}

export { posthog };
