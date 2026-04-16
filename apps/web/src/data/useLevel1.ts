import { useMemo } from "react";
import { useI18n } from "@/i18n";
import { level1Lessons as level1En } from "./level1";
import { level1LessonsHr as level1Hr } from "./level1_hr";

export function useLevel1Lessons() {
  const { locale } = useI18n();
  return useMemo(() => (locale === "hr" ? level1Hr : level1En), [locale]);
}
