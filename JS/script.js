$('nav').ready(function(){
   $('.icon').on('click', function (ev){
        var isClick = $('.icon');
        isClick = true;
        $('.topnav').toggleClass('responsive');
        ev.preventDefault();
        $('header').toggleClass('clickIcon');
    }); 
});

$(window).scroll(function(){
    if($(this).scrollTop()>140){
        $('header').addClass('fixed');
    }
    else if ($(this).scrollTop()<140){
        $('header').removeClass('fixed');
    }
});

$('#myForm').on('click', function(ev){
    ev.preventDefault();
});