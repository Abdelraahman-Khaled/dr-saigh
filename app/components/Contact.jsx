export default function Contact() {
    return (
        <div className="contact-now" id="contact">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        {/* Footer Contact Content Start */}
                        <div className="contact-now-content">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">اتصل الان</h3>
                                <h2 className="wow fadeInUp" data-cursor="-opaque">
                                    احصل على<span> استشارة</span> مجانية
                                </h2>
                            </div>
                            {/* Section Title End */}

                            {/* Contact Info Start */}
                            <div className="contact-now-info">
                                {/* Contact Info Item Start */}
                                <a href="tel:966552200258" className="contact-info-list wow fadeInUp d-flex" data-wow-delay="0.4s">
                                    {/* Icon Box Start */}
                                    <div className="icon-box">
                                        <img src="images/phone-call.png" alt="image" />
                                    </div>
                                    {/* Icon Box End */}

                                    {/* Contact Info Content Start */}
                                    <div className="contact-info-content">
                                        <p dir="ltr">
                                            +966 552 200 258
                                        </p>
                                    </div>
                                    {/* Contact Info Content End */}
                                </a>
                                {/* Contact Info Item End */}

                                {/* Contact Info Item Start */}
                                <a href="mailto:aarsaigh@hotmail.com" className="d-flex contact-info-list wow fadeInUp" data-wow-delay="0.6s">
                                    {/* Icon Box Start */}
                                    <div className="icon-box">
                                        <img src="images/icon-mail.svg" alt="image" />
                                    </div>
                                    {/* Icon Box End */}

                                    {/* Contact Info Content Start */}
                                    <div className="contact-info-content">
                                        <p>aarsaigh@hotmail.com</p>
                                    </div>
                                    {/* Contact Info Content End */}
                                </a>
                                {/* Contact Info Item End */}

                                {/* Contact Info Item Start */}
                                <div className="contact-info-list wow fadeInUp" data-wow-delay="0.8s">
                                    {/* Icon Box Start */}
                                    <div className="icon-box">
                                        <img src="images/icon-clock.svg" alt="image" />
                                    </div>
                                    {/* Icon Box End */}

                                    {/* Contact Info Content Start */}
                                    <div className="contact-info-content">
                                        <p>من السبت إلى الخميس من الساعة 9:00 صباحًا إلى 9:00 مساءً</p>
                                    </div>
                                    {/* Contact Info Content End */}
                                </div>
                                {/* Contact Info Item End */}
                            </div>

                            {/* Footer Appointment Button Start  */}
                            <div className="contact-appointment-btn wow fadeInUp" data-wow-delay="1s">
                                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeE7ppxwLRQMtFq0GCTSZNTcrQBpI_opFb2ey0Sckn_VPi-Ng/viewform" className="btn-default">
                                    حجز موعد
                                </a>
                            </div>
                            {/* Footer Appointment Button End  */}
                        </div>
                        {/* Footer Contact Content End */}
                    </div>
                </div>
            </div>
        </div>
    );
}
