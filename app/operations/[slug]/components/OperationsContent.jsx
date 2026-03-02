"use client"
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import FAQSlug from "./FAQSlug";
import { getOperationDetails } from "@/api/operations";
import { useQuery } from '@tanstack/react-query';
import OperationsHero from "./OperationsHero";

export default function OperationsContent({ slug, initialOperation }) {
    const { language, prevLanguage, localePath } = useLanguage();
    const router = useRouter();

    const { data: operation = initialOperation } = useQuery({
        queryKey: ['operation', slug],
        queryFn: () => getOperationDetails(slug),
        initialData: initialOperation,
        refetchInterval: 5000,
    });

    useEffect(() => {
        if (!operation) return;

        // لو اللغة متغيرتش → اعمل nothing
        if (prevLanguage.current === language) return;

        const targetSlug =
            language === "ar"
                ? operation.slug_ar || operation.slug
                : operation.slug || operation.slug_ar;

        router.replace(localePath(`/operations/${targetSlug}`), { scroll: false });
    }, [language, operation, router, prevLanguage, localePath]);


    // Render contents
    const renderContent = () => {
        if (operation.contents && Array.isArray(operation.contents)) {
            return operation.contents.map((section, index) => (
                <div key={index} className="blog-section mb-4">
                    {/* Section Content */}
                    <div dangerouslySetInnerHTML={{ __html: language === 'ar' ? (section.content_ar || section.content_en) : (section.content_en || section.content_ar) }} />

                    {/* Section Images */}
                    {section.photos && section.photos.length > 0 && (
                        <div className="row row-images mt-3">
                            {section.photos.map((img, imgIndex) => (
                                <div key={imgIndex} className="col-12 col-md-6 mb-3">
                                    <figure>
                                        <Image
                                            src={img.url}
                                            alt={language === 'ar' ? (img.alt_ar || '') : (img.alt_en || '')}
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
            return <div dangerouslySetInnerHTML={{ __html: operation.contents }} />;
        }
    };

    if (!operation) return null;

    // Main photo (non-landing photo preferred for detail view)
    const mainPhoto =
        operation.photos?.find(p => p.is_landing === false) ||
        operation.photos?.[0];
    const mainImage = mainPhoto?.url;
    const mainAlt = language === 'ar'
        ? (mainPhoto?.alt_ar || operation.title_ar || operation.title_en)
        : (mainPhoto?.alt_en || operation.title_en || operation.title_ar);

    return (
        <>
            <OperationsHero
                title={language === "ar" ? (operation.title_ar || operation.title_en) : (operation.title_en || operation.title_ar)}
            />
            <div className="page-single-post">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Post Featured Image Start */}
                            {mainImage && (
                                <div className="post-image">
                                    <figure className="image-anime">
                                        <Image
                                            className='rounded-5'
                                            src={mainImage}
                                            alt={mainAlt}
                                            width={1200}
                                            height={600}
                                            style={{ width: '100%', height: 'auto' }}
                                            priority
                                        />
                                    </figure>
                                </div>
                            )}
                            {/* Post Featured Image End */}

                            {/* Post Single Content Start */}
                            <div className="post-content">
                                {/* Post Entry Start */}
                                <div className="post-entry">
                                    <div className="wow fadeInUp">
                                        {renderContent()}
                                        {operation && operation.faqs && Array.isArray(operation.faqs) && operation.faqs.length > 0 && (
                                            <FAQSlug items={operation.faqs} />
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
        </>
    );
}
