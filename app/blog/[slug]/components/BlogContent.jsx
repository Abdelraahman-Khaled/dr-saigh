"use client"
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import FAQSlug from "./FAQSlug";

export default function BlogContent({ blog }) {
    // Find the Arabic image
    const { language } = useLanguage();
    const router = useRouter();
    const prevLanguage = useRef(language);

    useEffect(() => {
        if (!blog) return;

        // Only redirect if language effectively changed
        if (prevLanguage.current === language) return;

        // Update ref
        prevLanguage.current = language;

        // Determine target slug
        const targetSlug =
            language === "ar"
                ? blog.slug_ar || blog.slug
                : blog.slug || blog.slug_ar; // Assumes slug_ar/slug exist. Fallback logic.

        // Adjust prefix based on language.
        // If switching to 'ar', prefix /blogs/
        const basePath = language === 'ar' ? '/blogs' : '/blogs';

        // Use replace to change URL without scroll
        router.replace(`${basePath}/${targetSlug}`, { scroll: false });
    }, [language, blog, router]);


    const formatContent = (htmlContent) => {
        if (!htmlContent) return "";
        let formatted = htmlContent;
        // Add class 'features-list' to all <ul> tags if not already present
        formatted = formatted.replace(/<ul(?![^>]*class=["'][^"']*features-list[^"']*["'])([^>]*)>/gi, '<ul class="features-list" $1>');

        // Add checkmark icon to start of <li> if not already present
        // We use a simple regex replacing <li> with <li><i class="..."></i>
        // Ensure we don't add it if it's already there to avoid duplication on re-renders if content is stateful (though here it's prop-based)
        formatted = formatted.replace(/<li>(?!<i class="flaticon-check-mark"><\/i>)/gi, '<li><i class="flaticon-check-mark"></i> ');

        return formatted;
    };


    const renderContent = () => {
        if (blog.contents && Array.isArray(blog.contents)) {
            return blog.contents.map((section, index) => (
                <div key={index} className="blog-section mb-4">
                    {/* Section Content */}
                    <div dangerouslySetInnerHTML={{ __html: formatContent(language === 'ar' ? (section.content_ar || section.content_en) : (section.content_en || section.content_ar)) }} />

                    {/* Section Images */}
                    {section.photos && section.photos.length > 0 && (
                        <div className="row row-images mt-3">
                            {section.photos.map((img, imgIndex) => (
                                <div key={imgIndex} className="col-12 col-md-6 mb-3">
                                    <figure>
                                        <Image
                                            src={img.url}
                                            alt={img.alt}
                                            width={1200}
                                            height={630}
                                            className="img-fluid rounded"
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </figure>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ));
        } else {
            // Fallback for simple content
            return <div dangerouslySetInnerHTML={{ __html: formatContent(language === 'ar' ? (blog.content_ar || blog.content) : (blog.content_en || blog.content)) }} />;
        }
    };



    return (
        <div className="page-single-post">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Post Featured Image Start */}
                        <div className="post-image">
                            <figure className="image-anime reveal">
                                {(() => {
                                    const mainPhoto = blog.photos?.find(p => language === "ar" ? p.is_arabic : !p.is_arabic) || blog.photos?.[0];
                                    const mainImage = mainPhoto?.url || blog.image || blog.photo_url;
                                    const mainAlt = mainPhoto?.alt || (language === 'ar' ? (blog.title_ar || blog.title_en) : (blog.title_en || blog.title_ar));

                                    return (
                                        <Image
                                            className='rounded-5'
                                            src={mainImage}
                                            alt={mainAlt}
                                            width={1200}
                                            height={600}
                                            style={{ width: '100%', height: 'auto' }}
                                            priority
                                        />
                                    );
                                })()}

                            </figure>
                        </div>
                        {/* Post Featured Image End */}

                        {/* Post Single Content Start */}
                        <div className="post-content">
                            {/* Post Entry Start */}
                            <div className="post-entry">
                                <div
                                    className="wow fadeInUp"
                                >
                                    {renderContent()}
                                    {blog && blog.faqs && Array.isArray(blog.faqs) && blog.faqs.length > 0 && (
                                        <FAQSlug items={blog.faqs} />
                                    )}
                                </div>
                            </div>
                            {/* Post Entry End */}
                        </div>
                        {/* Post Single Content End */}
                    </div>
                </div>
            </div>
        </div>

    );
}
