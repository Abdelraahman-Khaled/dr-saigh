'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="main-header" id="home">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <a className="navbar-brand" href="/">
              <img src="/images/logo.webp" alt="Logo" style={{ width: '70px' }} />
            </a>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item"><a className="nav-link" href="/">{t('navbar.home')}</a></li>
                  <li className="nav-item"><a className="nav-link" href="/#about">{t('navbar.about')}</a></li>
                  <li className="nav-item"><a className="nav-link" href="/#operations">{t('navbar.operations')}</a></li>
                  <li className="nav-item"><a className="nav-link" href="/#types">{t('navbar.obesityDiseases')}</a></li>
                  <li className="nav-item"><a className="nav-link" href="/blog">{t('navbar.blog')}</a></li>
                  <li className="nav-item"><a className="nav-link" href="/contact">{t('navbar.contact')}</a></li>
                  <li className="nav-item highlighted-menu">
                    <a className="nav-link" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeE7ppxwLRQMtFq0GCTSZNTcrQBpI_opFb2ey0Sckn_VPi-Ng/viewform">
                      {t('navbar.bookAppointment')}
                    </a>
                  </li>
                  {/* Language Switcher in Navbar */}
                  <li className="nav-item">
                    <button
                      onClick={toggleLanguage}
                      className="nav-link"
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: '600'
                      }}
                      aria-label="Toggle Language"
                    >
                      {language === 'ar' ? '🌐 EN' : '🌐 AR'}
                    </button>
                  </li>
                </ul>
              </div>
              {/* Let's Start Button Start */}
              <div className="header-btn d-inline-flex">
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeE7ppxwLRQMtFq0GCTSZNTcrQBpI_opFb2ey0Sckn_VPi-Ng/viewform" className="btn-default">
                  {t('common.bookAppointment')}
                </a>
              </div>
              {/* Let's Start Button End */}
            </div>
            {/* Main Menu End */}
            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
}
