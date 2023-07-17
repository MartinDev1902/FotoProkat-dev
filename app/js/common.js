$(function() {

    $('#burgerMenu').on('click', function() {
        $('#headerNavigation').toggleClass('show-mobile-navigation')
    })

	// Custom JS
    // $('#productsSlider').owlCarousel({
    //     loop:true,
    //     margin:30,
    //     nav:true,
    //     navText: ["<img src='img/icons/bottom.svg'>", "<img src='./img/icons/top.svg'>"],
    //     responsive:{
    //         600:{
    //             items:2
    //         },
    //         1000:{
    //             items:3
    //         }
    //     }
    // })

    postsCarousel();


    $('#mainSlider').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    })


});


function postsCarousel() {
    let checkWidth = $(window).width();
    let  owlPost = $('#productsSlider');
    if (checkWidth < 767) {
        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }
        owlPost.removeClass('owl-carousel');
    } else if (checkWidth > 768) {
        owlPost.addClass('owl-carousel');
        owlPost.owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            navText: ["<img src='img/icons/bottom.svg'>", "<img src='./img/icons/top.svg'>"],
            responsive:{
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    }
}


$(window).resize(postsCarousel);
