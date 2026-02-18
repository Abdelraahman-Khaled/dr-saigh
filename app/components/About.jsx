'use client';

import Image from 'next/image';
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
                                    <Image
                                        src="/images/about-us-img-1.jpg"
                                        alt="about"
                                        width={410}
                                        height={394}
                                        loading="lazy"
                                        quality={85}
                                    />
                                </figure>
                            </div>

                            <div className="about-img-2">
                                <figure className="image-anime reveal">
                                    <Image
                                        src="/images/about-us-img-2.jpg"
                                        alt="about"
                                        width={300}
                                        height={216}
                                        loading="lazy"
                                        quality={85}
                                    />
                                </figure>
                            </div>

                            {/* About Experience Circle Start */}
                            <div className="about-experience">
                                <figure>
                                    <Image
                                        src="/images/about-experience-circle.png"
                                        alt="experience"
                                        width={112}
                                        height={112}
                                        loading="lazy"
                                    />
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
                                <p className="wow fadeInUp">{t('about.subtitle')}</p>
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
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeE7ppxwLRQMtFq0GCTSZNTcrQBpI_opFb2ey0Sckn_VPi-Ng/viewform" target="_blank" rel="noopener noreferrer" className="btn-default">
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
