'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function About() {
    const { t } = useLanguage();
    const qualifications = t('about.qualifications');

    return (
        <div className="about-us" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        {/* About Image Start */}
                        <div className="about-image">
                            <div className="about-img-1">
                                <figure className="image-anime reveal">
                                    <img src="images/about-us-img-1.jpg" alt="image" />
                                </figure>
                            </div>

                            <div className="about-img-2">
                                <figure className="image-anime reveal">
                                    <img src="images/about-us-img-2.jpg" alt="image" />
                                </figure>
                            </div>

                            {/* About Experience Circle Start */}
                            <div className="about-experience">
                                <figure>
                                    <img src="images/about-experience-circle.png" alt="image" />
                                </figure>
                            </div>
                            {/* About Experience Circle End */}
                        </div>
                        {/* About Image End */}
                    </div>

                    <div className="col-lg-6">
                        {/* About Content Start */}
                        <div className="about-content">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">{t('about.subtitle')}</h3>
                                <h2 className="wow fadeInUp" data-cursor="-opaque">
                                    {t('about.title')}
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="0.25s">
                                    {t('about.description')}
                                </p>
                            </div>
                            {/* Section Title End */}

                            {/* About Us Body Start */}
                            <div className="about-us-body wow fadeInUp" data-wow-delay="0.5s">
                                <ul>
                                    {Array.isArray(qualifications) && qualifications.map((qual, index) => (
                                        <li key={index}>{qual}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* About Us Body End */}

                            {/* About Us Footer Start */}
                            <div className="about-us-footer wow fadeInUp" data-wow-delay="0.75s">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeE7ppxwLRQMtFq0GCTSZNTcrQBpI_opFb2ey0Sckn_VPi-Ng/viewform" target="_blank" className="btn-default">
                                    {t('common.bookAppointment')}
                                </a>
                            </div>
                            {/* About Us Footer End */}
                        </div>
                        {/* About Content End */}
                    </div>
                </div>
            </div>
        </div>
    );
}
