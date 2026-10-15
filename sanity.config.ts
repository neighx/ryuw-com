"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { jaJPLocale } from "@sanity/locale-ja-jp";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "ryuw",
  title: "Ryuw 管理画面",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    jaJPLocale(),
    // Query tool for debugging — local dev only
    ...(process.env.NODE_ENV === "development" ? [visionTool({ defaultApiVersion: apiVersion })] : []),
  ],
  document: {
    // Only allow creating works and categories from the "+" menu
    newDocumentOptions: (prev) => prev.filter((t) => ["work", "category"].includes(t.templateId)),
  },
});
