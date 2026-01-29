(function ($) {
    "use strict";

    var $window = $(window);
    var $body = $('body');

    /* Preloader Effect - Handled by React Component */
    // $window.on('load', function () {
    //     $(".preloader").fadeOut(600);
    // });

    /* Sticky Header */
    if ($('.active-sticky-header').length) {
        $window.on('resize', function () {
            setHeaderHeight();
        });

        function setHeaderHeight() {
            $("header.main-header").css("height", $('header .header-sticky').outerHeight());
        }

        $(window).on("scroll", function () {
            var fromTop = $(window).scrollTop();
            setHeaderHeight();
            var headerHeight = $('header .header-sticky').outerHeight()
            $("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
            $("header .header-sticky").toggleClass("active", (fromTop > 600));
        });
    }

    /* Slick Menu JS */
    $('#menu').slicknav({
        label: '',
        prependTo: '.responsive-menu'
    });

    if ($("a[href='#top']").length) {
        $("a[href='#top']").click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    }

    /* Hero Slider Layout JS */
    const hero_slider_layout = new Swiper('.hero-slider-layout .swiper', {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    /* About client logo slider JS */
    var swiper = new Swiper(".companies_logo_slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            375: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 3
            }
        }
    });

    /* Skill Bar */
    if ($('.skills-progress-bar').length) {
        $('.skills-progress-bar').waypoint(function () {
            $('.skillbar').each(function () {
                $(this).find('.count-bar').animate({
                    width: $(this).attr('data-percent')
                }, 2000);
            });
        }, {
            offset: '50%'
        });
    }

    /* Youtube Background Video JS */
    if ($('#herovideo').length) {
        var myPlayer = $("#herovideo").YTPlayer();
    }

    /* Init Counter */
    if ($('.counter').length) {
        $('.counter').counterUp({ delay: 6, time: 3000 });
    }

    /* Image Reveal Animation */
    if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

    /* Text Effect Animation */
    if ($('.text-anime-style-1').length) {
        let staggerAmount = 0.05,
            translateXValue = 0,
            delayValue = 0.5,
            animatedTextElements = document.querySelectorAll('.text-anime-style-1');

        animatedTextElements.forEach((element) => {
            let animationSplitText = new SplitText(element, { type: "chars, words" });
            gsap.from(animationSplitText.words, {
                duration: 1,
                delay: delayValue,
                x: 20,
                autoAlpha: 0,
                stagger: staggerAmount,
                scrollTrigger: { trigger: element, start: "top 85%" },
            });
        });
    }

    if ($('.text-anime-style-2').length) {
        let staggerAmount = 0.03,
            translateXValue = 20,
            delayValue = 0.1,
            easeType = "power2.out",
            animatedTextElements = document.querySelectorAll('.text-anime-style-2');

        animatedTextElements.forEach((element) => {
            let animationSplitText = new SplitText(element, { type: "chars, words" });
            gsap.from(animationSplitText.chars, {
                duration: 1,
                delay: delayValue,
                x: translateXValue,
                autoAlpha: 0,
                stagger: staggerAmount,
                ease: easeType,
                scrollTrigger: { trigger: element, start: "top 85%" },
            });
        });
    }

    if ($('.text-anime-style-3').length) {
        let animatedTextElements = document.querySelectorAll('.text-anime-style-3');

        animatedTextElements.forEach((element) => {
            //Reset if needed
            if (element.animation) {
                element.animation.progress(1).kill();
                element.split.revert();
            }

            element.split = new SplitText(element, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });
            gsap.set(element, { perspective: 400 });

            gsap.set(element.split.chars, {
                opacity: 0,
                x: "50",
            });

            element.animation = gsap.to(element.split.chars, {
                scrollTrigger: { trigger: element, start: "top 90%" },
                x: "0",
                y: "0",
                rotateX: "0",
                opacity: 1,
                duration: 1,
                ease: Back.easeOut,
                stagger: 0.02,
            });
        });
    }

    /* Parallaxie js */
    var $parallaxie = $('.parallaxie');
    if ($parallaxie.length && ($window.width() > 991)) {
        if ($window.width() > 768) {
            $parallaxie.parallaxie({
                speed: 0.55,
                offset: 0,
            });
        }
    }

    /* Zoom Gallery screenshot */
    $('.gallery-items').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }
    });

    /* Contact form validation */
    var $contactform = $("#contactForm");
    $contactform.validator({ focus: false }).on("submit", function (event) {
        if (!event.isDefaultPrevented()) {
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm() {
        /* Initiate Variables With Form Content*/
        var fullname = $("#fullname").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var subject = $("#subject").val();
        var message = $("#msg").val();

        $.ajax({
            type: "POST",
            url: "form-process.php",
            data: "fullname=" + fullname + "&name=" + "&email=" + email + "&phone=" + phone + "&subject=" + subject + "&message=" + message,
            success: function (text) {
                if (text == "success") {
                    formSuccess();
                } else {
                    submitMSG(false, text);
                }
            }
        });
    }

    function formSuccess() {
        $contactform[0].reset();
        submitMSG(true, "Message Sent Successfully!")
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-success";
        } else {
            var msgClasses = "h3 text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    /* Contact form validation end */

    /* Appointment form validation */
    var $appointmentForm = $("#appointmentForm");
    $appointmentForm.validator({ focus: false }).on("submit", function (event) {
        if (!event.isDefaultPrevented()) {
            event.preventDefault();
            submitappointmentForm();
        }
    });

    function submitappointmentForm() {
        /* Initiate Variables With Form Content*/
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var phone = $("#services").val();
        var date = $("#date").val();

        $.ajax({
            type: "POST",
            url: "form-appointment.php",
            data: "name=" + name + "&email=" + email + "&phone=" + phone + "&services=" + services + "&date=" + date,
            success: function (text) {
                if (text == "success") {
                    appointmentformSuccess();
                } else {
                    appointmentsubmitMSG(false, text);
                }
            }
        });
    }

    function appointmentformSuccess() {
        $appointmentForm[0].reset();
        appointmentsubmitMSG(true, "Message Sent Successfully!")
    }

    function appointmentsubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-success";
        } else {
            var msgClasses = "h3 text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    /* Appointment form validation end */

    /* Animated Wow Js */
    new WOW().init();

    /* Popup Video */
    if ($('.popup-video').length) {
        $('.popup-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true
        });
    }

    $(document).ready(function () {
        // Show the result box on form submit
        $('#bmiForm').on('submit', function (e) {
            e.preventDefault(); // Prevent form submission

            const heightInput = $('#height').val();
            const weightInput = $('#weight').val();

            if (!heightInput || !weightInput || heightInput <= 0 || weightInput <= 0) {
                alert("الرجاء إدخال قيم صحيحة للطول والوزن.");
                return;
            }

            const heightInMeters = heightInput / 100;

            const bmi = (weightInput / (heightInMeters * heightInMeters)).toFixed(2);

            let category = '';
            if (bmi < 18.5) {
                category = 'نقص الوزن';
            } else if (bmi >= 18.5 && bmi < 24.9) {
                category = 'وزن طبيعي';
            } else if (bmi >= 25 && bmi < 29.9) {
                category = 'زيادة الوزن';
            } else {
                category = 'السمنة';
            }

            $('.status').text(`مؤشر كتلة الجسم: ${bmi} - ${category}`);
            $('.status').css('background-color', bmi < 18.5 ? 'lightblue' :
                bmi < 24.9 ? 'lightgreen' :
                    bmi < 29.9 ? 'yellow' : 'red');
            $('.layout').fadeIn();
        });

        // Close the result box on "X" click
        $('.fa-xmark').on('click', function () {
            $('.layout').fadeOut();
        });

        // Close the result box if clicked outside the .result box
        $(document).on('click', function (e) {
            const layout = $('.layout');
            const resultBox = $('.result');

            if (layout.is(':visible') && !resultBox.is(e.target) && resultBox.has(e.target).length === 0) {
                layout.fadeOut();
            }
        });
    });



    $(document).ready(function () {
        // Show the popup when clicking the read-more button
        $(".read-more-1").on("click", function () {
            $(".popup.one").addClass("show");
        });

        // Close the popup when clicking the close icon
        $(".popup.one .fa-close").on("click", function () {
            $(".popup.one").removeClass("show");
        });

        // Close the popup when clicking outside the .layer (popup box)
        $(".popup.one").on("click", function (e) {
            if (!$(e.target).closest(".layer").length) {
                $(".popup.one").removeClass("show");
            }
        });
    });

    $(document).ready(function () {
        // Show the popup when clicking the read-more button
        $(".read-more-2").on("click", function () {
            $(".popup.two").addClass("show");
        });

        // Close the popup when clicking the close icon
        $(".popup.two .fa-close").on("click", function () {
            $(".popup.two").removeClass("show");
        });

        // Close the popup when clicking outside the .layer (popup box)
        $(".popup.two").on("click", function (e) {
            if (!$(e.target).closest(".layer").length) {
                $(".popup.two").removeClass("show");
            }
        });
    });

    $(document).ready(function () {
        // Show the popup when clicking the read-more button
        $(".read-more-3").on("click", function () {
            $(".popup.three").addClass("show");
        });

        // Close the popup when clicking the close icon
        $(".popup.three .fa-close").on("click", function () {
            $(".popup.three").removeClass("show");
        });

        // Close the popup when clicking outside the .layer (popup box)
        $(".popup.three").on("click", function (e) {
            if (!$(e.target).closest(".layer").length) {
                $(".popup.three").removeClass("show");
            }
        });
    });

    $(document).ready(function () {
        // Show the popup when clicking the read-more button
        $(".read-more-4").on("click", function () {
            $(".popup.four").addClass("show");
        });

        // Close the popup when clicking the close icon
        $(".popup.four .fa-close").on("click", function () {
            $(".popup.four").removeClass("show");
        });

        // Close the popup when clicking outside the .layer (popup box)
        $(".popup.four").on("click", function (e) {
            if (!$(e.target).closest(".layer").length) {
                $(".popup.four").removeClass("show");
            }
        });
    });

    $(document).ready(function () {
        // Show the popup when clicking the read-more button
        $(".read-more-5").on("click", function () {
            $(".popup.five").addClass("show");
        });

        // Close the popup when clicking the close icon
        $(".popup.five .fa-close").on("click", function () {
            $(".popup.five").removeClass("show");
        });

        // Close the popup when clicking outside the .layer (popup box)
        $(".popup.five").on("click", function (e) {
            if (!$(e.target).closest(".layer").length) {
                $(".popup.five").removeClass("show");
            }
        });
    });


})(jQuery);