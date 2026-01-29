'use client';

import { useState, useEffect } from 'react';
import { getBlogs } from '@/api/blog';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function BlogGrid() {
    const { t, language } = useLanguage();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getBlogs();
                if (Array.isArray(data)) {
                    setBlogs(data);
                } else {
                    console.error('Invalid blogs data format:', data);
                    setBlogs([]);
                }
            } catch (err) {
                console.error('Error fetching blogs:', err);
                setError(err.message || 'Failed to load blogs');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <div className="our-blog" style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Show error message if fetch failed
    if (error) {
        return (
            <div className="our-blog" style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="alert alert-danger text-center" role="alert">
                                <h4>{t('blogPage.grid.errorTitle')}</h4>
                                <p>{error}</p>
                                <p className="mb-0">{t('blogPage.grid.errorMessage')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Show empty state if no blogs
    if (blogs.length === 0) {
        return (
            <div className="our-blog" style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>{t('blogPage.grid.noBlogsTitle')}</h3>
                            <p>{t('blogPage.grid.noBlogsMessage')}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="our-blog" style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="container">
                <div className="row">
                    {blogs.map((blog) => {
                        // Determine content based on language
                        const isAr = language === 'ar';

                        // Image logic
                        const arabicImage = blog.photos?.find(photo => photo.is_arabic === true);
                        const englishImage = blog.photos?.find(photo => photo.is_arabic === false);

                        let imageUrl = isAr ? arabicImage?.url : englishImage?.url;
                        if (!imageUrl) imageUrl = blog.photos?.[0]?.url || '/images/blog/default.webp';

                        const title = isAr ? (blog.title_ar || blog.title) : (blog.title_en || blog.title || blog.title_ar);
                        const slug = isAr ? (blog.slug_ar || blog.slug) : (blog.slug_en || blog.slug || blog.slug_ar);
                        const imageAlt = isAr ? (arabicImage?.alt || title) : (englishImage?.alt || title);

                        // Content description
                        const contentAr = blog.contents?.[0]?.content_ar || '';
                        const contentEn = blog.contents?.[0]?.content_en || '';

                        const descriptionAr = blog.description_ar || contentAr.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
                        const descriptionEn = blog.description_en || contentEn.replace(/<[^>]*>/g, '').substring(0, 150) + '...';

                        const description = isAr ? descriptionAr : (descriptionEn || descriptionAr);

                        return (
                            <div key={blog.id} className="col-lg-4 col-md-6">
                                {/* Blog Item Start */}
                                <div className="blog-item wow fadeInUp">
                                    {/* Post Featured Image Start*/}
                                    <div className="post-featured-image" data-cursor-text={t('blogPage.grid.readArticle')}>
                                        <figure>
                                            <Link href={`/blog/${slug}`} className="image-anime">
                                                <img src={imageUrl} alt={imageAlt} />
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
                                        <Link href={`/blog/${slug}`} className="read-more-btn">{t('blogPage.grid.readMore')}</Link>
                                    </div>
                                    {/* Post Item Footer End*/}
                                </div>
                                {/* Blog Item End */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
