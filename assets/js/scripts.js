
$(document).ready(function(){

    "use strict";


    /*
     ----------------------------------------------------------------------
     Preloader
     ----------------------------------------------------------------------
     */
    $(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");


    /*
     ----------------------------------------------------------------------
     Scroll
     ----------------------------------------------------------------------
     */
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


    /*
     ----------------------------------------------------------------------
     Animated menu
     ----------------------------------------------------------------------
     */
    $('.menu-img').hover(function() {
        debugger;
        var $div = $(this);
        var img = document.createElement('img');
        var img_name = $div.attr("data-img-name");
        img.src = "./assets/img/menu/" + img_name + ".gif?t=" + new Date().getTime();

        $(img).load(function(){
            $div.attr("src",img.src);
        });

    }, function(){
        debugger;
        var $div = $(this);
        var img_name = $div.attr("data-img-name");
        var src = "./assets/img/menu/" + img_name + ".png";
        $div.attr("src",src);

    });

    /*
     ----------------------------------------------------------------------
     Animation
     ----------------------------------------------------------------------
     */
    
     $('.animated').appear(function() {
         var elem = $(this);
         var animation = elem.data('animation');
         if ( !elem.hasClass('visible') ) {
             var animationDelay = elem.data('animation-delay');
             if ( animationDelay ) {
                 setTimeout(function(){
                    elem.addClass( animation + " visible" );
                 }, animationDelay);
             } else {
                 elem.addClass( animation + " visible" );
             }
         }
     });


    /*
     ----------------------------------------------------------------------
     Nice scroll
     ----------------------------------------------------------------------
     */
    $("html").niceScroll({
        cursorcolor: '#fff',
        cursoropacitymin: '0',
        cursoropacitymax: '1',
        cursorwidth: '2px',
        zindex: 999999,
        horizrailenabled: false,
        enablekeyboard: false
    });

    /*
     ----------------------------------------------------------------------
     Progress Bars
     ----------------------------------------------------------------------
     */
    $('.progress-bar').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).css('width',  function() {
                return ($(this).attr('aria-valuenow')+'%');
            });
        }
    });


    $('.dial').on('inview', function (event, isInView) {
        if (isInView) {
            var $this = $(this);
            var myVal = $this.attr("value");
            //var color = $this.attr("data-color"); 
            var color = $.cookie("colour-skills"); 
            $this.knob({
                readOnly: true,
                width: 160,
                height: 160,
                rotation: 'clockwise',
                thickness: .3,
                inputColor: color,
                bgColor: '#ffffff',
                fgColor: color,
                'draw' : function () {
                    $(this.i).val(this.cv + '%')
                }
            });
            $({
                value: 0
            }).animate({
                value: myVal
            }, {
                duration: 1000,
                easing: 'swing',
                step: function() {
                    $this.val(Math.ceil(this.value)).trigger('change');
                }
            });
        }
    });

    /*
     ----------------------------------------------------------------------
     Sliders
     ----------------------------------------------------------------------
     */
    $("#education-slider").owlCarousel({

        navigation : true, // Show next and prev buttons
        navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });

    $("#work-slider").owlCarousel({

        navigation : true, // Show next and prev buttons
        navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true

    });

    /*
     ----------------------------------------------------------------------
     Animated Counter
     ----------------------------------------------------------------------
     */
    $('.count').each(function () {
        $(".total-numbers .sum").appear(function() {
            var counter = $(this).html();
            $(this).countTo({
                from: 0,
                to: counter,
                speed: 2000,
                refreshInterval: 60
            });
        });
    });


}); // End $(document).ready(function(){






















