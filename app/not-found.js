'use client';

import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function NotFound() {
    const { t } = useLanguage();

    return (
        <>
            <Header />
            <div className="error-page section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="error-page-content text-center">
                                <div className="error-code">
                                    <h1 className="wow fadeInUp" data-cursor="-opaque">
                                        {t('notFound.title')}
                                    </h1>
                                </div>
                                <div className="error-text wow fadeInUp" data-wow-delay="0.25s">
                                    <h2 className="section-title-h2">{t('notFound.subtitle')}</h2>
                                    <p>{t('notFound.description')}</p>
                                    <Link href="/" className="btn-default">
                                        {t('notFound.backToHome')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            <style jsx>{`
                .error-page {
                    padding: 120px 0;
                    background-color: var(--secondary-color);
                    min-height: 60vh;
                    display: flex;
                    align-items: center;
                }
                .error-code h1 {
                    font-size: 150px;
                    line-height: 1;
                    color: var(--accent-color);
                    font-weight: 800;
                    margin-bottom: 20px;
                }
                .error-text h2 {
                    font-size: 36px;
                    margin-bottom: 20px;
                    color: var(--primary-color);
                }
                .error-text p {
                    font-size: 18px;
                    margin-bottom: 40px;
                    color: var(--text-color);
                }
                @media (max-width: 768px) {
                    .error-code h1 {
                        font-size: 100px;
                    }
                    .error-text h2 {
                        font-size: 28px;
                    }
                }
            `}</style>
        </>
    );
}
