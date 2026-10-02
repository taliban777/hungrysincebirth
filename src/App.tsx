import { ArrowUpRight } from 'lucide-react';
import backgroundImage from '@/assets/Symmetrical_Brick_Housing_Complex_with_Water_Tower.png';
import chromeLogo from '@/assets/Chrome_HSB_Green.png';

function BackgroundLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <img
        src={backgroundImage}
        alt=""
        className="h-full w-full object-cover object-center scale-[1.03] saturate-[0.7]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.58)_48%,rgba(0,0,0,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,transparent_0%,rgba(0,0,0,0.18)_48%,rgba(0,0,0,0.82)_100%)]" />
    </div>
  );
}

function SpinningLogo() {
  return (
    <div className="relative flex w-[min(84vw,700px)] flex-col items-center">
      <div className="absolute left-1/2 top-1/2 h-[min(68vw,450px)] w-[min(68vw,450px)] -translate-x-1/2 -translate-y-[58%] rounded-full bg-white/10 blur-[90px] animate-breathe" />
      <div className="absolute left-[10%] top-[21%] h-2 w-2 rounded-full bg-white shadow-[0_0_18px_6px_rgba(255,255,255,0.8)] animate-sparkle" />
      <div className="absolute right-[13%] top-[31%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_16px_5px_rgba(255,255,255,0.75)] animate-sparkle [animation-delay:1.8s]" />
      <div className="absolute bottom-[26%] left-[18%] h-1 w-1 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.8)] animate-sparkle [animation-delay:3.2s]" />
      <div className="relative w-full animate-logo-spin [filter:drop-shadow(0_0_22px_rgba(255,255,255,0.2))]">
        <img src={chromeLogo} alt="hungrysincebirth chrome emblem" className="relative z-10 w-full" />
        <span className="pointer-events-none absolute inset-[7%] rounded-[45%] border border-white/20 opacity-60 blur-[1px]" />
      </div>
      <div className="relative z-20 mt-[-4px] text-center animate-rise">
        <h1 className="mt-3 text-[clamp(1.15rem,3.6vw,2.2rem)] font-light uppercase tracking-[0.31em] text-white/95 [text-shadow:0_0_24px_rgba(255,255,255,0.28)]">Coming soon</h1>
      </div>
    </div>
  );
}

function App() {
  return (
    <main id="top" className="relative flex h-[100dvh] min-h-[560px] w-full items-center justify-center overflow-hidden bg-[#030303] text-white selection:bg-white selection:text-black">
      <BackgroundLayer />
      <section className="relative z-10 flex w-full items-center justify-center px-5 pt-6" aria-label="Hungrysincebirth coming soon">
        <SpinningLogo />
      </section>

      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center px-6 pb-6 text-[9px] uppercase tracking-[0.23em] text-white/55 sm:pb-8">
        <a href="https://www.instagram.com/hungrysincebirth90/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 transition-colors hover:text-white">
          <span>Hungry since birth 90</span>
          <ArrowUpRight size={12} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </main>
  );
}

export default App;
