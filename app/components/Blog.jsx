'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Blog({ initialBlogs = [] }) {
    const { t, language } = useLanguage();

    return (
        <div className="our-blog" id="blog">
            <div className="container">
                <div className="row section-row">
                    <div className="col-lg-12">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">{t('blog.subtitle')}</h3>
                            <h2 className="wow fadeInUp" data-cursor="-opaque">
                                {t('blog.title')} <span>{t('blog.titleHighlight')}</span> {t('blog.titleEnd')}
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">
                                {t('blog.description')}
                            </p>
                        </div>
                        {/* Section Title End */}
                    </div>
                </div>

                <div className="row">
                    {initialBlogs.map((blog) => {
                        const isAr = language === 'ar';
                        const title = isAr ? (blog.title_ar || blog.title) : (blog.title_en || blog.title || blog.title_ar);
                        const slug = isAr ? (blog.slug_ar || blog.slug) : (blog.slug_en || blog.slug || blog.slug_ar);
                        const content = isAr ? (blog.contents?.[0]?.content_ar || '') : (blog.contents?.[0]?.content_en || '');
                        const description = (isAr ? blog.description_ar : blog.description_en) || content.replace(/<[^>]*>/g, '').substring(0, 120) + '...';

                        // Image logic
                        const mainPhoto = blog.photos?.find(p => isAr ? p.is_arabic : !p.is_arabic) || blog.photos?.[0];
                        const imageUrl = mainPhoto?.url || blog.photo_url || 'images/blog/default.webp';

                        return (
                            <div key={blog.id} className="col-lg-4 col-md-6">
                                {/* Blog Item Start */}
                                <div className="blog-item wow fadeInUp">
                                    {/* Post Featured Image Start*/}
                                    <div className="post-featured-image" data-cursor-text={t('common.readMore')}>
                                        <figure>
                                            <Link href={`/blog/${slug}`} className="image-anime">
                                                <img src={imageUrl} alt={title} />
                                            </Link>
                                        </figure>
                                    </div>
                                    {/* Post Featured Image End */}

                                    {/* post Item Body Start */}
                                    <div className="post-item-body">
                                        <h2>
                                            <Link href={`/blog/${slug}`}>
                                                {title}
                                            </Link>
                                        </h2>
                                        <p className="line-clamp-2">
                                            {description}
                                        </p>
                                    </div>
                                    {/* Post Item Body End*/}

                                    {/* Post Item Footer Start*/}
                                    <div className="post-item-footer">
                                        <Link href={`/blog/${slug}`} className="read-more-btn">{t('common.readMore')}</Link>
                                    </div>
                                    {/* Post Item Footer End*/}
                                </div>
                                {/* Blog Item End */}
                            </div>
                        );
                    })}
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
