'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';


export default function PdfGuide() {
    const { t } = useLanguage();
    const [activePdf, setActivePdf] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const docs = t('pdfGuide.docs') || [];

    return (
        <>
            {/* ======= PDF Guide Section ======= */}
            <section
                id="pdf-guide"
                style={{
                    backgroundColor: '#f8fafc',
                    padding: '80px 0',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Decorative background blob */}
                <div style={{
                    position: 'absolute',
                    top: '-80px',
                    left: '-80px',
                    width: '340px',
                    height: '340px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(var(--color-primary-rgb, 22,163,74), 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-60px',
                    right: '-60px',
                    width: '280px',
                    height: '280px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(var(--color-primary-rgb, 22,163,74), 0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />

                <div className="container">
                    {/* Section Header */}
                    <div className="row section-row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <p className="wow fadeInUp">{t('pdfGuide.subtitle')}</p>
                                <h2 className="wow fadeInUp" data-cursor="-opaque">
                                    {t('pdfGuide.title')}{' '}
                                    <span>{t('pdfGuide.titleHighlight')}</span>{' '}
                                    {t('pdfGuide.titleEnd')}
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* PDF Cards Grid */}
                    <div className="row justify-content-center" style={{ marginTop: '40px' }}>
                        {docs.map((doc, index) => (
                            <div
                                key={index}
                                className="col-lg-3 col-md-6 col-sm-10 wow fadeInUp"
                                data-wow-delay={`${index * 0.2}s`}
                                style={{ marginBottom: '30px' }}
                            >
                                <div
                                    style={{
                                        ...styles.card,
                                        transform: hoveredIndex === index ? 'translateY(-6px)' : 'translateY(0)',
                                        boxShadow: hoveredIndex === index
                                            ? '0 12px 40px rgba(0,0,0,0.15)'
                                            : '0 4px 24px rgba(0,0,0,0.08)',
                                    }}
                                >
                                    {/* Thumbnail */}
                                    <div
                                        style={styles.thumbnailWrapper}
                                        onClick={() => setActivePdf(doc)}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        title={doc.title}
                                    >
                                        <Image
                                            src={doc.thumbnail}
                                            alt={doc.title}
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                transition: 'transform 0.4s ease',
                                                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                                            }}
                                        />
                                        {/* Hover overlay */}
                                        <div style={{
                                            ...styles.overlay,
                                            background: hoveredIndex === index ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0)',
                                        }}>
                                            <div style={{
                                                ...styles.overlayIcon,
                                                opacity: hoveredIndex === index ? 1 : 0,
                                                transform: hoveredIndex === index ? 'scale(1)' : 'scale(0.7)',
                                            }}>
                                                <i className="fa-solid fa-eye" style={{ fontSize: '28px', color: '#fff' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Icon Star decoration (matches Videos section pattern) */}
                <div className="icon-star-image" style={{ opacity: 0.4 }}>
                    <Image src="/images/icon-star.svg" alt="icon" width={112} height={112} loading="lazy" />
                </div>
            </section>

            {/* ======= Inline PDF Modal ======= */}
            {activePdf && (
                <div
                    style={styles.modalBackdrop}
                    onClick={(e) => { if (e.target === e.currentTarget) setActivePdf(null); }}
                    role="dialog"
                    aria-modal="true"
                    aria-label={activePdf.title}
                >
                    <div style={styles.modalBox}>
                        {/* Modal Header */}
                        <div style={styles.modalHeader}>
                            <h4 style={styles.modalTitle}>{activePdf.title}</h4>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <a
                                    href={activePdf.file}
                                    download
                                    style={styles.modalDownloadBtn}
                                >
                                    <i className="fa-solid fa-download" style={{ marginInlineEnd: '6px' }} />
                                    {t('pdfGuide.download')}
                                </a>
                                <button
                                    onClick={() => setActivePdf(null)}
                                    style={styles.modalCloseBtn}
                                    aria-label="Close PDF viewer"
                                >
                                    <i className="fa-solid fa-xmark" />
                                </button>
                            </div>
                        </div>

                        {/* iFrame PDF Viewer */}
                        <iframe
                            src={activePdf.file}
                            style={styles.iframe}
                            title={activePdf.title}
                            loading="lazy"
                        />
                    </div>
                </div>
            )}

            {/* Scoped hover styles */}
            <style>{`
                .pdf-thumb-img { transition: transform 0.4s ease !important; }
                .pdf-card-wrapper:hover .pdf-thumb-img { transform: scale(1.05) !important; }
                .pdf-view-btn:hover { background: #166534 !important; }
                .pdf-download-btn:hover { background: #1e40af !important; }
                @media (max-width: 576px) {
                    #pdf-guide { padding: 50px 0 !important; }
                }
            `}</style>
        </>
    );
}

const styles = {
    card: {
        background: '#ffffff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        height: '100%',
        width: '300px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
    },
    thumbnailWrapper: {
        position: 'relative',
        width: '300px',
        height: '300px',
        cursor: 'pointer',
        overflow: 'hidden',
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.3s ease',
    },
    overlayIcon: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: " var(--accent-color)",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        transform: 'scale(0.8)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
    },
    cardFooter: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        flexGrow: 1,
    },
    cardTitle: {
        fontSize: '17px',
        fontWeight: '700',
        color: '#1a2a1a',
        margin: 0,
        lineHeight: '1.4',
    },
    cardActions: {
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
    },
    viewBtn: {
        flex: 1,
        minWidth: '90px',
        padding: '10px 16px',
        background: '#16a34a',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    downloadBtn: {
        flex: 1,
        minWidth: '90px',
        padding: '10px 16px',
        background: '#2563eb',
        color: '#fff',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '600',
        textDecoration: 'none',
        transition: 'background 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalBackdrop: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.75)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backdropFilter: 'blur(4px)',
    },
    modalBox: {
        background: '#fff',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '900px',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: '0 25px 70px rgba(0,0,0,0.4)',
    },
    modalHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 20px',
        borderBottom: '1px solid #e5e7eb',
        background: '#f9fafb',
        flexShrink: 0,
        gap: '12px',
    },
    modalTitle: {
        fontSize: '16px',
        fontWeight: '700',
        color: '#111827',
        margin: 0,
        flex: 1,
    },
    modalDownloadBtn: {
        padding: '8px 16px',
        background: '#2563eb',
        color: '#fff',
        borderRadius: '8px',
        fontSize: '13px',
        fontWeight: '600',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
    },
    modalCloseBtn: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: 'none',
        background: '#fee2e2',
        color: '#dc2626',
        cursor: 'pointer',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    iframe: {
        flex: 1,
        width: '100%',
        border: 'none',
    },
};
