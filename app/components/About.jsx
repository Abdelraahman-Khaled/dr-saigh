export default function About() {
    return (
        <div className="about-us" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        {/* About Image Start */}
                        <div className="about-image">
                            <div className="about-img-1">
                                <figure className="image-anime reveal">
                                    <img src="images/about-us-img-1.jpg" alt="image" />
                                </figure>
                            </div>

                            <div className="about-img-2">
                                <figure className="image-anime reveal">
                                    <img src="images/about-us-img-2.jpg" alt="image" />
                                </figure>
                            </div>

                            {/* About Experience Circle Start */}
                            <div className="about-experience">
                                <figure>
                                    <img src="images/about-experience-circle.png" alt="image" />
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
                                <h3 className="wow fadeInUp">عن الدكتور</h3>
                                <h2 className="wow fadeInUp" data-cursor="-opaque">
                                    د. عبدالرحمن الصايغ
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="0.25s">
                                    عمل اكثر من 9000 عملية سمنة مختلفة ومنها عمليات التكميم و عملية ربط المعدة وتحويل المسار
                                    بالمنظار عمليات الإرتجاع
                                    المريئي واصلاح الفتق في الحجاب الحاجز بالمنظار وعمليات الجراحة العامة بالمنظار ومنها
                                    ازالة المرارة واصلاح الفتق بالمنظار
                                </p>
                            </div>
                            {/* Section Title End */}

                            {/* About Us Body Start */}
                            <div className="about-us-body wow fadeInUp" data-wow-delay="0.5s">
                                <ul>
                                    <li>الزمالة العربية في الجراحة العامة</li>
                                    <li>عضو في الجمعية الامريكية لجراحة السمنة ASMBS</li>
                                    <li>عضو في الجمعية السعودية لجراحة المناظير</li>
                                    <li>عضو في الجمعية الاسيوية لجراحة المناظير ELSA</li>
                                    <li>الزمالة الأوروبية في جراحة المناظير والسمنة</li>
                                    <li>شارك في كثير من الؤتمرات الدولية و المحلية وبعض الأوراق العلمية</li>
                                </ul>
                            </div>
                            {/* About Us Body End */}

                            {/* About Us Footer Start */}
                            <div className="about-us-footer wow fadeInUp" data-wow-delay="0.75s">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeE7ppxwLRQMtFq0GCTSZNTcrQBpI_opFb2ey0Sckn_VPi-Ng/viewform" target="_blank" className="btn-default">
                                    حجز موعد
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
