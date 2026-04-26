"use client";

import { useLanguage } from '@/context/LanguageContext';
import './FAQSlug.css';

export default function FAQSlug({ items = [] }) {
    const { language } = useLanguage();

    if (!items || items.length === 0) return null;

    return (
        <div className="faq-container" id="FAQs">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="faq-title">
                            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                        </h2>
                        <div className="faq-accordion" id="accordion">
                            {items.map((faq, index) => {
                                const question = language === 'ar' ? faq.question_ar : faq.question_en;
                                const answer = language === 'ar' ? faq.answer_ar : faq.answer_en;
                                const delay = index * 0.1;

                                return (
                                    <div
                                        key={faq.id}
                                        className="accordion-item wow fadeInUp"
                                        data-wow-delay={`${delay}s`}
                                    >
                                        <h2 className="accordion-header" id={`heading${faq.id}`}>
                                            <button
                                                className="accordion-button p-2 collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${faq.id}`}
                                                aria-expanded="false"
                                                aria-controls={`collapse${faq.id}`}
                                            >
                                                <div className="faq-icon-box">
                                                    {index + 1}
                                                </div>
                                                <span className="question-text">{question}</span>
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${faq.id}`}
                                            className="accordion-collapse collapse"
                                            aria-labelledby={`heading${faq.id}`}
                                            data-bs-parent="#accordion"
                                        >
                                            <div className="accordion-body p-3">
                                                <div dangerouslySetInnerHTML={{ __html: answer }} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
