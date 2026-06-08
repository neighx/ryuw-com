import SectionTitle from "@/components/SectionTitle";
import MusicClient from "@/components/MusicClient";
import { works } from "@/lib/data";

export const revalidate = 86400;

export default function MusicPage() {
  return (
    <div className="min-h-screen pt-32 pb-28 lg:pt-40 lg:pb-40 px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle
        title="Music"
        subtitle="Selected music, production, and sound direction works."
        className="mb-12"
      />
      <MusicClient works={works} />
    </div>
  );
}
