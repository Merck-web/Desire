$(function () {

    $('.header__btn').on('click',function(){
        $('.rightside-menu').removeClass('rightside-menu--close'); //при клике на кнопку btn удаляем класс"close" у menu
    });
    $('.rightside-menu--close').on('click',function(){
        $('.rightside-menu').addClass('rightside-menu--close');//при клике на кнопку btn добовляем класс"close" у menu
    });


    $('.header__btn-menu').on('click',function(){
        $('.menu').toggleClass('menu--open'); 
    });

    if($(window).width() < 631){
        $('.work-path__item--measurements').appendTo($('.work-path__items-box'));
    }



    $('.top__slider').slick({
        dots: true,
        arrows:false,//убираем стрелки
        fade: true,// чтобы менялось плавно
        autoplay:true, //чтобы автоматически переключалось
    });//слайдер включается


    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        infinite: false,
        dots: true,
        arrows:false,//убираем стрелки
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
              }
            },
            {
              breakpoint: 1511,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
              }
            },
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
            {
                breakpoint: 841,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                }
            },
            {
                breakpoint: 551,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                }
            },
            {
                breakpoint: 375,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
        ]
    });//слайдер включается 
    
    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="./images/next.svg" alt="1"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="./images/back.svg" alt="1"></button>',

    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bedroom'
        }
    });

});