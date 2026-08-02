import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_PUBLIC_SENTRY_DSN as string,
  tracesSampleRate: 1.0,
  environment: import.meta.env.PROD ? "production" : "development",
  enabled: import.meta.env.PROD,
});
