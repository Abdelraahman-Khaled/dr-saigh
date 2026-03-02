'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactHero() {
    const { t, localePath } = useLanguage();

    return (
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Page Header Box Start */}
                        <div className="page-header-box">
                            <h1 className="wow fadeInUp" data-cursor="-opaque">
                                {t('contactPage.hero.title')}
                            </h1>
                            <nav className="wow fadeInUp" data-wow-delay="0.25s">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href={localePath('/')}>{t('contactPage.hero.breadcrumbHome')}</Link></li>
                                    <li className="breadcrumb-item active">{t('contactPage.hero.breadcrumbCurrent')}</li>
                                </ol>
                            </nav>
                        </div>
                        {/* Page Header Box End */}
                    </div>
                </div>
            </div>
        </div>
    );
}
