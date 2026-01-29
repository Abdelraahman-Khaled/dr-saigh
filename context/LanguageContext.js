"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../app/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLanguage = 'ar' }) => {
    const [language, setLanguage] = useState(initialLanguage);

    useEffect(() => {
        const savedLang = localStorage.getItem('appLang');
        if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
            setLanguage(savedLang);
        }
    }, []);

    useEffect(() => {
        // Update HTML attributes
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

        // Persist language choice
        localStorage.setItem('appLang', language);

        // Update body class for legacy scripts (like main.js)
        if (language === 'ar') {
            document.body.classList.add('arabic');
        } else {
            document.body.classList.remove('arabic');
        }
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
    };

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
