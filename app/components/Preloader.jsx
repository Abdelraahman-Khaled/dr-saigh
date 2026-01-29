'use client';

import { useEffect } from 'react';

export default function Preloader() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const timer = setTimeout(() => {
                const preloader = document.querySelector('.preloader');
                if (preloader) {
                    preloader.style.transition = 'opacity 0.6s ease';
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 600);
                }
            }, 500); // Small delay for visual effect

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div className="preloader">
            <div className="loading-container">
                <div className="loading"></div>
                <div id="loading-icon">
                    <img src="/images/favicon.webp" alt="image" />
                </div>
            </div>
        </div>
    );
}
