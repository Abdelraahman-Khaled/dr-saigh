'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function WhyChooseUs() {
    const { t } = useLanguage();
    const benefits = t('whyChooseUs.benefits');

    // Icons mapping for each benefit
    const benefitIcons = [
        'weight-loss.png',
        'hormone-therapy.png',
        'cholesterol.png',
        'gym.png',
        'sleep-quality.png',
        'eat.png'
    ];

    return (
        <div className="why-choose-us" id="types">
            <div className="container">
                <div className="row section-row">
                    <div className="col-lg-12">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">{t('whyChooseUs.subtitle')}</h3>
                            <h2 className="wow fadeInUp" data-cursor="-opaque">
                                {t('whyChooseUs.title')} <span>{t('whyChooseUs.titleHighlight')}</span> {t('whyChooseUs.titleEnd')}
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">
                                {t('whyChooseUs.description')}
                            </p>
                        </div>
                        {/* Section Title End */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 order-1">
                        {/* Why Choose Box Start */}
                        <div className="why-choose-box-1">
                            {Array.isArray(benefits) && benefits.slice(0, 3).map((benefit, index) => (
                                <div key={index} className="why-choose-item wow fadeInUp" data-wow-delay={`${index * 0.25}s`}>
                                    {/* Icon Box Start */}
                                    <div className="icon-box">
                                        <img src={`images/${benefitIcons[index]}`} alt="image" />
                                    </div>
                                    {/* Icon Box End */}

                                    {/* Why Choose Content Start */}
                                    <div className="why-choose-content">
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                    </div>
                                    {/* Why Choose Content End */}
                                </div>
                            ))}
                        </div>
                        {/* Why Choose Box End */}
                    </div>

                    <div className="col-lg-4 order-lg-1 order-md-2 order-1">
                        {/* Why Choose Image Start */}
                        <div className="why-choose-image wow fadeInUp">
                            <figure>
                                <img src="images/why-choose-us-img.png" alt="image" />
                            </figure>
                        </div>
                        {/* Why Choose Image End */}
                    </div>

                    <div className="col-lg-4 col-md-6 order-lg-2 order-md-1 order-2">
                        {/* Why Choose Box Start */}
                        <div className="why-choose-box-2">
                            {Array.isArray(benefits) && benefits.slice(3, 6).map((benefit, index) => (
                                <div key={index + 3} className="why-choose-item wow fadeInUp" data-wow-delay={`${index * 0.25}s`}>
                                    {/* Icon Box Start */}
                                    <div className="icon-box">
                                        <img src={`images/${benefitIcons[index + 3]}`} alt="image" />
                                    </div>
                                    {/* Icon Box End */}

                                    {/* Why Choose Content Start */}
                                    <div className="why-choose-content">
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                    </div>
                                    {/* Why Choose Content End */}
                                </div>
                            ))}
                        </div>
                        {/* Why Choose Box End */}
                    </div>
                </div>
            </div>
            {/* Icon Start Image Start */}
            <div className="icon-star-image">
                <img src="images/icon-star.svg" alt="image" />
            </div>
            {/* Icon Start Image End */}
        </div>
    );
}
