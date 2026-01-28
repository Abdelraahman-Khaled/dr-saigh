'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
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
                $('.read-more-1').on('click', function () {
                    $('.popup.one').addClass('active');
                });
                $('.read-more-2').on('click', function () {
                    $('.popup.two').addClass('active');
                });
                $('.read-more-3').on('click', function () {
                    $('.popup.three').addClass('active');
                });
                $('.read-more-4').on('click', function () {
                    $('.popup.four').addClass('active');
                });
                $('.read-more-5').on('click', function () {
                    $('.popup.five').addClass('active');
                });

                $('.popup .fa-close').on('click', function () {
                    $(this).closest('.popup').removeClass('active');
                });

                $('.popup .layer').on('click', function (e) {
                    if (e.target === this) {
                        $(this).closest('.popup').removeClass('active');
                    }
                });

                // Preloader
                $(window).on('load', function () {
                    $('.preloader').fadeOut(500);
                });
            }
        };

        // Initialize after a short delay to ensure all scripts are loaded
        setTimeout(initializeScripts, 100);
    }, []);

    return null;
}
