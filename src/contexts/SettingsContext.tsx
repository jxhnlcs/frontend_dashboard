"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SettingsContextType {
  compactMode: boolean;
  setCompactMode: (value: boolean) => void;
  language: string;
  setLanguage: (value: string) => void;
  timezone: string;
  setTimezone: (value: string) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [compactMode, setCompactMode] = useState(false);
  const [language, setLanguage] = useState("pt-BR");
  const [timezone, setTimezone] = useState("America/Sao_Paulo");

  useEffect(() => {
    const savedCompactMode = localStorage.getItem("compactMode");
    const savedLanguage = localStorage.getItem("language");
    const savedTimezone = localStorage.getItem("timezone");

    if (savedCompactMode) {
      setCompactMode(savedCompactMode === "true");
    }
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    if (savedTimezone) {
      setTimezone(savedTimezone);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("compactMode", compactMode.toString());
  }, [compactMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("timezone", timezone);
  }, [timezone]);

  return (
    <SettingsContext.Provider
      value={{
        compactMode,
        setCompactMode,
        language,
        setLanguage,
        timezone,
        setTimezone,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
} 