export default function BlogHero({ title, author }) {
    return (
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Page Header Box Start */}
                        <div className="page-header-box">
                            <h1 className="wow fadeInUp" data-cursor="-opaque">
                                {title}
                            </h1>
                            <div className="post-single-meta wow fadeInUp">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <i className="fa-solid fa-user-nurse"></i> {author}
                                    </li>

                                </ol>
                            </div>
                        </div>
                        {/* Page Header Box End */}
                    </div>
                </div>
            </div>
        </div>
    );
}
