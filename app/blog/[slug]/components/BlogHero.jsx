export default function BlogHero({ title, author = "د. عبدالرحمن الصائغ", date }) {
    // Format date if provided
    const formattedDate = date ? new Date(date).toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : '';

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
                                    {formattedDate && (
                                        <li className="breadcrumb-item">
                                            <i className="fa-regular fa-clock"></i> {formattedDate}
                                        </li>
                                    )}
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
