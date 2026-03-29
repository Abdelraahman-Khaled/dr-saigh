'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function Services({ initialOperations = [] }) {
    const { language, t } = useLanguage();

    // Split operations for the specific grid layout (3+2)
    const firstThree = initialOperations.slice(0, 3);
    const nextTwo = initialOperations.slice(3, 5);

    return (
        <div className="our-services" id="operations">
            <div className="container" style={{ position: 'relative' }}>
                <div className="row section-row">
                    <div className="col-lg-12">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <p className="wow fadeInUp">{t('services.subtitle')}</p>
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
                    {firstThree.map((op, index) => {
                        const title = language === 'ar' ? op.title_ar : op.title_en;
                        const preview = language === 'ar' ? op.description_ar : op.description_en;
                        const slug = language === 'ar' ? op.slug_ar : op.slug;
                        const imageUrl = op.photos?.[0]?.url || 'images/gastric-bypass.png';

                        return (
                            <div key={op.id || index} className="col-lg-4 col-md-6">
                                {/* Service Item Start */}
                                <div className="service-item wow fadeInUp" data-wow-delay={`${index * 0.25}s`}>
                                    <div className="icon-box">
                                        <div className="img">
                                            <img
                                                src={imageUrl}
                                                alt={title}
                                                style={{ width: '64px', height: '64px', objectFit: 'contain' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="service-body">
                                        <h3>
                                            <Link href={`/operations/${slug}`}>
                                                {title}
                                            </Link>
                                        </h3>
                                        <p>{preview}</p>
                                    </div>
                                    <div className="read-more-btn">
                                        <Link href={`/operations/${slug}`} className="read-more">
                                            {t('common.readMore')}
                                        </Link>
                                    </div>
                                </div>
                                {/* Service Item End */}
                            </div>
                        );
                    })}

                    {nextTwo.map((op, index) => {
                        const title = language === 'ar' ? op.title_ar : op.title_en;
                        const preview = language === 'ar' ? op.description_ar : op.description_en;
                        const slug = language === 'ar' ? op.slug_ar : op.slug;
                        const imageUrl = op.photos?.[0]?.url || 'images/plastic-surgery.png';

                        return (
                            <div key={op.id || index} className="col-md-6">
                                {/* Service Item Start */}
                                <div className="service-item wow fadeInUp" data-wow-delay="0.75s">
                                    <div className="icon-box">
                                        <div className="img">
                                            <img
                                                src={imageUrl}
                                                alt={title}
                                                style={{ width: '64px', height: '64px', objectFit: 'contain' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="service-body">
                                        <h3>
                                            <Link href={`/operations/${slug}`}>
                                                {title}
                                            </Link>
                                        </h3>
                                        <p>{preview}</p>
                                    </div>
                                    <div className="read-more-btn">
                                        <Link href={`/operations/${slug}`} className="read-more">
                                            {t('common.readMore')}
                                        </Link>
                                    </div>
                                </div>
                                {/* Service Item End */}
                            </div>
                        );
                    })}

                    <div className="col-lg-12">
                        {/* Service Box Footer Start */}
                        <div className="services-box-footer wow fadeInUp" data-wow-delay="1s">
                            <p>{t('services.footer')}</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeE7ppxwLRQMtFq0GCTSZNTcrQBpI_opFb2ey0Sckn_VPi-Ng/viewform" target="_blank" rel="noopener noreferrer" className="btn-default">
                                {t('common.bookAppointment')}
                            </a>
                        </div>
                        {/* Service Box Footer End */}
                    </div>
                </div>
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
