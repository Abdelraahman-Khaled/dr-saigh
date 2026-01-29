'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function WhatsAppButton() {
    const { t } = useLanguage();

    return (
        <a href="https://api.whatsapp.com/send?phone=966552200258" target="_blank" className="whatsapp">
            <img src="/images/whatsapp.png" loading="lazy" alt="whatsapp" />
            {t('common.bookNow')}
        </a>
    );
}
