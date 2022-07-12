// var navbar =  document.getElementsByClassName('navbar');
// console.log(navbar);




$(document).ready(()=>{
    $(window).scroll(()=>{
        var scrollposition = $(window).scrollTop();
        console.log(scrollposition)

       
            $('.straw').addClass(' animate__animated animate__bounceInRight');
            $('.strawside').addClass(' animate__animated animate__bounceInLeft');
            $('.navbar').addClass('fixed')
     
        if((scrollposition < 145)){
            $('.navbar').removeClass('fixed');

        }
        if((scrollposition > 910)  && (scrollposition < 1720)){
            $('.card-1').addClass(' animate__animated animate__fadeInTopLeft');
            $('.card-2').addClass(' animate__animated animate__fadeInDownBig');
            $('.card-3').addClass(' animate__animated animate__fadeInTopRight');
        }
    });
});