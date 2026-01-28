export default function Blog() {
    return (
        <div className="our-blog" id="blog">
            <div className="container">
                <div className="row section-row">
                    <div className="col-lg-12">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">المدونات</h3>
                            <h2 className="wow fadeInUp" data-cursor="-opaque">
                                اطلع <span>على أحدث</span> مقالاتنا
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">
                                نحن ملتزمون بالاستدامة والمبادرات الصديقة للبيئة.
                            </p>
                        </div>
                        {/* Section Title End */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        {/* Blog Item Start */}
                        <div className="blog-item wow fadeInUp">
                            {/* Post Featured Image Start*/}
                            <div className="post-featured-image" data-cursor-text="اقرأ المقالة">
                                <figure>
                                    <a href="blogs/blog-1.html" className="image-anime">
                                        <img src="images/blog/1.webp" alt="image" />
                                    </a>
                                </figure>
                            </div>
                            {/* Post Featured Image End */}

                            {/* post Item Body Start */}
                            <div className="post-item-body">
                                <h2>
                                    <a href="blogs/blog-1.html">
                                        الصيام بعد جراحة السمنة: المخاطر والنصائح الصحية لمرضى السمنة خلال رمضان
                                    </a>
                                </h2>
                                <p>
                                    تعتبر جراحة السمنة مثل تكميم المعدة، تحويل مسار المعدة، وتركيب الرباط المعدي من الخيارات
                                    الطبية التي تهدف إلى...
                                </p>
                            </div>
                            {/* Post Item Body End*/}

                            {/* Post Item Footer Start*/}
                            <div className="post-item-footer">
                                <a href="blogs/blog-1.html" className="read-more-btn">اقرأ المزيد</a>
                            </div>
                            {/* Post Item Footer End*/}
                        </div>
                        {/* Blog Item End */}
                    </div>
                </div>
            </div>
            {/* Icon Start Image Start */}
            <div className="icon-star-image">
                <img src="images/icon-star.svg" alt="image" />
            </div>
            {/* Icon Start Image End */}
        </div>
    );
}
