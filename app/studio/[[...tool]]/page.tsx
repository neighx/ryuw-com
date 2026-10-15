import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-[#a3a3a3] text-sm">
        管理画面はまだ準備中です（Sanity が未接続）。
      </div>
    );
  }
  return (
    <div data-studio className="fixed inset-0 z-[10000]">
      <NextStudio config={config} />
    </div>
  );
}
