import { useState, useCallback, useEffect, useRef } from "react";

let voices: SpeechSynthesisVoice[] = [];

function loadVoices() {
  voices = speechSynthesis.getVoices();
}

if (typeof window !== "undefined" && "speechSynthesis" in window) {
  loadVoices();
  speechSynthesis.addEventListener("voiceschanged", loadVoices);
}

function getChineseVoice(): SpeechSynthesisVoice | undefined {
  return (
    voices.find((v) => v.lang === "zh-CN" && v.localService === false) ??
    voices.find((v) => v.lang === "zh-CN") ??
    voices.find((v) => v.lang.startsWith("zh"))
  );
}

export function useSpeech() {
  const [speaking, setSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = useCallback((text: string, rate = 0.8) => {
    if (!("speechSynthesis" in window)) return;

    // Cancel any ongoing speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = getChineseVoice();
    if (voice) utterance.voice = voice;
    utterance.lang = "zh-CN";
    utterance.rate = rate;
    utterance.pitch = 1;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    speechSynthesis.cancel();
    setSpeaking(false);
  }, []);

  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  return { speak, stop, speaking };
}
