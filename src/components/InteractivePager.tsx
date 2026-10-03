import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AUDIO_MATRIX, SLOGANS, adjustVolume, cycleSlogan, getNewYorkClock } from "@/lib/pager";
import pagerAsset from "@/assets/vintage-pager.png.asset.json";

export function InteractivePager() {
  const [powered, setPowered] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [sloganIndex, setSloganIndex] = useState(0);
  const [volume, updateVolume] = useState(50);
  const [clock, setClock] = useState<{ date: string; time: string } | null>(null);
  const [showVolume, setShowVolume] = useState(false);

  useEffect(() => {
    const tick = () => setClock(getNewYorkClock(new Date()));
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!showVolume) return;
    const timeout = window.setTimeout(() => setShowVolume(false), 1400);
    return () => window.clearTimeout(timeout);
  }, [showVolume, volume]);

  function playAudio(track: string | null) {
    // TODO: Insert audio file here — load and play the selected slogan's track.
    void track;
  }

  function pauseAudio() {
    // TODO: Insert audio file here — pause the active track.
  }

  function stopAudio() {
    // TODO: Insert audio file here — stop and reset the active track.
  }

  function setVolume(value: number) {
    // TODO: Insert audio file here — set the active audio element's volume to value / 100.
    void value;
  }

  const currentSlogan = SLOGANS[sloganIndex] ?? SLOGANS[0];
  const currentTrack = AUDIO_MATRIX[currentSlogan].track;

  function handleGreen() {
    if (!powered) {
      setPowered(true);
      setPlaying(true);
      playAudio(currentTrack);
      return;
    }
    if (playing) pauseAudio();
    else playAudio(currentTrack);
    setPlaying((value) => !value);
  }

  function handleRed() {
    stopAudio();
    setPlaying(false);
    setPowered(false);
    setShowVolume(false);
  }

  function handleSlogan(direction: -1 | 1) {
    if (!powered) return;
    const nextIndex = cycleSlogan(sloganIndex, direction);
    const nextSlogan = SLOGANS[nextIndex] ?? SLOGANS[0];
    if (playing) {
      stopAudio();
      playAudio(AUDIO_MATRIX[nextSlogan].track);
    }
    setSloganIndex(nextIndex);
    setShowVolume(false);
  }

  function handleVolume(direction: -1 | 1) {
    if (!powered) return;
    const nextVolume = adjustVolume(volume, direction);
    updateVolume(nextVolume);
    setVolume(nextVolume);
    setShowVolume(true);
  }

  const accessibleDisplay = powered
    ? `${showVolume ? `Volume ${volume} percent` : currentSlogan}, ${clock?.date ?? ""} ${clock?.time ?? ""} New York time`
    : "Pager off";

  return (
    <div className="pager-float" aria-label="Interactive HSB pager">
      <div className="pager-art">
        <img src={pagerAsset.url} alt="Vintage black HSB pager with an LCD screen and physical controls" className="pager-photo" draggable={false} />
        <div className={`pager-screen${powered ? "" : " pager-screen-off"}`} aria-live="polite" aria-label={accessibleDisplay}>
          {powered && (
            <>
              <div className="pager-screen-icons" aria-hidden="true"><span>▂▄▆█</span><span>▰▰▰</span></div>
              <div className="pager-screen-message">{showVolume ? `VOLUME ${volume}%` : currentSlogan}</div>
              <div className="pager-screen-clock"><span>{clock?.date ?? "--/--"}</span><span>TIME {clock?.time ?? "--:--"}</span></div>
            </>
          )}
        </div>
        <Button variant="hotspot" className="pager-hotspot pager-hotspot-green" onClick={handleGreen} aria-label={powered ? (playing ? "Pause audio" : "Play audio") : "Power on pager"} title={powered ? (playing ? "Pause" : "Play") : "Power on"} />
        <Button variant="hotspot" className="pager-hotspot pager-hotspot-red" onClick={handleRed} aria-label="Power off pager and stop audio" title="Power off" />
        <Button variant="hotspot" className="pager-hotspot pager-hotspot-left" onClick={() => handleSlogan(-1)} aria-label="Previous slogan" title="Previous slogan" />
        <Button variant="hotspot" className="pager-hotspot pager-hotspot-right" onClick={() => handleSlogan(1)} aria-label="Next slogan" title="Next slogan" />
        <Button variant="hotspot" className="pager-hotspot pager-hotspot-up" onClick={() => handleVolume(1)} aria-label="Volume up" title="Volume up" />
        <Button variant="hotspot" className="pager-hotspot pager-hotspot-down" onClick={() => handleVolume(-1)} aria-label="Volume down" title="Volume down" />
      </div>
    </div>
  );
}