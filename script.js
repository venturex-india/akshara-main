$(document).ready(function () {
    $('.alumni-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        // fade: true,
        // cssEase: 'linear'
    });
});

$(".prev-btn").click(function () {
    $(".alumni-slider").slick("slickPrev");
});

$(".next-btn").click(function () {
    $(".alumni-slider").slick("slickNext");
});

$(".prev-btn").addClass("slick-disabled");

$(".alumni-slider").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
        $(".prev-btn").addClass("slick-disabled");
    } else {
        $(".prev-btn").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
        $(".next-btn").addClass("slick-disabled");
    } else {
        $(".next-btn").removeClass("slick-disabled");
    }
});

$(document).ready(function () {
    $('.story-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        // fade: true,
        // cssEase: 'linear'
    });
});

$(".prev-btn-story").click(function () {
    $(".story-slider").slick("slickPrev");
});

$(".next-btn-story").click(function () {
    $(".story-slider").slick("slickNext");
});

$(".prev-btn-story").addClass("slick-disabled");

$(".story-slider").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
        $(".prev-btn-story").addClass("slick-disabled");
    } else {
        $(".prev-btn-story").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
        $(".next-btn-story").addClass("slick-disabled");
    } else {
        $(".next-btn-story").removeClass("slick-disabled");
    }
});


$(document).ready(function () {
    $('.gallery-slider1').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        dots: true
    });
});

$(".prev-btn-gallery1").click(function () {
    $(".gallery-slider1").slick("slickPrev");
});

$(".next-btn-gallery1").click(function () {
    $(".gallery-slider1").slick("slickNext");
});

$(".prev-btn-gallery1").addClass("slick-disabled");

$(".gallery-slider1").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
        $(".prev-btn-gallery1").addClass("slick-disabled");
    } else {
        $(".prev-btn-gallery1").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
        $(".next-btn-gallery1").addClass("slick-disabled");
    } else {
        $(".next-btn-gallery1").removeClass("slick-disabled");
    }
});

$(document).ready(function () {
    $('.gallery-slider2').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        dots: true
    });
});

$(".prev-btn-gallery2").click(function () {
    $(".gallery-slider2").slick("slickPrev");
});

$(".next-btn-gallery2").click(function () {
    $(".gallery-slider2").slick("slickNext");
});

$(".prev-btn-gallery2").addClass("slick-disabled");

$(".gallery-slider2").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
        $(".prev-btn-gallery2").addClass("slick-disabled");
    } else {
        $(".prev-btn-gallery2").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
        $(".next-btn-gallery2").addClass("slick-disabled");
    } else {
        $(".next-btn-gallery2").removeClass("slick-disabled");
    }
});

$(document).ready(function () {
    $('.gallery-slider3').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        dots: true
    });
});

$(".prev-btn-gallery3").click(function () {
    $(".gallery-slider3").slick("slickPrev");
});

$(".next-btn-gallery3").click(function () {
    $(".gallery-slider3").slick("slickNext");
});

$(".prev-btn-gallery3").addClass("slick-disabled");

$(".gallery-slider3").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
        $(".prev-btn-gallery3").addClass("slick-disabled");
    } else {
        $(".prev-btn-gallery3").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
        $(".next-btn-gallery3").addClass("slick-disabled");
    } else {
        $(".next-btn-gallery3").removeClass("slick-disabled");
    }
});

$(document).ready(function () {
    $('.gallery-slider4').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        dots: true
    });
});

$(".prev-btn-gallery4").click(function () {
    $(".gallery-slider4").slick("slickPrev");
});

$(".next-btn-gallery4").click(function () {
    $(".gallery-slider4").slick("slickNext");
});

$(".prev-btn-gallery4").addClass("slick-disabled");

$(".gallery-slider4").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
        $(".prev-btn-gallery4").addClass("slick-disabled");
    } else {
        $(".prev-btn-gallery4").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
        $(".next-btn-gallery4").addClass("slick-disabled");
    } else {
        $(".next-btn-gallery4").removeClass("slick-disabled");
    }
});