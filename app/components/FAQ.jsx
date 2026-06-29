'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function FAQ() {
    const { t } = useLanguage();
    const questions = t('faq.questions');

    // سكيمة FAQPage (AEO) — تُصدَّر في الـ SSR من نفس بيانات الأسئلة
    const faqSchema =
        Array.isArray(questions) && questions.length > 0
            ? {
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: questions.map((q) => ({
                      '@type': 'Question',
                      name: q.question,
                      acceptedAnswer: { '@type': 'Answer', text: q.answer },
                  })),
              }
            : null;

    const icons = [
        "images/sad-face.png",
        "images/number-2.png",
        "images/check.png",
        "images/heartbeat.png",
        "images/weight-loss-2.png"
    ];

    return (
        <div className="how-it-work" id="FAQs">
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        {/* How It Work Image Start */}
                        <div className="how-it-work-img">
                            <figure className="reveal image-anime">
                                <Image src="/images/faq.png" alt="أسئلة شائعة حول جراحة السمنة وتكميم المعدة" width={600} height={630} loading="lazy" quality={85} />
                            </figure>
                        </div>
                        {/* How It Work Image End */}
                    </div>

                    <div className="col-lg-6">
                        <div className="how-it-work-content">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <p className="wow fadeInUp">{t('faq.subtitle')}</p>
                                <h2 className="wow fadeInUp" data-cursor="-opaque">
                                    {t('faq.title')} <span>{t('faq.titleHighlight')}</span> {t('faq.titleEnd')}
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="0.25s">
                                    {t('faq.description')}
                                </p>
                            </div>
                            {/* Section Title End */}

                            {/* FAQ Accordion Start */}
                            <div className="faq-accordion how-work-accordion" id="accordion">
                                {Array.isArray(questions) && questions.map((item, index) => (
                                    <div
                                        key={index}
                                        className="accordion-item wow fadeInUp"
                                        data-wow-delay={`${index * 0.25}s`}
                                    >
                                        <div className="icon-box">
                                            <Image src={`/${icons[index] || icons[0]}`} alt="icon" width={40} height={40} loading="lazy" />
                                        </div>
                                        <h2 className="accordion-header" id={`heading${index + 1}`}>
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${index + 1}`}
                                                aria-expanded="false"
                                                aria-controls={`collapse${index + 1}`}
                                            >
                                                {item.question}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${index + 1}`}
                                            className="accordion-collapse collapse"
                                            aria-labelledby={`heading${index + 1}`}
                                            data-bs-parent="#accordion"
                                        >
                                            <div className="accordion-body">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
