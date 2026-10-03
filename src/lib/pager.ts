export const SLOGANS = [
  "BORN EARLY STILL HERE",
  "HUNGRY SINCE BIRTH",
  "BORN HUNGRY, STAY HUNGRY",
  "AMBITION WORN DAILY",
] as const;

export const AUDIO_MATRIX: Record<(typeof SLOGANS)[number], { track: string | null }> = {
  "BORN EARLY STILL HERE": { track: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/audio_%2B036863_01_01_06_00_00-P1blBGpEuYmIC89TNSw6vvGMYvcx0p.mp4" },
  "HUNGRY SINCE BIRTH": { track: null },
  "BORN HUNGRY, STAY HUNGRY": { track: null },
  "AMBITION WORN DAILY": { track: null },
};

export function cycleSlogan(index: number, direction: -1 | 1) {
  return (index + direction + SLOGANS.length) % SLOGANS.length;
}

export function adjustVolume(volume: number, direction: -1 | 1) {
  return Math.min(100, Math.max(0, volume + direction * 10));
}

export function getNewYorkClock(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const read = (type: string) => parts.find((part) => part.type === type)?.value ?? "00";
  return { date: `${read("month")}/${read("day")}`, time: `${read("hour")}:${read("minute")}` };
}
