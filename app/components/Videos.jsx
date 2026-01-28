export default function Videos() {
    return (
        <div className="our-blog" id="videos" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="row section-row">
                    <div className="col-lg-12">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">الفيديوهات</h3>
                            <h2 className="wow fadeInUp" data-cursor="-opaque">
                                اطلع <span>على أحدث</span> الفيديوهات
                            </h2>
                        </div>
                        {/* Section Title End */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        {/* Blog Item Start */}
                        <div className="blog-item wow fadeInUp">
                            {/* Post Featured Image Start*/}
                            <div className="post-featured-image">
                                <iframe
                                    src="https://www.youtube.com/embed/Tj8eV90-nVM?si=o69d--OVIJ0iIrV_"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            {/* Post Featured Image End */}

                            {/* Post Item Footer Start*/}
                            <div className="post-item-footer">
                                <a target="_blank" href="https://www.youtube.com/watch?v=Tj8eV90-nVM" className="read-more-btn">
                                    اسباب اعادة عمليات السمنة د الصائغ
                                </a>
                            </div>
                            {/* Post Item Footer End*/}
                        </div>
                        {/* Blog Item End */}
                    </div>

                    <div className="col-lg-4 col-md-6">
                        {/* Blog Item Start */}
                        <div className="blog-item wow fadeInUp" data-wow-delay="0.25s">
                            {/* Post Featured Image Start*/}
                            <div className="post-featured-image">
                                <iframe
                                    src="https://www.youtube.com/embed/wGfuMyImE7M?si=1T77n1wHr87hg7Fb"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            {/* Post Featured Image End */}

                            {/* Post Item Footer Start*/}
                            <div className="post-item-footer">
                                <a target="_blank" href="https://www.youtube.com/watch?v=wGfuMyImE7M" className="read-more-btn">
                                    التكميم مع د الصائغ
                                </a>
                            </div>
                            {/* Post Item Footer End*/}
                        </div>
                        {/* Blog Item End */}
                    </div>

                    <div className="col-lg-4 col-md-6">
                        {/* Blog Item Start */}
                        <div className="blog-item wow fadeInUp" data-wow-delay="0.25s">
                            {/* Post Featured Image Start*/}
                            <div className="post-featured-image">
                                <iframe
                                    src="https://www.youtube.com/embed/80mOaGs_Poc?si=AsfMP-aWi5mrHu0V"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            {/* Post Featured Image End */}

                            {/* Post Item Footer Start*/}
                            <div className="post-item-footer">
                                <a target="_blank" href="https://www.youtube.com/watch?v=80mOaGs_Poc" className="read-more-btn">
                                    ابرة ساكسيندا تنحف و طريقة الاستخدام
                                </a>
                            </div>
                            {/* Post Item Footer End*/}
                        </div>
                        {/* Blog Item End */}
                    </div>

                    <div className="contact-appointment-btn wow fadeInUp" style={{ width: 'fit-content', margin: 'auto', marginTop: '30px' }} data-wow-delay="1s">
                        <a target="_blank" href="https://www.youtube.com/channel/UCxWDOnuXT52pnrhm9kh7puA?app=desktop" className="btn-default">
                            المزيد من الفيديوهات
                        </a>
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
