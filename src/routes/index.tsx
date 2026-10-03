import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { InteractivePager } from "@/components/InteractivePager";
import chromeLogo from "@/assets/chrome-hsb-green-final.png";
import housingBackground from "@/assets/housing-background-final.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hungry Since Birth — Coming Soon" },
      { name: "description", content: "Hungry Since Birth. Something is coming. Explore the interactive HSB pager." },
      { property: "og:title", content: "Hungry Since Birth — Coming Soon" },
      { property: "og:description", content: "Hungry Since Birth. Something is coming. Explore the interactive HSB pager." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="coming-page">
      <div className="coming-background" aria-hidden="true">
        <img src={housingBackground.url} alt="" />
      </div>
      <section className="coming-content" aria-label="Hungry Since Birth coming soon">
        <div className="brand-stack">
          <div className="brand-spin">
            <img className="brand-face brand-face-front" src={chromeLogo.url} alt="Hungry Since Birth chrome emblem" />
            <img className="brand-face brand-face-back" src={chromeLogo.url} alt="" aria-hidden="true" />
          </div>
          <h1 className="coming-title">Coming soon</h1>
        </div>
        <InteractivePager />
      </section>
      <footer className="coming-footer">
        <a href="https://www.instagram.com/hungrysincebirth90/" target="_blank" rel="noreferrer">
          Hungry since birth 90 <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </footer>
    </main>
  );
}
