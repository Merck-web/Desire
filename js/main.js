$(function () {

    $('.header__btn').on('click',function(){
        $('.rightside-menu').removeClass('rightside-menu--close'); //при клике на кнопку btn удаляем класс"close" у menu
    })
    $('.rightside-menu--close').on('click',function(){
        $('.rightside-menu').addClass('rightside-menu--close');//при клике на кнопку btn добовляем класс"close" у menu
    });

    $('.top__slider').slick({
        dots: true,
        arrows:false,//убираем стрелки
        fade: true,// чтобы менялось плавно
        autoplay:true, //чтобы автоматически переключалось
    });//слайдер включается


    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bedroom'
        }
    });

})