import { getBlogs } from '@/api/blog';
import Link from 'next/link';

export default async function BlogGrid() {
    // Fetch blogs from API
    const blogs = await getBlogs();

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
