$(function () {

    $('.header__btn').on('click',function(){
        $('.rightside-menu').removeClass('rightside-menu--close'); //при клике на кнопку btn удаляем класс"close" у menu
    });
    $('.rightside-menu--close').on('click',function(){
        $('.rightside-menu').addClass('rightside-menu--close');//при клике на кнопку btn добовляем класс"close" у menu
    });

    $('.top__slider').slick({
        dots: true,
        arrows:false,//убираем стрелки
        fade: true,// чтобы менялось плавно
        autoplay:true, //чтобы автоматически переключалось
    });//слайдер включается


    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows:false,//убираем стрелки

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