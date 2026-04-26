"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FAQSchema({ faqs }) {
    const { language } = useLanguage();

    if (!faqs || !Array.isArray(faqs) || faqs.length === 0) return null;

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": language === 'ar' ? (faq.question_ar || faq.question_en) : (faq.question_en || faq.question_ar),
            "acceptedAnswer": {
                "@type": "Answer",
                "text": (language === 'ar' ? (faq.answer_ar || faq.answer_en) : (faq.answer_en || faq.answer_ar))?.replace(/<[^>]*>?/gm, '')
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
    );
}
