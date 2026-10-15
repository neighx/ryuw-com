import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

// Read-only, unauthenticated client: with the "published" perspective it can
// never see drafts, so unpublished work can't leak onto the site.
export const client = createClient({
  projectId: projectId || "unconfigured",
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
});

/** Cache tag for everything that comes from Sanity; the webhook revalidates it. */
export const SANITY_TAG = "sanity";
