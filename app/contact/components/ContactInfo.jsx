'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ContactInfo() {
    const { t, language } = useLanguage();

    return (
        <div className="page-contact" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Section Title Start */}
                        <div className="section-title text-center">
                            <h3 className="wow fadeInUp">{t('contactPage.info.subtitle')}</h3>
                            <h2 className="wow fadeInUp" data-wow-delay="0.25s">{t('contactPage.info.title')}</h2>
                        </div>
                        {/* Section Title End */}
                    </div>
                </div>

                <div className="row contact-us-content">
                    <div className="col-lg-4 col-md-6">
                        {/* Contact Us Item Start */}
                        <div className="contact-us-item wow fadeInUp">
                            <div className="icon-box">
                                <img src="/images/icon-cta-phone.svg" alt="phone" />
                            </div>
                            <div className="contact-info-content">
                                <h3>{t('contactPage.info.phone')}</h3>
                                <p dir="ltr" className={`${language === 'ar' ? 'text-end' : 'text-start'}`}>
                                    <a href="tel:966552200258">+966 552 200 258</a>
                                </p>
                            </div>
                        </div>
                        {/* Contact Us Item End */}
                    </div>

                    <div className="col-lg-4 col-md-6">
                        {/* Contact Us Item Start */}
                        <div className="contact-us-item wow fadeInUp" data-wow-delay="0.25s">
                            <div className="icon-box">
                                <img src="/images/icon-mail.svg" alt="email" />
                            </div>
                            <div className="contact-info-content">
                                <h3>{t('contactPage.info.email')}</h3>
                                <p>
                                    <a href="mailto:aarsaigh@hotmail.com">aarsaigh@hotmail.com</a>
                                </p>
                            </div>
                        </div>
                        {/* Contact Us Item End */}
                    </div>

                    <div className="col-lg-4 col-md-6">
                        {/* Contact Us Item Start */}
                        <div className="contact-us-item wow fadeInUp" data-wow-delay="0.5s">
                            <div className="icon-box">
                                <img src="/images/icon-clock.svg" alt="hours" />
                            </div>
                            <div className="contact-info-content">
                                <h3>{t('contactPage.info.hours')}</h3>
                                <p>{t('contactPage.info.hoursText')}</p>
                            </div>
                        </div>
                        {/* Contact Us Item End */}
                    </div>
                    <div className="col-lg-4 col-md-6 text-center w-100">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeE7ppxwLRQMtFq0GCTSZNTcrQBpI_opFb2ey0Sckn_VPi-Ng/viewform" target="_blank" rel="noopener noreferrer" className="btn-default" style={{ display: 'inline-block', marginTop: '10px' }}>
                            {t('contactPage.info.bookNow')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
