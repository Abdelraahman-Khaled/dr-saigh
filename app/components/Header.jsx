export default function Header() {
  return (
    <header className="main-header" id="home">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <a className="navbar-brand" href="./">
              <img src="/images/logo.webp" alt="Logo" style={{ width: '70px' }} />
            </a>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item"><a className="nav-link" href="/">الرئيسية</a></li>
                  <li className="nav-item"><a className="nav-link" href="/#about">عن الدكتور</a></li>
                  <li className="nav-item"><a className="nav-link" href="/#operations">العمليات</a></li>
                  <li className="nav-item"><a className="nav-link" href="/#types">أمراض السمنة</a></li>
                  <li className="nav-item"><a className="nav-link" href="/blog">المدونة</a></li>
                  <li className="nav-item"><a className="nav-link" href="/contact">التواصل</a></li>
                  <li className="nav-item highlighted-menu">
                    <a className="nav-link" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeE7ppxwLRQMtFq0GCTSZNTcrQBpI_opFb2ey0Sckn_VPi-Ng/viewform">
                      حجز موعد
                    </a>
                  </li>
                </ul>
              </div>
              {/* Let's Start Button Start */}
              <div className="header-btn d-inline-flex">
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeE7ppxwLRQMtFq0GCTSZNTcrQBpI_opFb2ey0Sckn_VPi-Ng/viewform" className="btn-default">
                  حجز موعد
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
