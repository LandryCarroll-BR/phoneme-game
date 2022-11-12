import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { config } from "../../lib/sanity.config";

const studioConfig = defineConfig(config);

// export the page component
export default function StudioPage() {
  return <NextStudio config={studioConfig} />;
}
