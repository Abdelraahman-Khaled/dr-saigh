'use client';

import { getOperations } from '@/api/operations';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useQuery } from '@tanstack/react-query';


export default function OperationsGrid({ initialOperations = [], initialError = null }) {
    const { t, language, localePath } = useLanguage();

    const {
        data: operations = [],
        isLoading: loading,
        error: queryError,
    } = useQuery({
        queryKey: ['operations'],
        queryFn: getOperations,
        initialData: initialOperations.length > 0 ? initialOperations : undefined,
        enabled: !initialError,
        retry: 1,
        staleTime: 60 * 1000, // 1 minute
    });

    const error = initialError || (queryError ? queryError.message || 'Failed to load operations' : null);

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
                                <h4>{t('operationsPage.grid.errorTitle')}</h4>
                                <p>{error}</p>
                                <p className="mb-0">{t('operationsPage.grid.errorMessage')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Show empty state if no operations
    if (operations.length === 0) {
        return (
            <div className="our-blog" style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>{t('operationsPage.grid.noItemsTitle')}</h3>
                            <p>{t('operationsPage.grid.noItemsMessage')}</p>
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
                    {operations.map((operation) => {
                        const isAr = language === 'ar';

                        // Image logic – landing photo first
                        const landingPhoto = operation.photos?.find(photo => photo.is_landing === true);
                        const fallbackPhoto = operation.photos?.[0];

                        const imageUrl = landingPhoto?.url || fallbackPhoto?.url || '/images/blog/default.webp';
                        const imageAlt = isAr
                            ? (landingPhoto?.alt_ar || fallbackPhoto?.alt_ar || '')
                            : (landingPhoto?.alt_en || fallbackPhoto?.alt_en || '');

                        const title = isAr ? (operation.title_ar || operation.title_en) : (operation.title_en || operation.title_ar);
                        const slug = isAr ? (operation.slug_ar || operation.slug) : (operation.slug || operation.slug_ar);

                        const description = isAr
                            ? (operation.description_ar || '')
                            : (operation.description_en || operation.description_ar || '');

                        return (
                            <div key={operation.id} className="col-lg-4 col-md-6">
                                {/* Operation Item Start */}
                                <div className="blog-item wow fadeInUp">
                                    {/* Post Featured Image Start*/}
                                    <div className="post-featured-image" data-cursor-text={t('operationsPage.grid.viewOperation')}>
                                        <figure>
                                            <Link href={localePath(`/operations/${slug}`)} className="image-anime">
                                                <img src={imageUrl} alt={imageAlt} />
                                            </Link>
                                        </figure>
                                    </div>
                                    {/* Post Featured Image End */}

                                    {/* post Item Body Start */}
                                    <div className="post-item-body">
                                        <h2>
                                            <Link href={localePath(`/operations/${slug}`)}>
                                                {title}
                                            </Link>
                                        </h2>
                                        {description && (
                                            <p className="line-clamp-2">
                                                {description}
                                            </p>
                                        )}
                                    </div>
                                    {/* Post Item Body End*/}

                                    {/* Post Item Footer Start*/}
                                    <div className="post-item-footer">
                                        <Link href={localePath(`/operations/${slug}`)} className="read-more-btn">{t('operationsPage.grid.readMore')}</Link>
                                    </div>
                                    {/* Post Item Footer End*/}
                                </div>
                                {/* Operation Item End */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
