'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* About Footer Start */}
                        <div className="about-footer">
                            {/* Footer Logo Start */}
                            <div className="footer-logo">
                                <img src="/images/logo.webp" style={{ width: '100px' }} alt="image" />
                            </div>
                            {/* Footer Logo End */}

                            {/* About Footer Content Start */}
                            <div className="about-footer-content">
                                <p>
                                    {t('footer.description')}
                                </p>
                            </div>
                            {/* About Footer Content End */}
                        </div>
                        {/* About Footer End */}
                    </div>
                    <div className="col-lg-3 col-md-4">
                        {/* Footer Quick Links Start */}
                        <div className="footer-links footer-quick-links">
                            <h3>{t('footer.quickLinks')}</h3>
                            <ul>
                                <li><a href="#home">{t('footer.links.home')}</a></li>
                                <li><a href="#about">{t('footer.links.about')}</a></li>
                                <li><a href="#operations">{t('footer.links.operations')}</a></li>
                                <li>
                                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeE7ppxwLRQMtFq0GCTSZNTcrQBpI_opFb2ey0Sckn_VPi-Ng/viewform">
                                        {t('footer.links.bookAppointment')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Footer Quick Links End */}
                    </div>

                    <div className="col-lg-3 col-md-4">
                        {/* Footer Social Links Start */}
                        <div className="footer-links footer-social-links">
                            <h3>{t('footer.socialMedia')}</h3>
                            <ul className="d-flex flex-wrap gap-1 mt-5 justify-content-between">
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100063006469853&mibextid=LQQJ4d" target="_blank">
                                        <i className="fa-brands fa-facebook-f fa-2x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCxWDOnuXT52pnrhm9kh7puA?app=desktop" target="_blank">
                                        <i className="fa-brands fa-youtube fa-2x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com/@dralsaigh?_t=8mhhDHkrj61&_r=1" target="_blank">
                                        <i className="fa-brands fa-tiktok fa-2x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.snapchat.com/add/dr.alsaigh?invite_id=61uL12f6&locale=en_SA%40calendar%3Dgregorian&share_id=kzKwOgRTTw-EiB2avINOfw&sid=6367c8d2dd774adc9e2d84cda7f26ae0" target="_blank">
                                        <i className="fa-brands fa-snapchat fa-2x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/aarsaigh" target="_blank">
                                        <i className="fa-brands fa-twitter fa-2x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/dr_Abdelrahman_alsaigh?igsh=MjVuYjlobTE4MnJv" target="_blank">
                                        <i className="fa-brands fa-instagram fa-2x"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Footer Social Links End */}
                    </div>

                    <div className="col-lg-2 col-md-4">
                        {/* Footer Contact Links Start */}
                        <div className="footer-links footer-contact-links">
                            <h3>{t('footer.contactUs')}</h3>
                            <ul>
                                <li><a href="mailto:aarsaigh@hotmail.com">{t('contact.email')}</a></li>
                                <li dir="ltr" className="text-end"><a href="tel:966552200258">{t('contact.phone')}</a></li>
                            </ul>
                        </div>
                        {/* Footer Contact Links End */}
                    </div>
                </div>

                {/* Footer Copyright Section Start */}
                <div className="footer-copyright">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Footer Copyright Start */}
                            <div className="footer-copyright-text">
                                <p>{t('footer.copyright')}</p>
                            </div>
                            {/* Footer Copyright End */}
                        </div>
                    </div>
                </div>
                {/* Footer Copyright Section End */}
            </div>
        </footer>
    );
}
