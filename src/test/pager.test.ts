import { describe, expect, it } from "vitest";
import { AUDIO_MATRIX, SLOGANS, adjustVolume, cycleSlogan, getNewYorkClock } from "@/lib/pager";

describe("pager controls", () => {
  it("cycles through the four requested slogans in order and wraps around", () => {
    expect(SLOGANS).toEqual([
      "BORN EARLY STILL HERE",
      "HUNGRY SINCE BIRTH",
      "BORN HUNGRY, STAY HUNGRY",
      "AMBITION WORN DAILY",
    ]);
    expect(cycleSlogan(3, 1)).toBe(0);
    expect(cycleSlogan(0, -1)).toBe(3);
    expect(Object.keys(AUDIO_MATRIX)).toEqual([...SLOGANS]);
  });

  it("adjusts volume in ten-percent steps within 0–100 percent", () => {
    expect(adjustVolume(50, 1)).toBe(60);
    expect(adjustVolume(100, 1)).toBe(100);
    expect(adjustVolume(0, -1)).toBe(0);
  });

  it("uses America/New_York for the MM/DD and 24-hour HH:MM clock", () => {
    expect(getNewYorkClock(new Date("2026-10-03T18:23:00Z"))).toEqual({ date: "10/03", time: "14:23" });
    expect(getNewYorkClock(new Date("2026-01-01T02:05:00Z"))).toEqual({ date: "12/31", time: "21:05" });
  });
});