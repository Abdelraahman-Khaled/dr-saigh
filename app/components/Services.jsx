'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
    const { t } = useLanguage();
    const servicesData = t('services.types');

    // Service types array with their keys and icons
    const serviceTypes = [
        { key: 'gastricSleeve', icon: 'gastric-bypass.png', popupClass: 'one' },
        { key: 'gastricBypass', icon: 'stomach.png', popupClass: 'two' },
        { key: 'classicBypass', icon: 'recycle.png', popupClass: 'three' },
        { key: 'miniBypass', icon: 'stomach-2.png', popupClass: 'four' },
        { key: 'revision', icon: 'plastic-surgery.png', popupClass: 'five' }
    ];

    return (
        <div className="our-services" id="operations">
            <div className="container" style={{ position: 'relative' }}>
                <div className="row section-row">
                    <div className="col-lg-12">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">{t('services.subtitle')}</h3>
                            <h2 className="wow fadeInUp" data-cursor="-opaque">
                                {t('services.title')} <span>{t('services.titleHighlight')}</span> {t('services.titleEnd')}
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">
                                {t('services.description')}
                            </p>
                        </div>
                        {/* Section Title End */}
                    </div>
                </div>

                <div className="row">
                    {serviceTypes.slice(0, 3).map((service, index) => (
                        <div key={service.key} className="col-lg-4 col-md-6">
                            {/* Service Item Start */}
                            <div className="service-item wow fadeInUp" data-wow-delay={`${index * 0.25}s`}>
                                <div className="icon-box">
                                    <div className="img">
                                        <img src={`images/${service.icon}`} alt="image" />
                                    </div>
                                </div>
                                <div className="service-body">
                                    <h3>{servicesData[service.key]?.title}</h3>
                                    <p>{servicesData[service.key]?.preview}</p>
                                </div>
                                <div className="read-more-btn">
                                    <a href="javascript:void(0)" className={`read-more read-more-${index + 1}`}>
                                        {t('common.readMore')}
                                    </a>
                                </div>
                            </div>
                            {/* Service Item End */}
                        </div>
                    ))}

                    {serviceTypes.slice(3, 5).map((service, index) => (
                        <div key={service.key} className="col-md-6">
                            {/* Service Item Start */}
                            <div className="service-item wow fadeInUp" data-wow-delay="0.75s">
                                <div className="icon-box">
                                    <div className="img">
                                        <img src={`images/${service.icon}`} alt="image" />
                                    </div>
                                </div>
                                <div className="service-body">
                                    <h3>{servicesData[service.key]?.title}</h3>
                                    <p>{servicesData[service.key]?.preview}</p>
                                </div>
                                <div className="read-more-btn">
                                    <a href="javascript:void(0)" className={`read-more read-more-${index + 4}`}>
                                        {t('common.readMore')}
                                    </a>
                                </div>
                            </div>
                            {/* Service Item End */}
                        </div>
                    ))}

                    <div className="col-lg-12">
                        {/* Service Box Footer Start */}
                        <div className="services-box-footer wow fadeInUp" data-wow-delay="1s">
                            <p>{t('services.footer')}</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeE7ppxwLRQMtFq0GCTSZNTcrQBpI_opFb2ey0Sckn_VPi-Ng/viewform" target="_blank" className="btn-default">
                                {t('common.bookAppointment')}
                            </a>
                        </div>
                        {/* Service Box Footer End */}
                    </div>
                </div>

                {/* POPUPS START */}
                {serviceTypes.map((service, index) => {
                    const serviceData = servicesData[service.key];
                    return (
                        <section key={service.key} className={`popup ${service.popupClass}`}>
                            <div className="layer">
                                <div className="container">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <h3>{serviceData?.title}</h3>
                                        <i className="fa fa-close"></i>
                                    </div>
                                    <p>{serviceData?.description}</p>

                                    {serviceData?.mechanism && (
                                        <>
                                            <h3>{serviceData.mechanism}</h3>
                                            <p>{serviceData.mechanismText}</p>
                                        </>
                                    )}

                                    {serviceData?.advantages && (
                                        <>
                                            <h3>{serviceData.advantages}</h3>
                                            <ul>
                                                {Array.isArray(serviceData.advantagesList) && serviceData.advantagesList.map((advantage, idx) => (
                                                    <li key={idx}>{advantage}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    {serviceData?.procedures && (
                                        <>
                                            <h3>{serviceData.procedures}</h3>
                                            <ul>
                                                {Array.isArray(serviceData.proceduresList) && serviceData.proceduresList.map((procedure, idx) => (
                                                    <li key={idx}>{procedure}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    {serviceData?.reasons && (
                                        <>
                                            <h3>{serviceData.reasons}</h3>
                                            <ul>
                                                {Array.isArray(serviceData.reasonsList) && serviceData.reasonsList.map((reason, idx) => (
                                                    <li key={idx}>{reason}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        </section>
                    );
                })}
                {/* POPUPS END */}
            </div>

            {/* Intro Clinic Video Section Start */}
            <div className="intro-clinic-video">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Visit Clinic Start */}
                            <div className="visit-clinic parallaxie">
                                {/* Visit Clinic Content Start */}
                                <div className="visit-clinic-content">
                                    {/* Section Title Start */}
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">{t('services.podcast.title')}</h3>
                                        <p style={{ color: '#fff', position: 'relative' }} className="wow fadeInUp" data-cursor="-opaque">
                                            {t('services.podcast.hashtags')}
                                        </p>
                                    </div>
                                    {/* Section Title End */}

                                    {/* Visit Clinic Btn Start */}
                                    <div className="visit-clinic-btn wow fadeInUp" data-wow-delay="0.25s" data-cursor-text={t('common.watch')}>
                                        <a href="https://www.youtube.com/watch?v=hy-XN0H5gBc" className="popup-video play-btn">
                                            {t('common.playVideo')}
                                        </a>
                                    </div>
                                    {/* Visit Clinic Btn End */}
                                </div>
                                {/* Visit Clinic Content End */}
                            </div>
                            {/* Visit Clinic End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Intro Clinic Video Section End */}

            {/* Icon Start Image Start */}
            <div className="icon-star-image">
                <img src="images/icon-star.svg" alt="image" />
            </div>
            {/* Icon Start Image End */}
        </div>
    );
}
