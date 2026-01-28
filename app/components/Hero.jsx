export default function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        {/* Hero Content Start */}
                        <div className="hero-content">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h1 className="wow fadeInUp" data-cursor="-opaque">
                                    محارب <span>السمنة</span>
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay="0.25s">
                                    خبرة واسعة في تقديم أحدث التقنيات الجراحية، مع التركيز على تحقيق أفضل النتائج الطبية
                                    بأعلى معايير الجودة.
                                    نسعى لتوفير رعاية طبية شاملة ومتميزة لمرضانا.
                                </p>
                            </div>
                            {/* Section Title End */}

                            {/* Hero Content Body Start */}
                            <div className="hero-content-body wow fadeInUp" data-wow-delay="0.5s">
                                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeE7ppxwLRQMtFq0GCTSZNTcrQBpI_opFb2ey0Sckn_VPi-Ng/viewform" className="btn-default">
                                    حجز موعد
                                </a>
                            </div>
                            {/* Hero Content Body End */}
                        </div>
                        {/* Hero Content End */}
                    </div>

                    <div className="col-lg-6">
                        {/* Hero Image Start */}
                        <div className="hero-image">
                            {/* Hero Img Start */}
                            <div className="hero-img">
                                <figure>
                                    <img src="images/hero-img.webp" alt="image" />
                                </figure>
                            </div>
                            {/* Hero Img End */}

                            {/* Hero Image Tag Start */}
                            <div className="export-dantist-box">
                                <div className="icon-box">
                                    <figure className="image-anime">
                                        <img src="images/dantist-doctor-img.jpg" alt="image" />
                                    </figure>
                                </div>
                                <div className="export-dantist-content">
                                    <h3>د. عبد الرحمن الصائغ</h3>
                                    <p>استشاري جراحة السمنة والمناظير و الجراحة العامة</p>
                                </div>
                            </div>
                            {/* Hero Image Tag End */}

                            {/* Icon Start Image Start */}
                            <div className="icon-star-image">
                                <img src="images/icon-star.svg" alt="image" />
                            </div>
                            {/* Icon Start Image End */}
                        </div>
                        {/* Hero Image End */}
                    </div>
                </div>
            </div>
        </div>
    );
}
