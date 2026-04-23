import Image from "next/image";
import { HazardTape } from "@/components/HazardTape";
import { LiquidEther } from "@/components/LiquidEther";
import { Marquee } from "@/components/Marquee";
import { ProductCard } from "@/components/ProductCard";
import { SectionLabel } from "@/components/SectionLabel";
import { SplashCursor } from "@/components/SplashCursor";
import { StatusBar } from "@/components/StatusBar";

const products = [
  {
    name: "AMYL CORE",
    variant: "core" as const,
    image: "/products/amyl-core.png",
    tagline: "THE ORIGINAL",
    description:
      "The flagship formula. Maximum intensity, instant onset, zero hesitation. The bottle that built the legend.",
    spec: [
      { label: "Vol", value: "30 ML" },
      { label: "Onset", value: "<5 SEC" },
      { label: "Grade", value: "A+" },
    ],
  },
  {
    name: "MASS REACTION",
    variant: "mass" as const,
    image: "/products/mass-reaction.png",
    tagline: "HEAVY LOAD",
    description:
      "Heavier load, slower burn. Engineered for stamina sessions where the others give up. Built to last.",
    spec: [
      { label: "Vol", value: "30 ML" },
      { label: "Burn", value: "LONG" },
      { label: "Grade", value: "S" },
    ],
  },
  {
    name: "AMYL PRIME",
    variant: "prime" as const,
    image: "/products/amyl-prime.png",
    tagline: "LIMITED EDITION",
    description:
      "Massive rush. The most powerful formula ever released from PWD laboratories. This isn't just another amyl — it's a revolution. Stabilized 2-methylbutyl nitrite mixture.",
    spec: [
      { label: "Formula", value: "2-MBN" },
      { label: "Edition", value: "LIMITED" },
      { label: "Grade", value: "S+" },
    ],
  },
];

export default function Home() {
  return (
    <main className="relative flex flex-col w-full overflow-x-hidden">
      <SplashCursor />
      <StatusBar />

      {/* HERO BANNER — 500px, logo centré */}
      <section className="relative h-[500px] flex flex-col items-center justify-center overflow-hidden">
        <LiquidEther
          colors={["#EAB308", "#F97316", "#fcff00"]}
          autoIntensity={3}
          autoSpeed={2}
          mouseForce={50}
          autoDemo={true}
          autoResumeDelay={0}
          autoRampDuration={0.3}
        />

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted mb-8 whitespace-nowrap">
            <span className="text-hazard">▲</span>
            <span>EST. 2014 — REBORN 2026</span>
            <span className="text-hazard">▲</span>
          </div>

          <Image
            src="/brand/logo-radikal.svg"
            alt="RADIKAL"
            width={900}
            height={260}
            priority
            className="invert w-[80vw] sm:w-[480px] md:w-[680px] max-w-[680px] h-auto"
          />

          <p className="mt-4 font-mono text-xs sm:text-sm uppercase tracking-[0.5em] text-hazard">
            CORE
          </p>
        </div>
      </section>

      {/* HAZARD TAPE + CTA */}
      <div className="relative w-full">
        <HazardTape height="h-12 sm:h-16" />
        <div className="absolute inset-x-0 -bottom-3 mx-auto w-fit px-3 py-1 bg-bg border border-hazard text-hazard font-mono text-[10px] uppercase tracking-[0.3em]">
          ⚠ HIGH POTENCY ⚠
        </div>
      </div>

      {/* TAGLINE */}
      <section className="relative mx-auto max-w-5xl w-full px-4 text-center pt-20 pb-16 sm:pt-28 sm:pb-20 grain">
        <h1 className="font-display text-[18vw] sm:text-[14vw] md:text-[140px] leading-[0.85] tracking-tight uppercase">
          <span className="block">The Bottle</span>
          <span className="block text-hazard text-shadow-hard">Is Back.</span>
        </h1>

        <p className="mt-8 mx-auto max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
          After years of cult demand, the legendary <span className="text-fg font-semibold">RADIKAL</span> chrome flask returns.{" "}
          <span className="text-fg">Three formulas. Reformulated stronger.</span>{" "}
          Same iconic hazard label. Zero compromise on chemistry.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="inline-flex items-center gap-3 bg-hazard text-ink font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-fg transition-colors"
          >
            See the Formulas
            <span aria-hidden>→</span>
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-3 border border-white/20 text-fg font-mono uppercase tracking-widest text-xs px-6 py-4 hover:border-hazard hover:text-hazard transition-colors"
          >
            The Comeback Story
          </a>
        </div>
      </section>

      <Marquee
        items={["RADIKAL", "REAL POWER", "RADIKAL", "NO COMPROMISE", "RADIKAL", "THE BOTTLE IS BACK"]}
        className="py-6 border-y border-white/10 bg-bg-elev"
      />

      {/* STORY */}
      <section
        id="story"
        className="relative mx-auto max-w-7xl w-full px-4 py-24 sm:py-32 grain"
      >
        <SectionLabel index="01" title="The Comeback" className="mb-10" />

        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.95] tracking-tight">
              You asked.<br />
              <span className="text-hazard">We answered.</span>
            </h2>
          </div>
          <div className="md:col-span-5 space-y-5 text-muted text-base sm:text-lg leading-relaxed">
            <p>
              The <span className="text-fg">RADIKAL</span> chrome flask wasn&apos;t just a bottle — it was a benchmark.
              Collectors hoarded them. Friends never gave them back. For years, the only way to get one was a
              second-hand market that knew exactly what it had.
            </p>
            <p>
              We rebuilt the lab. We re-engineered the chemistry. We kept the iconic shell.
            </p>
            <p className="text-fg font-semibold uppercase tracking-wide">
              Same legend. Stronger formulas. Limited reissue.
            </p>
          </div>
        </div>
      </section>

      <HazardTape height="h-8" fine />

      {/* PRODUCTS */}
      <section
        id="products"
        className="relative mx-auto max-w-7xl w-full px-4 py-24 sm:py-32"
      >
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel index="02" title="The Formulas" className="mb-6" />
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase leading-[0.9] tracking-tight">
            Three Formulas.<br />
            <span className="text-hazard">Zero Compromise.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-muted text-base sm:text-lg">
            Each variant tuned for a different vector. Same lab-grade purity. Same iconic chrome flask.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.name} {...p} index={i + 1} />
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative w-full bg-bg-elev border-y border-white/10 py-24 sm:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent 0 38px, rgba(255,237,0,0.08) 38px 39px)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl w-full px-4 text-center">
          <SectionLabel index="03" title="Manifesto" className="justify-center mb-8" />
          <p className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] uppercase tracking-tight">
            We don&apos;t do <span className="text-hazard">soft</span>.{" "}
            We don&apos;t do <span className="text-hazard">safe</span>.{" "}
            We don&apos;t do <span className="text-hazard">subtle</span>.
          </p>
          <p className="mt-10 font-display text-3xl sm:text-5xl text-fg/90 uppercase tracking-tight">
            We do <span className="bg-hazard text-ink px-3">RADIKAL</span>.
          </p>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { k: "LAB", v: "Pharma-grade synthesis" },
              { k: "PURITY", v: "99.9% tested batch" },
              { k: "FLASK", v: "30ML chrome aluminum" },
              { k: "ORIGIN", v: "EU formulated" },
            ].map((item) => (
              <div key={item.k} className="bg-bg-elev p-5 text-left">
                <div className="text-hazard font-mono text-[10px] uppercase tracking-[0.3em] mb-2">
                  {item.k}
                </div>
                <div className="font-semibold text-sm text-fg">{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative w-full">
        <HazardTape height="h-10" />
        <div className="mx-auto max-w-7xl w-full px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/brand/logo-radikal.svg"
              alt="RADIKAL"
              width={120}
              height={36}
              className="invert"
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              CORE / 2026
            </span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            Real Power. <span className="text-hazard">No Compromise.</span>
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            © {new Date().getFullYear()} RADIKAL CORE
          </p>
        </div>
        <div className="border-t border-white/10 py-4 px-4 text-center">
          <p className="font-mono text-[10px] text-muted tracking-[0.25em] uppercase">
            Radikal® is a registered trademark of{" "}
            <a href="https://pwd-factory.com" className="text-fg hover:text-hazard transition-colors" target="_blank" rel="noopener noreferrer">
              pwd-factory.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
