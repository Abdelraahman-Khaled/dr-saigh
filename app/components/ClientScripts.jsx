'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
    const pathname = usePathname();

    useEffect(() => {
        // Reset cursor state on navigation
        const cursor = document.querySelector('.cb-cursor');
        const cursorText = document.querySelector('.cb-cursor-text');

        if (cursor) {
            cursor.classList.remove('-active', '-text', '-pointer', '-opaque');
        }

        if (cursorText) {
            cursorText.innerHTML = '';
        }

    }, [pathname]);

    useEffect(() => {
        // Wait for all scripts to load
        const initializeScripts = () => {
            // Initialize WOW.js
            if (typeof window !== 'undefined' && window.WOW) {
                new window.WOW().init();
            }

            // Initialize SlickNav for mobile menu
            if (typeof window !== 'undefined' && window.jQuery) {
                const $ = window.jQuery;

                // SlickNav
                if ($.fn.slicknav) {
                    $('#menu').slicknav({
                        prependTo: '.responsive-menu',
                        label: '',
                        closeOnClick: true
                    });
                }

                // Magnific Popup for video
                if ($.fn.magnificPopup) {
                    $('.popup-video').magnificPopup({
                        type: 'iframe'
                    });
                }

                // Parallaxie
                if ($.fn.parallaxie) {
                    $('.parallaxie').parallaxie({
                        speed: 0.5,
                        offset: 0
                    });
                }

                // Sticky Header
                $(window).on('scroll', function () {
                    if ($(this).scrollTop() > 100) {
                        $('.header-sticky').addClass('is-sticky');
                    } else {
                        $('.header-sticky').removeClass('is-sticky');
                    }
                });

                // Smooth Scroll
                $('a[href^="#"]').on('click', function (e) {
                    const target = $(this.getAttribute('href'));
                    if (target.length) {
                        e.preventDefault();
                        $('html, body').stop().animate({
                            scrollTop: target.offset().top - 80
                        }, 1000);
                    }
                });

                // Popup functionality for surgery details
                // Clean up previous event listeners to avoid duplicates
                $('.read-more-1').off('click').on('click', function () {
                    $('.popup.one').addClass('active');
                });
                $('.read-more-2').off('click').on('click', function () {
                    $('.popup.two').addClass('active');
                });
                $('.read-more-3').off('click').on('click', function () {
                    $('.popup.three').addClass('active');
                });
                $('.read-more-4').off('click').on('click', function () {
                    $('.popup.four').addClass('active');
                });
                $('.read-more-5').off('click').on('click', function () {
                    $('.popup.five').addClass('active');
                });

                $('.popup .fa-close').off('click').on('click', function () {
                    $(this).closest('.popup').removeClass('active');
                });

                $('.popup .layer').off('click').on('click', function (e) {
                    if (e.target === this) {
                        $(this).closest('.popup').removeClass('active');
                    }
                });

                // Preloader dismissal is now handled by the Preloader component itself via React useEffect
                // for better compatibility with Next.js client-side navigation.
            }
        };

        // Initialize after a short delay to ensure all scripts are loaded
        setTimeout(initializeScripts, 100);
    }, [pathname]); // Re-run on pathname change to re-bind events if necessary

    return null;
}
