import { env } from "@/env";
import posthog from "posthog-js";

if (process.env.NODE_ENV === "production" && env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: "/ingest",
  ui_host: "https://eu.posthog.com",
  defaults: "2025-05-24",
  capture_exceptions: false,
});
}
