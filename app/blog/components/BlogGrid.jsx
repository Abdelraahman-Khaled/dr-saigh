import { getBlogs } from '@/api/blog';
import Link from 'next/link';

export default async function BlogGrid() {
    let blogs = [];
    let error = null;

    // Fetch blogs from API with error handling
    try {
        blogs = await getBlogs();

        // Check if blogs is an array
        if (!Array.isArray(blogs)) {
            console.error('Invalid blogs data format:', blogs);
            blogs = [];
        }
    } catch (err) {
        console.error('Error fetching blogs:', err);
        error = err.message || 'فشل في تحميل المدونات';
    }

    // Show error message if fetch failed
    if (error) {
        return (
            <div className="our-blog" style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="alert alert-danger text-center" role="alert" dir="rtl">
                                <h4>⚠️ خطأ في تحميل المدونات</h4>
                                <p>{error}</p>
                                <p className="mb-0">يرجى المحاولة مرة أخرى لاحقاً أو التواصل مع الدعم الفني.</p>
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
                        <div className="col-12 text-center" dir="rtl">
                            <h3>لا توجد مدونات متاحة حالياً</h3>
                            <p>يرجى العودة لاحقاً للاطلاع على المحتوى الجديد.</p>
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
                        // Find the Arabic image
                        const arabicImage = blog.photos?.find(photo => photo.is_arabic === true);
                        const imageUrl = arabicImage?.url || blog.photos?.[0]?.url || '/images/blog/default.webp';
                        const imageAlt = arabicImage?.alt || blog.title_ar;

                        // Get Arabic content from contents array
                        const arabicContent = blog.contents?.[0]?.content_ar || '';
                        // Strip HTML tags and create excerpt (first 150 characters)
                        const plainText = arabicContent.replace(/<[^>]*>/g, '');

                        return (
                            <div key={blog.id} className="col-lg-4 col-md-6">
                                {/* Blog Item Start */}
                                <div className="blog-item wow fadeInUp">
                                    {/* Post Featured Image Start*/}
                                    <div className="post-featured-image" data-cursor-text="اقرأ المقالة">
                                        <figure>
                                            <Link href={`/blog/${blog.slug_ar}`} className="image-anime">
                                                <img src={imageUrl} alt={imageAlt} />
                                            </Link>
                                        </figure>
                                    </div>
                                    {/* Post Featured Image End */}

                                    {/* post Item Body Start */}
                                    <div className="post-item-body">
                                        <h2>
                                            <Link href={`/blog/${blog.slug_ar}`}>
                                                {blog.title_ar}
                                            </Link>
                                        </h2>
                                        <p className="line-clamp-2">
                                            {blog.description_ar}
                                        </p>
                                    </div>
                                    {/* Post Item Body End*/}

                                    {/* Post Item Footer Start*/}
                                    <div className="post-item-footer">
                                        <Link href={`/blog/${blog.slug_ar}`} className="read-more-btn">اقرأ المزيد</Link>
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
