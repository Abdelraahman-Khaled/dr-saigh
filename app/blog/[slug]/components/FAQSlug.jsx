"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function FAQSlug({ items = [] }) {
    const { language } = useLanguage();

    if (!items || items.length === 0) return null;

    // Icon mapping for visual variety (you can customize these)
    const icons = [
        "/images/sad-face.png",
        "/images/number-2.png",
        "/images/check.png",
        "/images/heartbeat.png",
        "/images/weight-loss-2.png"
    ];

    return (
        <div className="how-it-work" id="FAQs">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        {/* How It Work Image Start */}
                        <div className="how-it-work-img">
                            <figure className="reveal image-anime">
                                <img src="/images/faq.png" alt="FAQ" />
                            </figure>
                        </div>
                        {/* How It Work Image End */}
                    </div>

                    <div className="col-lg-6">
                        <div className="how-it-work-content">
                            {/* FAQ Accordion Start */}
                            <div className="faq-accordion how-work-accordion" id="accordion">
                                {items.map((faq, index) => {
                                    const question = language === 'ar' ? faq.question_ar : faq.question_en;
                                    const answer = language === 'ar' ? faq.answer_ar : faq.answer_en;
                                    const delay = index * 0.25;
                                    const iconSrc = icons[index % icons.length];

                                    return (
                                        <div
                                            key={faq.id}
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay={`${delay}s`}
                                        >
                                            <div className="icon-box">
                                                <img src={iconSrc} alt="icon" />
                                            </div>
                                            <h2 className="accordion-header" id={`heading${faq.id}`}>
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${faq.id}`}
                                                    aria-expanded="false"
                                                    aria-controls={`collapse${faq.id}`}
                                                >
                                                    {question}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${faq.id}`}
                                                className="accordion-collapse collapse"
                                                aria-labelledby={`heading${faq.id}`}
                                                data-bs-parent="#accordion"
                                            >
                                                <div className="accordion-body">
                                                    <div dangerouslySetInnerHTML={{ __html: answer }} />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {/* FAQ Accordion End */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
