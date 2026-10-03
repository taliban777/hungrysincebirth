import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Volume2, VolumeX } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import chromeLogo from '@/assets/Chrome HSB Green.png';
import backgroundImage from '@/assets/Symmetrical Brick Housing Complex with Water Tower.png';

const pagerReferenceUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vintage%20Pager%20with%20Realistic%20LCD%20Display-aWjr6E05LSNj7243kXUW0HtgSDXiXf.png';
const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HSB%20Astral%20Globe%20Emblem-QZjEuZN7Xnsw3RwOeHGCP9ziulCfsZ.png';
const phrases = ['BORN EARLY STILL HERE', 'HUNGRY SINCE BIRTH', 'BORN HUNGRY, STAY HUNGRY', 'AMBITION WORN DAILY'];

const audioSlots = phrases.map((label) => ({ label, audio: null as HTMLAudioElement | null }));

function audioHandlers() {
  return {
    playAudio: () => { void audioSlots; /* TODO: Audio implementation goes here so audio tracks can be tied to each slogan later. */ },
    pauseAudio: () => { void audioSlots; /* TODO: Audio implementation goes here so audio tracks can be tied to each slogan later. */ },
    stopAudio: () => { void audioSlots; /* TODO: Audio implementation goes here so audio tracks can be tied to each slogan later. */ },
    setVolume: (volume: number) => { void volume; /* TODO: Audio implementation goes here so audio tracks can be tied to each slogan later. */ },
  };
}

function BackgroundLayer() {
  return <div className="background-layer" aria-hidden="true"><img src={backgroundImage} alt="" /><div className="background-shade" /></div>;
}

function SpinningLogo() {
  return <div className="hero-brand">
    <div className="halo" />
    <div className="logo-orbit"><img src={chromeLogo} alt="Hungry Since Birth chrome emblem" /></div>
    <p>COMING SOON</p>
  </div>;
}

function Pager() {
  const [isOn, setIsOn] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [volume, setVolume] = useState(68);
  const [clock, setClock] = useState(new Date());
  const handlers = useMemo(audioHandlers, []);

  useEffect(() => { const timer = window.setInterval(() => setClock(new Date()), 1000); return () => window.clearInterval(timer); }, []);
  const time = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit', hour12: false }).format(clock);
  const date = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', month: '2-digit', day: '2-digit' }).format(clock).replace('/', '/');
  const togglePower = () => { if (isOn) { setIsOn(false); setIsPlaying(false); handlers.stopAudio(); } else setIsOn(true); };
  const changePhrase = (direction: number) => setPhraseIndex((current) => (current + direction + phrases.length) % phrases.length);
  const changeVolume = (delta: number) => { const next = Math.max(0, Math.min(100, volume + delta)); setVolume(next); handlers.setVolume(next); };

  return <div className={`pager-wrap ${isOn ? '' : 'pager-off'}`}>
    <div className="pager">
      <img className="pager-reference" src={pagerReferenceUrl} alt="Realistic vintage black pager reference" />
      <div className="pager-top" />
      <div className="pager-body">
        <div className="lcd-bezel"><div className="lcd-screen">
          {isOn ? <>
            <div className="lcd-top"><span className="signal">▮▮▮</span><span>{isPlaying ? '▶' : 'Ⅱ'}</span><span className="battery">▰▰▰</span></div>
            <div className="lcd-phrase">{phrases[phraseIndex]}</div>
            <div className="lcd-meta"><span>{date}</span><span>TIME {time}</span></div>
            <div className="lcd-bottom"><span>{volume === 0 ? <VolumeX size={12} /> : <Volume2 size={12} />}</span><span>{'▮'.repeat(Math.ceil(volume / 20) || 1)}{'·'.repeat(5 - Math.ceil(volume / 20))}</span><span>{phraseIndex + 1}/4</span></div>
          </> : <div className="screen-off">OFF</div>}
        </div></div>
        <div className="pager-controls">
          <div className="led-row"><button className="power green" onClick={() => { if (!isOn) setIsOn(true); else { setIsPlaying(!isPlaying); if (isPlaying) handlers.pauseAudio(); else handlers.playAudio(); } }} aria-label={isOn && isPlaying ? 'Pause slogan' : 'Play slogan'}><span /></button><button className="power red" onClick={togglePower} aria-label="Turn pager off"><span /></button></div>
          <div className="sticker"><img src={logoUrl} alt="Hungry Since Birth branding sticker" /></div>
          <div className="nav-pad"><button onClick={() => changePhrase(-1)} aria-label="Previous slogan"><ArrowLeft /></button><div><button onClick={() => changeVolume(10)} aria-label="Increase volume"><ArrowUp /></button><button onClick={() => changeVolume(-10)} aria-label="Decrease volume"><ArrowDown /></button></div><button onClick={() => changePhrase(1)} aria-label="Next slogan"><ArrowRight /></button></div>
        </div>
      </div>
      </div>
      <div className="pager-shadow" />
    </div>;
}

function App() {
  return <main className="page"><BackgroundLayer /><div className="stars" aria-hidden="true" /><section className="content"><SpinningLogo /><Pager /></section><footer>HUNGRY SINCE BIRTH <span>EST. 1990</span></footer><Analytics /></main>;
}

export default App;
