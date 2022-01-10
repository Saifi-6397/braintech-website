$(function() {
    $('.mobile-btn').click(function() {
        $('.navbar ul').slideToggle();
    })


    $('.team-section .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            650: {
                items: 2,
            }

        }
    })

    $('.associate .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            650: {
                items: 2,
            },
            991: {
                items: 4,
            }


        }
    })
})