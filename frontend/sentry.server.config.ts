// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { SentryOptions } from "./sentryoptions";

if (
  process.env.NEXT_PUBLIC_ENVIRONMENT &&
  process.env.NEXT_PUBLIC_ENVIRONMENT !== "local"
) {
  Sentry.init({
    dsn: "https://2ec877a53cbd31d24690cc4cb1828457@o4508859021459456.ingest.us.sentry.io/4508859022376960",

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate:
      SentryOptions[
        process.env.NEXT_PUBLIC_ENVIRONMENT as "development" | "production"
      ].tracesSampleRate,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });
}
