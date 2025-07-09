// contexts/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

interface TranslationNamespace {
  [key: string]: string;
}

interface LoadedTranslations {
  [namespace: string]: {
    [language: string]: TranslationNamespace;
  };
}

interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
  t: (namespace: string, key: string) => string;
  isTranslationsReady: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('selectedLanguage');
      if (savedLang && ['es', 'en'].includes(savedLang)) {
        return savedLang;
      }
    }
    return 'es';
  });

  const [isTranslationsReady, setIsTranslationsReady] = useState<boolean>(false);
  const isInitialLoadDone = useRef(false);

  const loadedTranslations = useRef<LoadedTranslations>({});
  const loadingPromises = useRef<Record<string, Promise<TranslationNamespace> | undefined>>({});
  const currentLanguageRef = useRef(language);

  const validNamespaces = useRef<Set<string>>(new Set(['common', 'home', 'footer', 'contact', 'about', 'aire', 'audio','cameras', 'access',
    'lighting','iot', 'gates', 'network', 'curtains', 'contactForm'
  ]));

  useEffect(() => {
    currentLanguageRef.current = language;
  }, [language]);

  const loadNamespace = useCallback(async (lang: string, namespace: string): Promise<TranslationNamespace> => {
    const key = `${lang}-${namespace}`;

    if (!validNamespaces.current.has(namespace)) {
      return {};
    }

    if (loadedTranslations.current[namespace]?.[lang]) {
      return loadedTranslations.current[namespace][lang];
    }

    const existingPromise = loadingPromises.current[key];
    if (existingPromise !== undefined) {
      return existingPromise;
    }

    if (!loadedTranslations.current[namespace]) {
      loadedTranslations.current[namespace] = {};
    }

    // AÑADIDO: **IMPORTANTE** Solo intenta hacer fetch si estamos en el cliente (navegador)
    if (typeof window === 'undefined') {
      // Si estamos en el servidor (SSR/prerendering), no intentamos cargar los JSON de locales
      // Devolvemos una promesa resuelta vacía para no bloquear
      return Promise.resolve({});
    }

    const promise = fetch(`/locales/${lang}/${namespace}.json`)
      .then(res => {
        if (!res.ok) {
          console.warn(`[i18n] Failed to load translations for /locales/${lang}/${namespace}.json. Status: ${res.status}`);
          return {};
        }
        return res.json();
      })
      .then(data => {
        loadedTranslations.current[namespace][lang] = data;
        return data;
      })
      .catch(error => {
        console.error(`[i18n] Error loading translation for ${lang}/${namespace}.json:`, error);
        return {};
      })
      .finally(() => {
        delete loadingPromises.current[key];
      });

    loadingPromises.current[key] = promise;
    return promise;
  }, []);

  const loadTranslationsForLanguage = useCallback(async (langToLoad: string, namespaces: string[]) => {
    const valid = namespaces.filter(ns => validNamespaces.current.has(ns));
    const promises = valid.map(namespace => loadNamespace(langToLoad, namespace));

    await Promise.allSettled(promises);

    if (langToLoad === currentLanguageRef.current) {
      setIsTranslationsReady(true);
    }
  }, [loadNamespace]);

  useEffect(() => {
    // CAMBIO: Asegúrate de que el localStorage.setItem solo se llame en el cliente.
    // También asegúrate de que la carga inicial de traducciones solo se haga en el cliente.
    if (typeof window !== 'undefined' && !isInitialLoadDone.current) {
      // Si el idioma inicial proviene del localStorage, guárdalo explícitamente.
      // Si no, el `setLanguage` ya lo establece.
      localStorage.setItem('selectedLanguage', language);
      loadTranslationsForLanguage(language, [
        'common', 'home', 'footer', 'contact','about', 'aire','audio', 'cameras','access',
        'lighting','iot','gates', 'network','curtains', 'contactForm'
      ]);
      isInitialLoadDone.current = true;
    }
  }, [language, loadTranslationsForLanguage]);


  useEffect(() => {
    // CAMBIO: Asegúrate de que el localStorage.setItem solo se llame en el cliente.
    if (typeof window !== 'undefined' && isInitialLoadDone.current) {
      localStorage.setItem('selectedLanguage', language);
      setIsTranslationsReady(false);
      loadTranslationsForLanguage(language, [
        'common', 'home', 'footer', 'contact', 'about', 'aire', 'audio', 'cameras', 'access',
        'lighting','iot','gates','network', 'curtains', 'contactForm'
      ]);
    }
  }, [language, loadTranslationsForLanguage]);

  const changeLanguage = useCallback((newLang: string) => {
    if (['es', 'en'].includes(newLang) && newLang !== language) {
      setLanguage(newLang);
    } else {
      console.warn(`[i18n] Attempted to set unsupported or same language: ${newLang}`);
    }
  }, [language]);

  const t = useCallback((namespace: string, key: string): string => {
    const currentLang = language;

    if (!validNamespaces.current.has(namespace)) {
      return key;
    }

    if (loadedTranslations.current[namespace]?.[currentLang]?.[key]) {
      return loadedTranslations.current[namespace][currentLang][key];
    }

    // CAMBIO: Solo intenta cargar el namespace si estamos en el cliente Y la carga inicial ya se hizo
    if (typeof window !== 'undefined' && isInitialLoadDone.current) {
      loadNamespace(currentLang, namespace);
    }

    return key;
  }, [language, loadNamespace, isInitialLoadDone]);

  return (
    <LanguageContext.Provider value={{
      language,
      changeLanguage,
      t,
      isTranslationsReady
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};