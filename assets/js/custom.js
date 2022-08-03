/* Script on ready
---------------------------------*/
$=jQuery;
$(document).ready(function () {
    //jQuery.noConflict()
    
    // hide scrollbar
    if( $('.floating-box-design .mCustomScrollBox').css('max-height') == 'none' ) {
        $(".floating-box-design ul.mCustomScrollbar._mCS_1 #mCSB_1_scrollbar_vertical").css({"opacity":"0"});
    } else {
        $(".floating-box-design ul.mCustomScrollbar._mCS_1 #mCSB_1_scrollbar_vertical").css({"opacity":"1"});
    }
	
	// tooltip
    $(".tooltip-block,.tooltip-block-ul ul > li").each(function(){
        var tooltip_text = $(this).find($(".tooltip-text p")).text();
        var tooltip_icon = $(this).find($(".tooltip-icon .elementor-heading-title"));
        // var tooltip_icon_li = $(this).find($(".tooltip-icon .elementor-heading-title"));
        tooltip_icon.find("i").replaceWith("<p data-tooltip='" + tooltip_text + "'><i class='fas fa-info-circle'></i></p>");
        if($(this).find($(".tooltip-text").length)){
            $(this).find("i").replaceWith("<p data-tooltip='" + tooltip_text + "'><i class='fas fa-info-circle'></i></p>");
        }
    });

    /* for ipad */
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
        $(".header-right nav ul li a").each(function () {
            var onClick;
            var firstClick = function () {
                onClick = secondClick;
                return false;
            };
            var secondClick = function () {
                onClick = firstClick;
                return true;
            };
            onClick = firstClick;
            $(this).click(function () {
                return onClick();
            });
        });
    }

    var $div = $('<div />').appendTo('body');
    $div.attr('class', 'mobile-menu');

    var $mobile_nav = $('header nav').clone();
    $mobile_nav.attr({
        class: 'sb-slidebar',
        id: 'mobile-menu'
    });

    //var $lang = $('.header ul.search-details .language').clone();

    $($mobile_nav).appendTo('.mobile-menu');
    //$($lang).appendTo('.mobile-menu');   


    //  The menu
    $('#mobile-menu').mmenu({
        navbar: {
            title: ""
        },
        offCanvas: {
            position: 'top',
        },
        extensions: ["pageshadow", "effect-zoom-menu", "effect-zoom-panels"],
    });

    var titleText = 'Terug';
    $("#mobile-menu").find(".mm-title").text(titleText);

    var API = $('#mobile-menu').data('mmenu');
    $('#nav-toggle').click(function () {
        API.close();
    });

    /* m-menu script*/
    /*$('#menu').mmenu({
        navbar: {
            title: ""
        },
        extensions: ["fullscreen"],
        navbars: {
            content: ["close"],
            height: 2
        },
        offCanvas: {
            position: "top",
            zposition: "front"
        }
    }, {
        clone: true
    });*/

     /* Benefits Slider Script */
    //$('.benefits-slider').slick({
    $('#broker-home-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1551,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    rows: 2,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
      }
    ]
    });
    $('#broker-detail-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    adaptiveHeight: true
                }
      },
            {
                breakpoint: 600,
                settings: {
                    rows: 2,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
      }
    ]
    });

    /* Logo Slider Script */
    $('.logo-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        speed: 800
    });

    $('.tesla-slider > .elementor-column-wrap > .elementor-widget-wrap').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        speed: 800,
        // rtl: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            }            
        ]
    });
//  $('#related-kennisbnk').slick({
//         arrows: true,
//         dots: true,
//         slidesToShow: 3,
//         infinite: true,
//         slidesToScroll: 1,
//         responsive: [
//             // {
//             //     breakpoint: 1551,
//             //     settings: {
//             //         slidesToShow: 3,
//             //         slidesToScroll: 1
//             //     }
//             // },
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                     // adaptiveHeight: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     rows: 2,
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//       }
//     ]
//     });

    $('#related-kennisbnk').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    // infinite: true,
    infinite: false,
    slidesToScroll: 1,
    responsive: [
        /* {
            breakpoint: 1551,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },*/
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            //       rows: 2,
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
    ]
    }); 

    jQuery("#related-kennisbnk").css({"height":"auto","overflow":"visible"});

    /* Siderbar Menu Script */
    $('.filter-block ul li.parent .filter-title').click(function () {
        $(this).toggleClass('active');
        $(this).next('ul').slideToggle();
    });

    $(".sidebar ul.menu > li").each(function () {
        //var submenu_arrow = $('<i class="arrow"></i>');
        //$(submenu_arrow).insertBefore('.sub-menu');
        //$(this).find('.sub-menu').prev('a').append('<i class="arrow"></i>')

    });

    var submenu_arrow = $('<i class="arrow"></i>');
    $(submenu_arrow).insertBefore('.sidebar ul.menu > li .sub-menu');

    $('.sidebar ul li.menu-item-has-children i').click(function () {
        $(this).toggleClass('active');
        $(this).next('ul').slideToggle();
    });


    /* accordion Script */
    $(".accordion-block").each(function () {
        $(this).find('.accordion-content-block').each(function () {
            $(this).find('h3').click(function () {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).next('.ask-content').slideUp();
                } else {
                    $('.accordion-content-block h3').removeClass('active');
                    $(this).addClass('active');
                    $('.accordion-content-block .ask-content').slideUp();
                    $(this).next('.ask-content').slideDown();
                }
            });
        });
    });

    // accordian for elemntor
    jQuery(".elementor-toggle-item").each(function () {
        jQuery(this).find('.elementor-tab-title').on("click",function (e) {
            e.preventDefault();
            if (jQuery(this).hasClass('active')) {
                jQuery(this).removeClass('active');
                jQuery(this).next('.elementor-tab-content').slideUp();
            } else {
                jQuery('.elementor-toggle-item .elementor-tab-title').removeClass('active');
                jQuery(this).addClass('active');
                jQuery('.elementor-toggle-item .elementor-tab-content').slideUp();
                jQuery(this).next('.elementor-tab-content').slideDown();
            }
        });
    });

    /* Card Block Checkbox Script */
    $('.card-blocks-sections .card-block').each(function () {
        $(this).find('.checkbox input[type="checkbox"]').change(function () {
            if ($(this).is(':checked')) {
                $(this).parents('.card-block').addClass('isChecked');
            } else {
                $(this).parents('.card-block').removeClass('isChecked');
            }
        });
    });

    $('.read-more-btn').click(function () {
        $('.info-box-inner').toggleClass('isExpand');
        /*$('.info-box-inner').animate({
            height: 'initial'
        });*/
        $(this).toggleClass('active');
    });

    $('.les_content .read-more-btn').click(function () {
        $('.more_content').slideDown();
        $('.les_content').slideUp();
        $('.more_content .read-more-btn').addClass('active');
        //$(this).toggleClass('active');
    });

    $('.more_content .read-more-btn').click(function () {
        $('.les_content').slideDown();
        $('.more_content').slideUp();
    });

    /* Center Slider Style */
    $('.center').slick({
        centerMode: true,
        speed:2000,
        centerPadding: '0',
        centerMode: true,
        draggable: false,
        dots: true,
        //variableWidth: true,
        //adaptiveHeight: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3

                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    variableWidth: true,
                    adaptiveHeight:false,
                    slidesToShow: 1,
                    speed: 600,
                    cssEase: 'linear'
                }
            }
        ]
    });

    /* Detail Table Mobile Acccordion Script */
    $('.box-inner .box-inner-title').click(function () {
        $(this).toggleClass('active-tab');
        $(this).next('.box-row-wise').slideToggle();
    });



    $('.sorting-custom .sorting-options li:first-child a').addClass('active')

    var selected_val = $('.filter-sorting .sorting-custom li a.active').text();
    $('.filter-sorting .sorting-custom .selected-title').text(selected_val);

    $('.sorting-custom .selected-title').click(function () {
        $(this).toggleClass('active');
        $(this).next('.sorting-options').toggle();
    });

    $('.sorting-custom .sorting-options li').each(function () {
        $(this).find('a').click(function () {
            $('.sorting-custom .sorting-options li a').removeClass('active');
            $(this).addClass('active');
            var selected_val_new = $(this).text();
            $('.sorting-custom .selected-title').text(selected_val_new);
            $(this).parents('.sorting-options').hide();
        });
    });


    /* Wrap last word in span */
    /*    $('.banner-section h1').each(function (index, element) {
        var heading = $(element),
            word_array, last_word, first_part;

        word_array = heading.html().split(/\s+/); // split on spaces
        last_word = word_array.pop(); // pop the last word
        first_part = word_array.join(' '); // rejoin the first words together

        heading.html([first_part, ' <span>', last_word, '</span>'].join(''));
    });
    */
    equalheight_compare();

    /*$('.pricing-plan').each(function () {
        $(this).find('.plan-features li').each(function () {
            var index = $(this).index();
            //console.log('index: ' + index);

            var index_height = $(this).outerHeight();

            $(this).addClass('index' + index);

            var i_height = $('li.index' + index).map(function () {
                    return $(this).outerHeight();
                }).get(),

                maxHeight = Math.max.apply(null, i_height);

            console.log('index' + index + 'maxHeight:-' + maxHeight);

            $('li.index' + index).css('height', maxHeight);
        });
    });*/
    if($('.card-blocks-sections').length){
        var offset1 = $('.card-blocks-sections').offset().top;
        $(document).on('click','.pagination .page-numbers',function(){
            $('html,body').animate({
                scrollTop: offset1
            },1000);
        });
    }
    $(document).on('click','.st-next',function(){
        $('html,body').animate({
            scrollTop: $('.overview-content-section').offset().top
		}, 1000);
    });
    $(document).on('click','.st-prev',function(){
        $('html,body').animate({
            scrollTop: $('.overview-content-section').offset().top
		}, 1000);
    });

    if (jQuery(".ad-block-mobile").length>0){	
        jQuery("body.single-kennisbank").addClass("ad-block-mobile-present");	
        jQuery("body.tax-kennisbank_cat").addClass("ad-block-mobile-present");
        jQuery("body.review-page-body").addClass("ad-block-mobile-present");
        jQuery("body.page-template-tmp-topten-brokers").addClass("ad-block-mobile-present");	
    }	

    /* home slider css add-remove */	
    var alterClass = function() {	
        var ww = document.body.clientWidth;	
        if (ww < 1024) {	
          jQuery('.home .point-carousel-section').removeClass('broker-slide-desk');	
        } else if (ww >= 401) {	
          jQuery('.home .point-carousel-section').addClass('broker-slide-desk');	
        };	
      };	
      jQuery(window).resize(function(){	
        alterClass();	
      });	
      //Fire it when the page first loads:	
      alterClass();

    custom_function = function () {	
    var highestBox = 0;	
        $('.home .blog-block .title').each(function(){  	
            if($(this).height() > highestBox){  	
            highestBox = $(this).height();  	
        }	
    });    	
    $('.home .blog-block .title').height(highestBox);	
    var highestBox = 0;	
        $('.blog-overview .blog-block .title').each(function(){  	
                if($(this).height() > highestBox){  	
                highestBox = $(this).height();  	
        }	
    });	
    $('.blog-overview .blog-block .title').height(highestBox)	
    	
    var highestBox = 0;	
        $('.blog-overview .blog-block').each(function(){  	
                if($(this).height() > highestBox){  	
                highestBox = $(this).height();  	
        }	
    });    	
    $('.blog-overview .blog-block').height(highestBox) 	
   }	
    // slice blogger in team page	
    if($(window).width()>768){	
        var flg =1;
        $(".departments-b .team-profile.bloggers").slice(0,6).show();	
        	
        $(".all-bloggers").on("click", function(e){	
            e.preventDefault();	
            $(".departments-b .team-profile.bloggers:hidden").slice(0, 500).slideDown();	
            /*if($(".team-profile .bloggers :hidden").length == 0) {	
                $(".all-bloggers").text("").addClass("noContent");	
            }*/	
            if(flg==1){
                $(".departments-b .team-profile.bloggers:hidden").slice(0, 500).slideDown();    
                flg=2;
                $(".all-bloggers").addClass("all-blogs-open");
            }else{
                $(".departments-b .team-profile.bloggers").hide();
                $(".departments-b .team-profile.bloggers").slice(0,6).slideDown();
                flg=1;
                $(".all-bloggers").removeClass("all-blogs-open");
            }
        });	
    }	
    else{	
        var flg =1;
        $(".departments-b .team-profile.bloggers").slice(0,4).show();	
    	
        $(".all-bloggers").on("click", function(e){
            e.preventDefault();
            if(flg==1){
                $(".departments-b .team-profile.bloggers:hidden").slice(0, 500).slideDown();
                flg=2;
                $(".all-bloggers").addClass("all-blogs-open");
            }else{
                $(".departments-b .team-profile.bloggers").hide();
                $(".departments-b .team-profile.bloggers").slice(0,4).slideDown();
                flg=1;
                $(".all-bloggers").removeClass("all-blogs-open");
            }
        }); 	
        // all team member	
        $(".departments.all_team .team-profile").hide();	
        $(".departments.all_team .team-profile").slice(0,3).show();	
    	
        $(".all-team-sm").on("click", function(e){	
            e.preventDefault();	
            $(".departments.all_team .team-profile:hidden").slice(0, 500).slideDown();	
            if($(".departments.all_team .team-profile:hidden").length == 0) {	
                $(".all-team-sm").text("").addClass("noContent");	
            }	
        }); 	
    }	
    // form focus design (team page)	
    var inputs = jQuery(".fild-box-wrapper .fild-box > label").find("input, textarea");	
    function set_label_state(input, float_label) {	
        if (float_label) {	
            input.closest("label").addClass("float-label");	
        } else {	
            input.closest("label").removeClass("float-label");	
        }	
    }	
    function check_label_state(input) {	
        var not_empty = input.val().length > 0;	
        var is_focus = input.is(":focus");	
        set_label_state(input, not_empty || is_focus);	
    }	
    inputs	
        .each(function () {	
            check_label_state($(this));	
        })	
        .focus(function () {	
            var input = jQuery(this);	
            set_label_state(input, true);	
            jQuery(this).closest("label").addClass("focused");	
            // set_input_label_as_valid(input.siblings("label"));	
        })	
        .blur(function () {	
            var input = jQuery(this);	
            check_label_state(input);	
            input.closest("label").removeClass("focused");	
        });	
        // jQuery(".fild-box-wrapper .fild-box.radios .wpcf7-form-control .wpcf7-list-item input[type='radio']").attr("checked", false);	
        	
        // default first checked	
        // jQuery(".fild-box-wrapper .fild-box.radios .wpcf7-form-control .wpcf7-list-item.first > label input[type='radio']").attr("checked", "checked");	
        	
        // add checked class on load	
        jQuery(".fild-box-wrapper .fild-box.radio-selection .wpcf7-form-control .wpcf7-list-item input[type='radio'], .fild-box-wrapper .fild-box.radios .wpcf7-form-control .wpcf7-list-item input[type='radio']").each(function(){	
            jQuery(this).parent().addClass(jQuery(this).attr("value"));	
            if(jQuery(this).is(':checked')){
                jQuery(".fild-box-wrapper .fild-box.radio-selection .wpcf7-form-control .wpcf7-list-item, .fild-box-wrapper .fild-box.radios .wpcf7-form-control .wpcf7-list-item").removeClass("checked")	
                jQuery(this).parent().addClass("checked");	
                jQuery(this).attr("checked", "checked");	
            }	
            jQuery(this).parent().on("click",function(){	
                jQuery(".fild-box-wrapper .fild-box.radio-selection .wpcf7-form-control .wpcf7-list-item, .fild-box-wrapper .fild-box.radios .wpcf7-form-control .wpcf7-list-item").removeClass("checked")	
                jQuery(this).addClass("checked");	
                jQuery(".fild-box-wrapper .fild-box.radio-selection .wpcf7-form-control .wpcf7-list-item input[type='radio'], fild-box-wrapper .fild-box.radios .wpcf7-form-control .wpcf7-list-item input[type='radio']").removeAttr("checked");	
                jQuery(this).find("input[type='radio']").attr("checked", "checked");	
                if(!jQuery(this).is(':checked')){	
                }	
            });	
        });	
        	
        // add checked class on changes	
        // jQuery(".fild-box-wrapper .fild-box.radios .wpcf7-form-control .wpcf7-list-item").on("click",function() {	
        //     jQuery(".fild-box-wrapper .fild-box.radios .wpcf7-form-control .wpcf7-list-item").removeClass("checked")	
        //     if(jQuery(this).is(':checked')){	
        //         jQuery(this).parent().addClass("checked");	
        //     }	
        // });	
        if(jQuery(window).width()< 768){   

            // prelander more text
            jQuery(".expand-description").css('height', 'auto');
            var auto_h_text = jQuery(".expand-description").height();
            jQuery(".expand-description").css('height', '102px');
            jQuery(".prelander-middle-section.with-white-bg .prelander-left-content .elementor-element.read-more-btn").click(function(){
                if(jQuery(this).hasClass("toggeled")){
                    jQuery(".expand-description").animate({height:102},200);
                    jQuery(this).removeClass("toggeled");
                }
                else{
                    jQuery(".expand-description").animate({height:auto_h_text},200);
                    jQuery(this).addClass("toggeled");
                }
            });
        }
    
        // team page text toggle
        if(jQuery(window).width()< 768){   
            jQuery(".page-template-tmp_team .info-box-inner>.description").css('height', 'auto');
            var auto_h_text_team = jQuery(".page-template-tmp_team .info-box-inner>.description").height();
            jQuery(".page-template-tmp_team .info-box-inner>.description").css('height', '75px');
            jQuery(".page-template-tmp_team .info-box-text .rdmr-div>a").click(function(){
                if(jQuery(this).hasClass("toggeled")){
                    jQuery(".page-template-tmp_team .info-box-inner>.description").animate({height:72},200);
                    jQuery(this).removeClass("toggeled");
                }
                else{
                    jQuery(".page-template-tmp_team .info-box-inner>.description").animate({height:auto_h_text_team},200);
                    jQuery(this).addClass("toggeled");
                }
            });
        }

    jQuery(".elementor-element.comman-design:last").addClass("last-comman-design");

    if(jQuery(".single-kennisbank .floating-box-design").outerHeight()>0){
        jQuery(".single-kennisbank .site-footer>.container").css({"padding-bottom":jQuery(".single-kennisbank .floating-box-design").outerHeight()});
    }

    if(jQuery(".blog-details .floating-box-design").outerHeight()>0){
        jQuery(".blog-details .site-footer>.container").css({"padding-bottom":jQuery(".blog-details .floating-box-design").outerHeight()});
    }
    
    // add class in bar design in case of full width
    jQuery(".top10-lander .content-right .card-block.cf .card-block-right .ratings-list .progresses span.bar").each(function(){
        if(jQuery(this).attr("data-percent")=="100"){
            jQuery(this).addClass("full_width");
        }
    });
    jQuery(".review-main-content").closest("body").addClass("review-page-body");
    
    jQuery(".single-kennisbank .banner-btm-info .info-box-text,.elementor-section-wrap .review-main-content .text-right-block .ad-300x250,.elementor-section-wrap .review-main-content .text-right-block .ad-336x280").find(".adsanity-inner").each(function(){
        jQuery(this).parent().addClass("adsanity-parent-horizontal");
        if(jQuery(this).find('img').length){
            jQuery(this).parent().addClass("banner-w-img");

            if(jQuery(window).width() < 767){
                var mobile_square_banner_1 = jQuery(".single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-300x250.banner-w-img,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-300x250.banner-w-img,.single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-336x280.banner-w-img,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-336x280.banner-w-img");
                mobile_square_banner_1.attr('style', "height :"+"auto"+";"+"max-height:"+"unset");
                mobile_square_banner_1.find(".adsanity-inner").attr('style', "height :"+"auto"+";"+"max-height:"+"unset");
                mobile_square_banner_1.find("img").one('load', function() {
                    console.log("");
                    var mobile_square_banner_height = mobile_square_banner_1.find(".adsanity-inner").outerHeight()+40;
                    var mobile_banner_height_w_img = setInterval(function(){
                        mobile_square_banner_1.find(".adsanity-inner").attr('style', "height :"+mobile_square_banner_height+"px"+";"+"max-height:"+mobile_square_banner_height+"px");
                        mobile_square_banner_1.attr('style', "height :"+mobile_square_banner_height+"px"+";"+"max-height:"+mobile_square_banner_height+"px"+';' +"min-width: "+jQuery(window).width()+ 'px;');
                    },100);
                    setTimeout(function( ) {
                        clearInterval( mobile_banner_height_w_img ); 
                    }, 2000);
                });
            }

        }
        else{
            if(jQuery(window).width() < 767){
                // adsinity mobile height
                if(jQuery(this).find("iframe").length){
                    var mobile_square_banner = jQuery(this).find("iframe").height()+40;
                }
                else{
                    var mobile_square_banner = jQuery(this).find("a").height()+40;
                    
                }
                var mobile_banner_height = setInterval(function(){
                    jQuery(".single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-300x250,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-300x250,.single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-336x280,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-336x280").each(function(){
                        jQuery(this).height(mobile_square_banner);
                        jQuery(this).attr('style', jQuery(this).attr('style') + ';' + "max-height :"+mobile_square_banner +'px'+ ';' +"min-width: "+jQuery(window).width()+ 'px;');
                        
                    });
                },100);
                setTimeout(function( ) {
                    clearInterval( mobile_banner_height ); 
                }, 2000);
            }
        }
    });

    // mobile slider full width in review page
    if(jQuery(window).width() < 767){
        jQuery(".review-slider .elementor-widget-image-carousel").css({"min-width":jQuery(window).width(),"height":jQuery(".review-slider .elementor-image-carousel-wrapper").outerHeight()*1.2});
    }
    if(jQuery(window).width() > 768){
        jQuery(".review-slider .elementor-widget-image-carousel").css({"min-width":"auto","height":"auto"});
    }

    // hide right side banner if not present
    if(jQuery(".elementor-section-wrap .review-main-content .review-right-add").find(".elementor-text-editor").is(':empty')){
        jQuery(".elementor-section-wrap .review-main-content .review-right-add").attr('style', jQuery(".elementor-section-wrap .review-main-content .review-right-add").attr('style') + ';' +"display:"+"none !important");
        if(jQuery(window).width() > 1650){
            jQuery(".elementor-section-wrap .review-main-content .text-right-block").attr('style', jQuery(".elementor-section-wrap .review-main-content .text-right-block").attr('style') + ';' +"width:"+"81.5% !important");
        }
    }
    if(jQuery(".elementor-section-wrap .review-main-content .review-right-add").find(".elementor-element").hasClass('elementor-hidden-desktop')){
        jQuery(".elementor-section-wrap .review-main-content .review-right-add").attr('style', jQuery(".elementor-section-wrap .review-main-content .review-right-add").attr('style') + ';' +"display:"+"none !important");
        if(jQuery(window).width() > 1650){
            jQuery(".elementor-section-wrap .review-main-content .text-right-block").attr('style', jQuery(".elementor-section-wrap .review-main-content .text-right-block").attr('style') + ';' +"width:"+"81.5% !important");
        }
    }
        

    // text popup bottom overlap issue

    if(jQuery(".wisepops-popup").length){   
        var elem_wisepopup = document.querySelector(".wisepops-popup");
        var elem_wisepopup_style = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("opacity");
        var elem_wisepopup_style1 = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("transform");
        if (elem_wisepopup_style === "1" && elem_wisepopup_style1==="matrix(1, 0, 0, 1, 0, 0)") {
            jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});
            jQuery(".floating-box-design .btn-green").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()-25});

            if(jQuery(".single-kennisbank .floating-box-design").outerHeight()>0){
                jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()+jQuery(".single-kennisbank .floating-box-design").outerHeight()});
                jQuery(".single-kennisbank .floating-box-design").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});
            }
        }
        else{
            jQuery("footer.site-footer>.container").css({"margin-bottom":"0"});
            jQuery(".floating-box-design .btn-green").css({"margin-bottom":0});
        }

        if(jQuery(window).width() <768){
            var elem_wisepopup = document.querySelector(".wisepops-popup");
            var elem_wisepopup_style = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("opacity");
            var elem_wisepopup_style1 = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("transform");
            if (elem_wisepopup_style === "1" && elem_wisepopup_style1==="matrix(1, 0, 0, 1, 0, 0)") {
                jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()+jQuery(".single-brokers .main_bottom_bar").outerHeight()});
                jQuery(".single-brokers .main_bottom_bar").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});

                if(jQuery(".single-kennisbank .floating-box-design").outerHeight()>0){
                    jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()+jQuery(".single-kennisbank .floating-box-design").outerHeight(),"padding-bottom":"20px"});
                    jQuery(".single-kennisbank .floating-box-design").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});
                }
            }
            else{
                jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".single-brokers .main_bottom_bar").outerHeight()});
                jQuery(".single-brokers .main_bottom_bar").css({"margin-bottom":"0"});
            
                if(jQuery(".single-kennisbank .floating-box-design").outerHeight()>0){
                    jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".single-kennisbank .floating-box-design").outerHeight()});
                    jQuery(".single-kennisbank .floating-box-design").css({"margin-bottom":"0"});
                }
            }
        }
    }
    
    jQuery(".wisepops-close").on("click",function(){
        if(jQuery(".single-brokers .main_bottom_bar").outerHeight()>0){
            jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".single-brokers .main_bottom_bar").outerHeight()});

        }
        else{
            jQuery("footer.site-footer>.container").css({"margin-bottom":"0"});
        }
        jQuery(".single-brokers .main_bottom_bar,.floating-box-design .btn-green,.single-kennisbank .floating-box-design").css({"margin-bottom":"0"});
    });

    if(jQuery(this).width() < 768 && jQuery(".blog-details .floating-box-design").outerHeight()>0){
        jQuery(".blog-details .footer>.container").css({"padding-bottom":jQuery(".blog-details .floating-box-design").outerHeight()+"px"}); 
    }

    // add class for adsinity plugin horizontal
    jQuery(".single-kennisbank .banner-btm-info .info-box-text,.elementor-section-wrap .review-main-content .text-right-block,.page-template-tmp-topten-brokers .ad-block-mobile.top-ten").find(".adsanity-inner").each(function(){
        jQuery(this).parent().addClass("adsanity-parent-horizontal");
        if(jQuery(this).find('img').length){
            jQuery(this).parent().addClass("banner-w-img");
        }
    });

    function equalHeight(group) {
        tallest = 0;
        group.each(function() {
            thisHeight = jQuery(this).height();
            if(thisHeight > tallest) {
              tallest = thisHeight;
            }
        });
        group.height("auto");
        group.height(tallest);
    }
    equalHeight(jQuery(".common-accordian .elementor-tab-title"));
});
// ready end


 /* blog-detail-Slider Script */
 $('.blog-detail-slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    infinite: true,
    swipe: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1551,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight:true
                
            }
        },
        {
            breakpoint: 1024,
            settings: {
                // item:4,
                slidesToShow: 2,
                slidesToScroll: 2, 
                infinite: false          
            }
        },
        {
            breakpoint: 600,
            settings: {
                // item:4,
                slidesToShow: 1,
                slidesToScroll: 1, 
                infinite: false          
            }
        }
]
});

/* Script on load
----------------------------------*/
$(window).on('load', function () {
    // mobile slider full width in review page
    if(jQuery(window).width() < 767){
        jQuery(".review-slider .elementor-widget-image-carousel").css({"min-width":jQuery(window).width(),"height":jQuery(".review-slider .elementor-image-carousel-wrapper").outerHeight()*1.2});
    }
    if(jQuery(window).width() > 768){
        jQuery(".review-slider .elementor-widget-image-carousel").css({"min-width":"auto","height":"auto"});
    }

     // hide scrollbar
     if( $('.floating-box-design .mCustomScrollBox').css('max-height') == 'none' ) {
        $(".floating-box-design ul.mCustomScrollbar._mCS_1 #mCSB_1_scrollbar_vertical").css({"opacity":"0"});
    } else {
        $(".floating-box-design ul.mCustomScrollbar._mCS_1 #mCSB_1_scrollbar_vertical").css({"opacity":"1"});
    }

    // hide right side banner if not present
    if(jQuery(".elementor-section-wrap .review-main-content .review-right-add").find(".elementor-text-editor").is(':empty')){
        jQuery(".elementor-section-wrap .review-main-content .review-right-add").attr('style', jQuery(".elementor-section-wrap .review-main-content .review-right-add").attr('style') + ';' +"display:"+"none !important");
        if(jQuery(window).width() > 1650){
            jQuery(".elementor-section-wrap .review-main-content .text-right-block").attr('style', jQuery(".elementor-section-wrap .review-main-content .text-right-block").attr('style') + ';' +"width:"+"81.5% !important");
        }
    }
    if(jQuery(".elementor-section-wrap .review-main-content .review-right-add").find(".elementor-element").hasClass('elementor-hidden-desktop')){
        jQuery(".elementor-section-wrap .review-main-content .review-right-add").attr('style', jQuery(".elementor-section-wrap .review-main-content .review-right-add").attr('style') + ';' +"display:"+"none !important");
        if(jQuery(window).width() > 1650){
            jQuery(".elementor-section-wrap .review-main-content .text-right-block").attr('style', jQuery(".elementor-section-wrap .review-main-content .text-right-block").attr('style') + ';' +"width:"+"81.5% !important");
        }
    }

    // kennisbank mobile ad height
    var ad_mobile_height = jQuery(".ad-block-mobile .adsanity-inner,.review-main-content .text-right-block .ad-block-mobile .adsanity-inner").parent().outerHeight();
    // if(ad_mobile_height < 50){
    if(jQuery(window).width() < 992){
        var ad_mobile_height_px = jQuery(".ad-block-mobile .adsanity-inner").outerHeight()+'px';
        var ad_mobile_height_px_for_top = jQuery(".ad-block-mobile .adsanity-inner").outerHeight()+(-1)+'px';
        if(jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile,.review-main-content .text-right-block .ad-block-mobile,.page-template-tmp-topten-brokers .ad-block-mobile").find(".adsanity-inner").find('img').length){
            var ad_mobile_height_px = jQuery(".ad-block-mobile .adsanity-inner img").outerHeight()+'px';
            var ad_mobile_height_px_for_top = jQuery(".ad-block-mobile .adsanity-inner img").outerHeight()+(-1)+'px';
            var adsanity_inner_w_img = jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile .adsanity-inner,.review-main-content .text-right-block .ad-block-mobile .adsanity-inner,.page-template-tmp-topten-brokers .ad-block-mobile .adsanity-inner");
            adsanity_inner_w_img.attr('style', adsanity_inner_w_img.attr('style') + ';' +  'height :'+ad_mobile_height_px);
        }
        var adsanity_inner_w_img = jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile .adsanity-inner,.review-main-content .text-right-block .ad-block-mobile .adsanity-inner,.page-template-tmp-topten-brokers .ad-block-mobile .adsanity-inner");
        adsanity_inner_w_img.attr('style', adsanity_inner_w_img.attr('style') + ';' +  'height :'+ad_mobile_height_px);

        var ad_block_mobile = jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile,.review-main-content .text-right-block .ad-block-mobile,.page-template-tmp-topten-brokers .ad-block-mobile");
        ad_block_mobile.attr('style', ad_block_mobile.attr('style') + ';' +  'height :'+ad_mobile_height_px);
        
        var kennisbank_header = jQuery(".ad-block-mobile-present.single-kennisbank .header, .ad-block-mobile-present.tax-kennisbank_cat .header,.review-page-body .header,.page-template-tmp-topten-brokers .header");
        kennisbank_header.attr('style', "margin-top :"+ad_mobile_height_px_for_top);
        
        var kennisbank_header_fixed = jQuery(".ad-block-mobile-present.single-kennisbank .header.fixed, .ad-block-mobile-present.tax-kennisbank_cat .header.fixed,.review-page-body .header.fixed,.ad-block-mobile-present.page-template-tmp-topten-brokers .header.fixed");
        kennisbank_header_fixed.attr('style', "top :"+ad_mobile_height_px_for_top);
    }
    // }

    // add class for adsinity plugin horizontal
    jQuery(".single-kennisbank .banner-btm-info .info-box-text,.elementor-section-wrap .review-main-content .text-right-block .ad-300x250,.elementor-section-wrap .review-main-content .text-right-block .ad-336x280").find(".adsanity-inner").each(function(){
        jQuery(this).parent().addClass("adsanity-parent-horizontal");
        if(jQuery(this).find('img').length){
            jQuery(this).parent().addClass("banner-w-img");
            if(jQuery(window).width() < 767){
                var mobile_square_banner_1 = jQuery(".single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-300x250.banner-w-img,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-300x250.banner-w-img,.single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-336x280.banner-w-img,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-336x280.banner-w-img");
                mobile_square_banner_1.attr('style', "height :"+"auto"+";"+"max-height:"+"unset");
                mobile_square_banner_1.find(".adsanity-inner").attr('style', "height :"+"auto"+";"+"max-height:"+"unset");
                mobile_square_banner_1.find("img").one('load', function() {
                    console.log("");
                    var mobile_square_banner_height = mobile_square_banner_1.find(".adsanity-inner").outerHeight()+40;
                    var mobile_banner_height_w_img = setInterval(function(){
                        mobile_square_banner_1.find(".adsanity-inner").attr('style', "height :"+mobile_square_banner_height+"px"+";"+"max-height:"+mobile_square_banner_height+"px");
                        mobile_square_banner_1.attr('style', "height :"+mobile_square_banner_height+"px"+";"+"max-height:"+mobile_square_banner_height+"px"+';' +"min-width: "+jQuery(window).width()+ 'px;');
                    },100);
                    setTimeout(function( ) {
                        clearInterval( mobile_banner_height_w_img ); 
                    }, 2000);
                });
            }
        }
        else{
            if(jQuery(window).width() < 767){
                // adsinity mobile height
                if(jQuery(this).find("iframe").length){
                    var mobile_square_banner = jQuery(this).find("iframe").height()+40;
                }
                else{
                    var mobile_square_banner = jQuery(this).find("a").height()+40;
                }
                var mobile_banner_height = setInterval(function(){
                    jQuery(".single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-300x250,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-300x250,.single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-336x280,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-336x280").each(function(){
                        jQuery(this).height(mobile_square_banner);
                        jQuery(this).attr('style', jQuery(this).attr('style') + ';' + "max-height :"+mobile_square_banner +'px'+ ';' +"min-width: "+jQuery(window).width()+ 'px;');
                        
                    });
                },500);
                setTimeout(function( ) {
                    clearInterval( mobile_banner_height ); 
                }, 3000);
            }
        }
    });

    
        
    /* Add class in body */
    if(jQuery('#wisepops-root').is(":visible"))
    {
        jQuery('body').addClass('cfd-warning-bar');
    }

    // text popup bottom overlap issue
    if(jQuery(".wisepops-popup").length){   
        var elem_wisepopup = document.querySelector(".wisepops-popup");
        var elem_wisepopup_style = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("opacity");
        var elem_wisepopup_style1 = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("transform");
        if (elem_wisepopup_style === "1" && elem_wisepopup_style1==="matrix(1, 0, 0, 1, 0, 0)") {
            jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});
            jQuery(".floating-box-design .btn-green").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()-25});

            if(jQuery(".single-kennisbank .floating-box-design").outerHeight()>0){
                jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()+jQuery(".single-kennisbank .floating-box-design").outerHeight()});
                jQuery(".single-kennisbank .floating-box-design").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});
            }
        }
        else{
            jQuery("footer.site-footer>.container").css({"margin-bottom":"0"});
            jQuery(".floating-box-design .btn-green").css({"margin-bottom":0});
        }

        if(jQuery(window).width() <768){
            var elem_wisepopup = document.querySelector(".wisepops-popup");
            var elem_wisepopup_style = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("opacity");
            var elem_wisepopup_style1 = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("transform");
            if (elem_wisepopup_style === "1" && elem_wisepopup_style1==="matrix(1, 0, 0, 1, 0, 0)") {
                jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()+jQuery(".single-brokers .main_bottom_bar").outerHeight()});
                jQuery(".single-brokers .main_bottom_bar").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});

                if(jQuery(".single-kennisbank .floating-box-design").outerHeight()>0){
                    jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()+jQuery(".single-kennisbank .floating-box-design").outerHeight(),"padding-bottom":"20px"});
                    jQuery(".single-kennisbank .floating-box-design").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});
                }
            }
            else{
                jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".single-brokers .main_bottom_bar").outerHeight()});
                jQuery(".single-brokers .main_bottom_bar").css({"margin-bottom":"0"});
            
                if(jQuery(".single-kennisbank .floating-box-design").outerHeight()>0){
                    jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".single-kennisbank .floating-box-design").outerHeight()});
                    jQuery(".single-kennisbank .floating-box-design").css({"margin-bottom":"0"});
                }
            }
        }
    }
    
    jQuery(".wisepops-close").on("click",function(){
        jQuery('body').removeClass('cfd-warning-bar');
        if(jQuery(".single-brokers .main_bottom_bar").outerHeight()>0){
            jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".single-brokers .main_bottom_bar").outerHeight()});
        }
        else{
            jQuery("footer.site-footer>.container").css({"margin-bottom":"0"});
        }
        jQuery(".single-brokers .main_bottom_bar,.floating-box-design .btn-green,.single-kennisbank .floating-box-design").css({"margin-bottom":"0"});
    });

    if(jQuery(this).width() < 768 && jQuery(".blog-details .floating-box-design").outerHeight()>0){
        jQuery(".blog-details .footer>.container").css({"padding-bottom":jQuery(".blog-details .floating-box-design").outerHeight()+"px"}); 
    }

    // add class for adsinity plugin horizontal
    jQuery(".single-kennisbank .banner-btm-info .info-box-text,.elementor-section-wrap .review-main-content .text-right-block").find(".adsanity-inner").each(function(){
        jQuery(this).parent().addClass("adsanity-parent-horizontal");
        if(jQuery(this).find('img').length){
            jQuery(this).parent().addClass("banner-w-img");
        }
    });

    

    // calling function on every 2s and stop iteration after 8s
    function equal_height_interval(){     
        var equal_height_interval = setInterval(function(){
            equalheight('.point-carousel-wrapper .slick-slide');
            equalheight('.center-slick .slide-info .spcl-img');
            equalheight('.center-slick .slide-info');
            equalheight('.equal-height');
            // equalheight('.blog-col');
            // equalheight('.blog-block');
            equalheight('.page-template-tmp-library-main .library_themes.features_wrapper ul li');
            equalheight('.page-template-tmp-library-main .library_themes.themes_wrapper ul li');
            equalheight('.slick-list .blog-block');
            equalheight ('.blog-overview .blog-block');
            equalheight ('.blog-overview .blog-block .title');
            equalheight ('.blog-overview .blog-block .content-block > p');
            equalheight ('.blog-overview-cat .blog-block');
            equalheight ('.blog-overview-cat .blog-block .title');
            equalheight ('.home .blog-block .title');
            equalheight ('.home .blog-block .content-block > p');
            equalheight ('.rel-blog-wrapper .slick-list .blog-block');
            equalheight ('.rel-blog-wrapper .blog-block .title');
            equalheight ('.rel-blog-wrapper .blog-block .content-block > p');
            equalheight ('.single-kennisbank .point-carousel-section .slick-slide .single-block');
            equalheight ('.page-template-tmp-topten-brokers .client-logo-section .logo-slider .single-block p');
            if ($(window).width() > 767) {
                equalheight(".page-template-tmp-home .point-carousel-wrapper .point-carousel .slick-slide .single-block");                
            }

            equalHeight (jQuery('.slick-list .blog-block'));
            equalHeight (jQuery('.blog-overview .blog-block'));
            equalHeight (jQuery('.blog-overview .blog-block .title'));
            equalHeight (jQuery('.blog-overview .blog-block .content-block > p'));
            equalHeight (jQuery('.blog-overview-cat .blog-block'));
            equalHeight (jQuery('.blog-block .content-block p'));
            equalHeight (jQuery('.blog-overview-cat .blog-block .title'));
            equalHeight (jQuery('.home .blog-block .title'));
            equalHeight (jQuery('.home .blog-block .content-block > p'));
            equalHeight (jQuery('.rel-blog-wrapper .slick-list .blog-block'));
            equalHeight (jQuery('.rel-blog-wrapper .blog-block .title'));
            equalHeight (jQuery('.rel-blog-wrapper .blog-block .content-block > p'));
            equalHeight (jQuery('.single-kennisbank .point-carousel-section .slick-slide .single-block')); 
            equalHeight (jQuery('.single-kennisbank .point-carousel-section .single-block .content-block h4')); 
        },2000);
        setTimeout(function( ) {
            clearInterval( equal_height_interval ); 
        }, 8000);
    } 

    equal_height_interval();

    jQuery(document).on("click",".pagination .page-numbers",function(){
        equal_height_interval();
    });
    

    setTimeout(function () {
    equalheight ('.rel-blog-wrapper .slick-list .blog-block');
    equalheight ('.rel-blog-wrapper .blog-block .title');
    equalheight ('.rel-blog-wrapper .blog-block .content-block > p');
    equalheight(".page-template-tmp-home .point-carousel-wrapper .point-carousel .slick-slide .single-block");
        if ($(window).width() > 767) {
            equalheight(".page-template-tmp-home .point-carousel-wrapper .point-carousel .slick-slide .single-block");
        }
    },200);

    // wisepopup class add
    if(jQuery('#wisepops-root').is(":visible"))
    {
        jQuery('body').addClass('cfd-warning-bar');
    } 

    // review sidebar click
    $(function() {
        if(jQuery("body").hasClass("logged-in")){
            if(jQuery(".elementor-section-wrap .review-main-content .text-right-block .ad-block-mobile").length && !jQuery(".elementor-element.sidebar.sidebar-left.review-page").hasClass("sticky")){
                jQuery('.elementor-element.sidebar.sidebar-left.review-page .sidebar-nav-review ul li a[href^="#"]:not([href=\\#])').on('click', function(e) {
                    // console.log("w-banner-click wo sticky a");
                    
                    e.preventDefault();
                   
                    var target = jQuery(this.hash);
                    target = target.length ? target : jQuery('[name=' + this.hash.substr(1) +']');
                    if (target.length) {
                        if(jQuery(window).width()>992){
                            if(jQuery("header").hasClass("fixed")){
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 150)
                                }, 1000,'linear');
                            }
                            else{
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 250)
                                }, 1000,'linear');
                            }
                        }
                        else{
                            $('.sidebar.sidebar-left .filter-block').slideUp();
                            function review_sidebar_link_click(){     
                                var review_sidebar_link_click = setInterval(function(){
                                    // $('.sidebar.sidebar-left .filter-block').toggleClass('isActive');
                                    // $('.sidebar-header #sub-toggle').removeClass("isActive");
                                    if(!$('.sidebar.sidebar-left .filter-block').hasClass('isActive')){
                                        setTimeout(function () {
                                            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height(jQuery(".sidebar-header #sub-toggle").closest(".elementor-widget-heading").outerHeight());
                                            $('.sidebar-header #sub-toggle').addClass("isActive");
                                            $('.sidebar.sidebar-left .filter-block').addClass('isActive');
                                        },400);
                                        }
                                    else{
                                        setTimeout(function () {
                                            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height("auto");
                                            $('.sidebar-header #sub-toggle').removeClass("isActive");
                                            $('.sidebar.sidebar-left .filter-block').removeClass('isActive');
                                        },400);
                                    }
                                },500);
                                setTimeout(function( ) {
                                    clearInterval( review_sidebar_link_click ); 
                                }, 3000);
                            };
                            review_sidebar_link_click();
                            if(jQuery("header").hasClass("fixed")){
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 220)
                                }, 1000,'linear');
                            }
                            else{
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 340)
                                }, 1000,'linear');
                            }
                        }
                        var noHashURL = window.location.href.replace(/#.*/, '');
                        window.history.replaceState('', '', noHashURL)
                        return false;
                    }
                });
            }
            else if(jQuery(".elementor-section-wrap .review-main-content .text-right-block .ad-block-mobile").length && jQuery(".elementor-element.sidebar.sidebar-left.review-page").hasClass("sticky")){
                jQuery('.elementor-element.sidebar.sidebar-left.review-page .sidebar-nav-review ul li a[href^="#"]:not([href=\\#])').on('click', function(e) {
                    // console.log("w-banner-click sticky");
                    e.preventDefault();
                    
                    var target = jQuery(this.hash);
                    target = target.length ? target : jQuery('[name=' + this.hash.substr(1) +']');
                    if (target.length) {
                        if(jQuery(window).width()>992){
                            jQuery('html,body').stop().animate({
                                scrollTop: (target.offset().top - 240)
                            }, 1000,'linear');
                        }
                        else{
                            $('.sidebar.sidebar-left .filter-block').slideUp();
                            function review_sidebar_link_click(){     
                                var review_sidebar_link_click = setInterval(function(){
                                    // $('.sidebar.sidebar-left .filter-block').toggleClass('isActive');
                                    // $('.sidebar-header #sub-toggle').removeClass("isActive");
                                    if(!$('.sidebar.sidebar-left .filter-block').hasClass('isActive')){
                                        setTimeout(function () {
                                            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height(jQuery(".sidebar-header #sub-toggle").closest(".elementor-widget-heading").outerHeight());
                                            $('.sidebar-header #sub-toggle').addClass("isActive");
                                            $('.sidebar.sidebar-left .filter-block').addClass('isActive');
                                        },400);
                                        }
                                    else{
                                        setTimeout(function () {
                                            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height("auto");
                                            $('.sidebar-header #sub-toggle').removeClass("isActive");
                                            $('.sidebar.sidebar-left .filter-block').removeClass('isActive');
                                        },400);
                                    }
                                },500);
                                setTimeout(function( ) {
                                    clearInterval( review_sidebar_link_click ); 
                                }, 3000);
                            };
                            review_sidebar_link_click();

                            jQuery('html,body').stop().animate({
                                scrollTop: (target.offset().top - 400)
                            }, 1500,'linear');
                        }
                        var noHashURL = window.location.href.replace(/#.*/, '');
                        window.history.replaceState('', '', noHashURL)
                        return false;
                    }
                });
            }
            
            else{
                jQuery('.elementor-element.sidebar.sidebar-left.review-page .sidebar-nav-review ul li a[href^="#"]:not([href=\\#])').on('click', function(e) {
                    
                    var target = jQuery(this.hash);
                    target = target.length ? target : jQuery('[name=' + this.hash.substr(1) +']');
                    if (target.length) {
                        if(jQuery(window).width()>992){
                            if(jQuery("header").hasClass("fixed")){
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 160)
                                }, 1000,'linear');
                            }
                            else{
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 220)
                                }, 1000,'linear');
                            }
                        }
                        else{
                            $('.sidebar.sidebar-left .filter-block').slideUp();
                            function review_sidebar_link_click(){     
                                var review_sidebar_link_click = setInterval(function(){
                                    // $('.sidebar.sidebar-left .filter-block').toggleClass('isActive');
                                    // $('.sidebar-header #sub-toggle').removeClass("isActive");
                                    if(!$('.sidebar.sidebar-left .filter-block').hasClass('isActive')){
                                        setTimeout(function () {
                                            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height(jQuery(".sidebar-header #sub-toggle").closest(".elementor-widget-heading").outerHeight());
                                            $('.sidebar-header #sub-toggle').addClass("isActive");
                                            $('.sidebar.sidebar-left .filter-block').addClass('isActive');
                                        },400);
                                        }
                                    else{
                                        setTimeout(function () {
                                            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height("auto");
                                            $('.sidebar-header #sub-toggle').removeClass("isActive");
                                            $('.sidebar.sidebar-left .filter-block').removeClass('isActive');
                                        },400);
                                    }
                                },500);
                                setTimeout(function( ) {
                                    clearInterval( review_sidebar_link_click ); 
                                }, 3000);
                            };
                            review_sidebar_link_click();

                            if(jQuery("header").hasClass("fixed")){
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 185)
                                }, 1500,'linear');
                            }
                            else{
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 245)
                                }, 1500,'linear');
                            }
                        }
                        var noHashURL = window.location.href.replace(/#.*/, '');
                        window.history.replaceState('', '', noHashURL)
                        return false;
                    }
                    
                });
            }
        }
        else{
            if(jQuery(".elementor-section-wrap .review-main-content .text-right-block .ad-block-mobile").length && !jQuery(".elementor-element.sidebar.sidebar-left.review-page").hasClass("sticky")){
                jQuery('.elementor-element.sidebar.sidebar-left.review-page .sidebar-nav-review ul li a[href^="#"]:not([href=\\#])').on('click', function(e) {
                    // console.log("w-banner-click wo sticky a");
                    
                    var target = jQuery(this.hash);
                    target = target.length ? target : jQuery('[name=' + this.hash.substr(1) +']');
                    if (target.length) {
                        if(jQuery(window).width()>992){
                            if(jQuery("header").hasClass("fixed")){
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 120)
                                }, 1000,'linear');
                            }
                            else{
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 220)
                                }, 1000,'linear');
                            }
                        }
                        else{
                            $('.sidebar.sidebar-left .filter-block').slideUp();
                            function review_sidebar_link_click(){     
                                var review_sidebar_link_click = setInterval(function(){
                                    // $('.sidebar.sidebar-left .filter-block').toggleClass('isActive');
                                    // $('.sidebar-header #sub-toggle').removeClass("isActive");
                                    if(!$('.sidebar.sidebar-left .filter-block').hasClass('isActive')){
                                        setTimeout(function () {
                                            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height(jQuery(".sidebar-header #sub-toggle").closest(".elementor-widget-heading").outerHeight());
                                            $('.sidebar-header #sub-toggle').addClass("isActive");
                                            $('.sidebar.sidebar-left .filter-block').addClass('isActive');
                                        },400);
                                        }
                                    else{
                                        setTimeout(function () {
                                            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height("auto");
                                            $('.sidebar-header #sub-toggle').removeClass("isActive");
                                            $('.sidebar.sidebar-left .filter-block').removeClass('isActive');
                                        },400);
                                    }
                                },500);
                                setTimeout(function( ) {
                                    clearInterval( review_sidebar_link_click ); 
                                }, 3000);
                            };
                            review_sidebar_link_click();

                            if(jQuery("header").hasClass("fixed")){
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 200)
                                }, 1000,'linear');
                            }
                            else{
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 320)
                                }, 1000,'linear');
                            }
                        }
                        var noHashURL = window.location.href.replace(/#.*/, '');
                        window.history.replaceState('', '', noHashURL)
                        return false;
                    }
                });
            }
            else if(jQuery(".elementor-section-wrap .review-main-content .text-right-block .ad-block-mobile").length && jQuery(".elementor-element.sidebar.sidebar-left.review-page").hasClass("sticky")){
                jQuery('.elementor-element.sidebar.sidebar-left.review-page .sidebar-nav-review ul li a[href^="#"]:not([href=\\#])').on('click', function(e) {
                    // console.log("w-banner-click sticky");
                    e.preventDefault();
                     
                    var target = jQuery(this.hash);
                    target = target.length ? target : jQuery('[name=' + this.hash.substr(1) +']');
                    if (target.length) {
                        if(jQuery(window).width()>992){
                            jQuery('html,body').stop().animate({
                                scrollTop: (target.offset().top - 220)
                            }, 1000,'linear');
                        }
                        else{
                            $('.sidebar.sidebar-left .filter-block').slideUp();
                            function review_sidebar_link_click(){     
                                var review_sidebar_link_click = setInterval(function(){
                                    // $('.sidebar.sidebar-left .filter-block').toggleClass('isActive');
                                    // $('.sidebar-header #sub-toggle').removeClass("isActive");
                                    if(!$('.sidebar.sidebar-left .filter-block').hasClass('isActive')){
                                        setTimeout(function () {
                                            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height(jQuery(".sidebar-header #sub-toggle").closest(".elementor-widget-heading").outerHeight());
                                            $('.sidebar-header #sub-toggle').addClass("isActive");
                                            $('.sidebar.sidebar-left .filter-block').addClass('isActive');
                                        },400);
                                        }
                                    else{
                                        setTimeout(function () {
                                            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height("auto");
                                            $('.sidebar-header #sub-toggle').removeClass("isActive");
                                            $('.sidebar.sidebar-left .filter-block').removeClass('isActive');
                                        },400);
                                    }
                                },500);
                                setTimeout(function( ) {
                                    clearInterval( review_sidebar_link_click ); 
                                }, 3000);
                            };
                            review_sidebar_link_click();

                            jQuery('html,body').stop().animate({
                                scrollTop: (target.offset().top - 380)
                            }, 1500,'linear');
                        }
                        var noHashURL = window.location.href.replace(/#.*/, '');
                        window.history.replaceState('', '', noHashURL)
                        return false;
                    }
                });
            }
            
            else{
                jQuery('.elementor-element.sidebar.sidebar-left.review-page .sidebar-nav-review ul li a[href^="#"]:not([href=\\#])').on('click', function(e) {
                    e.preventDefault();
                    
                    var target = jQuery(this.hash);
                    target = target.length ? target : jQuery('[name=' + this.hash.substr(1) +']');
                    if (target.length) {
                        if(jQuery(window).width()>992){
                            if(jQuery("header").hasClass("fixed")){
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 140)
                                }, 1000,'linear');
                            }
                            else{
                                jQuery('html,body').stop().animate({
                                    /*reviews sticky sidebar desktop size*/
                                    scrollTop: (target.offset().top - 295)
                                }, 1000,'linear');
                            }
                        }
                        else{
                            $('.sidebar.sidebar-left .filter-block').slideUp();
                            function review_sidebar_link_click(){     
                                var review_sidebar_link_click = setInterval(function(){
                                    // $('.sidebar.sidebar-left .filter-block').toggleClass('isActive');
                                    // $('.sidebar-header #sub-toggle').removeClass("isActive");
                                    if(!$('.sidebar.sidebar-left .filter-block').hasClass('isActive')){
                                        setTimeout(function () {
                                            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height(jQuery(".sidebar-header #sub-toggle").closest(".elementor-widget-heading").outerHeight());
                                            $('.sidebar-header #sub-toggle').addClass("isActive");
                                            $('.sidebar.sidebar-left .filter-block').addClass('isActive');
                                        },400);
                                        }
                                    else{
                                        setTimeout(function () {
                                            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height("auto");
                                            $('.sidebar-header #sub-toggle').removeClass("isActive");
                                            $('.sidebar.sidebar-left .filter-block').removeClass('isActive');
                                        },400);
                                    }
                                },500);
                                setTimeout(function( ) {
                                    clearInterval( review_sidebar_link_click ); 
                                }, 3000);
                            };
                            review_sidebar_link_click();

                            if(jQuery("header").hasClass("fixed")){
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 165)
                                }, 1500,'linear');
                            }
                            else{
                                jQuery('html,body').stop().animate({
                                    scrollTop: (target.offset().top - 225)
                                }, 1500,'linear');
                            }
                        }
                        var noHashURL = window.location.href.replace(/#.*/, '');
                        window.history.replaceState('', '', noHashURL)
                        return false;
                    }
                    
                });
            }
        }
    });

    $('.sidebar-header #sub-toggle').click(function () {
        $(this).parents('.sidebar-header').toggleClass('isExpand');
        $('.sidebar-left .filter-block').slideToggle();
        $(this).toggleClass('isActive');
        if(!$(this).hasClass('isActive')){
            setTimeout(function () {
                jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height(jQuery(".sidebar-header #sub-toggle").closest(".elementor-widget-heading").outerHeight());
                $(this).addClass('isActive');
            },400);
        }
        else{
            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height("auto");
            $(this).removeClass('isActive');
        }
    });
    if(jQuery(".sidebar .filter-block").is(":hidden")){
        jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height(jQuery(".sidebar-header #sub-toggle").closest(".elementor-widget-heading").outerHeight());
    }
    else{
        jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height("auto");
    }

    $('.sidebar-header .toggle-filter-desk').click(function () {
        $(this).parents('.sidebar-header').toggleClass('isExpand');
        $('.sidebar-left .filter-block').slideToggle();
        $(this).toggleClass('isActive');
    });

    if($(window).width() < 767 && !jQuery('body').hasClass("review-page-body")) {
        $('.sidebar.sidebar-left .filter-block ul li a').click(function () {   
            $('.sidebar.sidebar-left .filter-block').slideUp();
            function review_sidebar_link_click(){     
                var review_sidebar_link_click = setInterval(function(){
                    // $('.sidebar.sidebar-left .filter-block').toggleClass('isActive');
                    // $('.sidebar-header #sub-toggle').removeClass("isActive");
                    if(!$('.sidebar.sidebar-left .filter-block').hasClass('isActive')){
                        setTimeout(function () {
                            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height(jQuery(".sidebar-header #sub-toggle").closest(".elementor-widget-heading").outerHeight());
                            $('.sidebar-header #sub-toggle').addClass("isActive");
                            $('.sidebar.sidebar-left .filter-block').addClass('isActive');
                        },400);
                        }
                    else{
                        setTimeout(function () {
                            jQuery(".elementor-element.sidebar.sidebar-left.review-page .elementor-inner-section").height("auto");
                            $('.sidebar-header #sub-toggle').removeClass("isActive");
                            $('.sidebar.sidebar-left .filter-block').removeClass('isActive');
                        },400);
                    }
                },500);
                setTimeout(function( ) {
                    clearInterval( review_sidebar_link_click ); 
                }, 3000);
            };
            review_sidebar_link_click();
        });
    }

    // add class in bar design in case of full width
    function bar_width_top_10(){     
        var bar_width_top_10 = setInterval(function(){
            jQuery(".top10-lander .content-right .card-block.cf .card-block-right .ratings-list .progresses span.bar").each(function(){
                if(jQuery(this).attr("data-percent")=="100"){
                    jQuery(this).addClass("full_width");
                }
                if(jQuery(this).attr("data-percent")=="10" || jQuery(this).attr("data-percent")=="20" || jQuery(this).attr("data-percent")=="30" || jQuery(this).attr("data-percent")=="40" || jQuery(this).attr("data-percent")=="50" || jQuery(this).attr("data-percent")=="60" || jQuery(this).attr("data-percent")=="70" || jQuery(this).attr("data-percent")=="80"){
                    jQuery(this).addClass("right_border");
                }
            });
        },1000);
        setTimeout(function( ) {
            clearInterval( bar_width_top_10 ); 
        }, 5000);
    }
    bar_width_top_10();

    if(jQuery(this).width() > 768){
        jQuery(".tax-kennisbank_cat .sidebar").height(jQuery(".tax-kennisbank_cat .library-page-section .content-right").outerHeight());
        jQuery(".single-kennisbank .banner-btm-info .left-sidebar").height(jQuery(".single-kennisbank .banner-btm-info .info-box-text").outerHeight());
        jQuery(".review-page-body .sidebar-left").height(jQuery(".review-page-body .elementor-section-wrap .review-main-content .text-right-block").outerHeight());
        jQuery(".elementor-section-wrap .review-main-content .review-right-add").height(jQuery(".review-page-body .elementor-section-wrap .review-main-content .text-right-block").outerHeight());
    }

    if ($(window).width() < 600) {
        // $('.blog-col').matchHeight({ remove: true });
        // $('.blog-block').matchHeight({ remove: true });
        // $('.blog-overview .blog-block .title').matchHeight({ remove: true });
        // $('.blog-overview-cat .blog-block .title').matchHeight({ remove: true });
        
    }

});



/* Script on scroll
---------------------------------*/

$(window).scroll(function(){
    var sticky = $('.header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) {
        sticky.addClass('fixed');
        var ad_mobile_height_px_for_top = jQuery(".ad-block-mobile .adsanity-inner").outerHeight()+(-1)+'px';
        if(jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile,.review-main-content .text-right-block .ad-block-mobile,.page-template-tmp-topten-brokers .ad-block-mobile").find(".adsanity-inner").find('img').length){
            var ad_mobile_height_px_for_top = jQuery(".ad-block-mobile .adsanity-inner img").outerHeight()+(-1)+'px';
        }
        jQuery(".logged-in.ad-block-mobile-present.single-kennisbank .header, .logged-in.ad-block-mobile-present.tax-kennisbank_cat .header").css({"top":"50px","margin-top":ad_mobile_height_px_for_top});
        jQuery(".logged-in.page-template-tmp-topten-brokers .header").css({"top":"0","margin-top":ad_mobile_height_px_for_top});
    }
    else {
        sticky.removeClass('fixed');
        var ad_mobile_height_px_for_top = jQuery(".ad-block-mobile .adsanity-inner").outerHeight()+(-1)+'px';
        if(jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile,.review-main-content .text-right-block .ad-block-mobile,.page-template-tmp-topten-brokers .ad-block-mobile").find(".adsanity-inner").find('img').length){
            var ad_mobile_height_px_for_top = jQuery(".ad-block-mobile .adsanity-inner img").outerHeight()+(-1)+'px';
        }
        jQuery(".logged-in.ad-block-mobile-present.single-kennisbank .header, .logged-in.ad-block-mobile-present.tax-kennisbank_cat .header,.logged-in.ad-block-mobile-present.page-template-tmp-topten-brokers .header").css({"top":"0","margin-top":ad_mobile_height_px_for_top});
    }
  
    
    
    
    /*var sticky2 = $('.page-template-tmp-cfd-brokers .sidebar-left'),
      scroll = $(window).scrollTop();
      
    if (scroll >= 100) sticky2.addClass('sticky-filter');
    else sticky2.removeClass('sticky-filter'); */
    
    
    if (jQuery(this).scrollTop() > 70) {
        jQuery('.sidebar.sidebar-left').addClass("sticky");
        if(jQuery(window).width() < 992){
            var review_ad_mobile_height_px = jQuery(".ad-block-mobile .adsanity-inner").outerHeight()+(-1)+'px';
            var kennisbank_sidebar_top_px = jQuery(".ad-block-mobile .adsanity-inner").outerHeight()+(-1)+'px';

            if(jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile,.review-main-content .text-right-block .ad-block-mobile,.page-template-tmp-topten-brokers .ad-block-mobile").find(".adsanity-inner").find('img').length){
                var review_ad_mobile_height_px = jQuery(".ad-block-mobile .adsanity-inner img").outerHeight()+(-1)+'px';
            }
            
            var reivew_header = jQuery(".elementor-element.sidebar.sidebar-left.review-page,.tax-kennisbank_cat .library-page-section .sidebar,.page-template-tmp-topten-brokers .lander-left .sidebar");
            reivew_header.attr('style', "margin-top :"+review_ad_mobile_height_px);
            
        }
    } else {
        jQuery('.sidebar.sidebar-left').removeClass("sticky");
        if(jQuery(window).width() < 992){
            // var review_ad_mobile_height_px = jQuery(".ad-block-mobile .adsanity-inner").outerHeight()+'px';
            
            var reivew_header = jQuery(".elementor-element.sidebar.sidebar-left.review-page,.tax-kennisbank_cat .library-page-section .sidebar,.page-template-tmp-topten-brokers .lander-left .sidebar");
            reivew_header.attr('style', "margin-top :"+"-80px");
        }
    }

    // add class for adsinity plugin horizontal
    jQuery(".single-kennisbank .banner-btm-info .info-box-text,.elementor-section-wrap .review-main-content .text-right-block .ad-300x250,.elementor-section-wrap .review-main-content .text-right-block .ad-336x280").find(".adsanity-inner").each(function(){
        jQuery(this).parent().addClass("adsanity-parent-horizontal");
        if(jQuery(this).find('img').length){
            jQuery(this).parent().addClass("banner-w-img");
            jQuery(".elementor-section-wrap .review-main-content .text-right-block .ad-block-mobile .banner-w-img").removeClass("banner-w-img");
            if(jQuery(window).width() < 767){
                var mobile_square_banner = jQuery(".single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-300x250.banner-w-img,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-300x250.banner-w-img,.single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-336x280.banner-w-img,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-336x280.banner-w-img");
                mobile_square_banner.find(".adsanity-inner").height("auto");
                mobile_square_banner.find(".adsanity-inner").attr('style', "height :"+"auto"+";"+"max-height:"+"unset");
                var mobile_square_banner_height = mobile_square_banner.find(".adsanity-inner").outerHeight()+40;
                var mobile_banner_height_w_img = setInterval(function(){
                    
                    mobile_square_banner.find(".adsanity-inner").attr('style', "height :"+mobile_square_banner_height+"px"+";"+"max-height:"+mobile_square_banner_height+"px");
                    mobile_square_banner.attr('style', "height :"+mobile_square_banner_height+"px"+";"+"max-height:"+mobile_square_banner_height+"px"+';' +"min-width: "+jQuery(window).width()+ 'px;');
                },100);
                setTimeout(function( ) {
                    clearInterval( mobile_banner_height_w_img ); 
                }, 2000);
            }
        }
        else{
            if(jQuery(window).width() < 767){
                // adsinity mobile height
                if(jQuery(this).find("iframe").length){
                    var mobile_square_banner = jQuery(this).find("iframe").height()+40;
                }
                else{
                    var mobile_square_banner = jQuery(this).find("a").height()+40;
                }
                var mobile_banner_height = setInterval(function(){
                    jQuery(".single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-300x250,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-300x250,.single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-336x280,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-336x280").each(function(){
                        jQuery(this).height(mobile_square_banner);
                        jQuery(this).attr('style', jQuery(this).attr('style') + ';' + "max-height :"+mobile_square_banner +'px'+ ';' +"min-width: "+jQuery(window).width()+ 'px;');
                        
                    });
                },100);
                setTimeout(function( ) {
                    clearInterval( mobile_banner_height ); 
                }, 2000);
            }
        }
    });

    // text popup bottom overlap issue
    var margin_from_popup = setInterval(function(){
        if(jQuery(".wisepops-popup").length){   
            var elem_wisepopup = document.querySelector(".wisepops-popup");
            var elem_wisepopup_style = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("opacity");
            var elem_wisepopup_style1 = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("transform");
            if (elem_wisepopup_style === "1" && elem_wisepopup_style1==="matrix(1, 0, 0, 1, 0, 0)") {
                jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});
                jQuery(".floating-box-design .btn-green").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()-25});

                if(jQuery(".single-kennisbank .floating-box-design").outerHeight()>0){
                    jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()+jQuery(".single-kennisbank .floating-box-design").outerHeight()});
                    jQuery(".single-kennisbank .floating-box-design").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});
                }
            }
            else{
                jQuery("footer.site-footer>.container").css({"margin-bottom":"0"});
                jQuery(".floating-box-design .btn-green").css({"margin-bottom":0});
            }

            if(jQuery(window).width() <768){
                var elem_wisepopup = document.querySelector(".wisepops-popup");
                var elem_wisepopup_style = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("opacity");
                var elem_wisepopup_style1 = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("transform");
                if (elem_wisepopup_style === "1" && elem_wisepopup_style1==="matrix(1, 0, 0, 1, 0, 0)") {
                    jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()+jQuery(".single-brokers .main_bottom_bar").outerHeight()});
                    jQuery(".single-brokers .main_bottom_bar").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});

                    if(jQuery(".single-kennisbank .floating-box-design").outerHeight()>0){
                        jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()+jQuery(".single-kennisbank .floating-box-design").outerHeight(),"padding-bottom":"20px"});
                        jQuery(".single-kennisbank .floating-box-design").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});
                    }
                }
                else{
                    jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".single-brokers .main_bottom_bar").outerHeight()});
                    jQuery(".single-brokers .main_bottom_bar").css({"margin-bottom":"0"});
                
                    if(jQuery(".single-kennisbank .floating-box-design").outerHeight()>0){
                        jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".single-kennisbank .floating-box-design").outerHeight()});
                        jQuery(".single-kennisbank .floating-box-design").css({"margin-bottom":"0"});
                    }
                }
            }
        }
        else {
            if(jQuery(window).width() <768){
                if(jQuery(".single-kennisbank .floating-box-design").outerHeight()>0){
                    jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".single-kennisbank .floating-box-design").outerHeight()});
                    jQuery(".single-kennisbank .floating-box-design").css({"margin-bottom":"0"});
                }
                if(jQuery(".blog-details .floating-box-design").outerHeight()>0){
                    jQuery(".blog-details .site-footer>.container").css({"padding-bottom":jQuery(".blog-details .floating-box-design").outerHeight()});
                }
            }
            else{
                jQuery(".single-kennisbank footer.site-footer>.container").css({"margin-bottom":"0","padding-bottom":"0"});
                jQuery(".single-kennisbank .floating-box-design").css({"margin-bottom":"0"});
                jQuery(".blog-details .site-footer>.container").css({"margin-bottom":"0","padding-bottom":"0"});
            }
        }
    },2000)
    setTimeout(function( ) {
        clearInterval( margin_from_popup ); 
    }, 8000);
});


/* Script on resize
---------------------------------*/
$(window).resize(function () {   

    // hide right side banner if not present
    if(jQuery(".elementor-section-wrap .review-main-content .review-right-add").find(".elementor-text-editor").is(':empty')){
        jQuery(".elementor-section-wrap .review-main-content .review-right-add").attr('style', jQuery(".elementor-section-wrap .review-main-content .review-right-add").attr('style') + ';' +"display:"+"none !important");
        if(jQuery(window).width() > 1650){
            jQuery(".elementor-section-wrap .review-main-content .text-right-block").attr('style', jQuery(".elementor-section-wrap .review-main-content .text-right-block").attr('style') + ';' +"width:"+"81.5% !important");
        }
    }
    if(jQuery(".elementor-section-wrap .review-main-content .review-right-add").find(".elementor-element").hasClass('elementor-hidden-desktop')){
        jQuery(".elementor-section-wrap .review-main-content .review-right-add").attr('style', jQuery(".elementor-section-wrap .review-main-content .review-right-add").attr('style') + ';' +"display:"+"none !important");
        if(jQuery(window).width() > 1650){
            jQuery(".elementor-section-wrap .review-main-content .text-right-block").attr('style', jQuery(".elementor-section-wrap .review-main-content .text-right-block").attr('style') + ';' +"width:"+"81.5% !important");
        }
    }

    // mobile slider full width in review page
    if(jQuery(window).width() < 767){
        jQuery(".review-slider .elementor-widget-image-carousel").css({"min-width":jQuery(window).width(),"height":jQuery(".review-slider .elementor-image-carousel-wrapper").outerHeight()*1.2});
    }
    if(jQuery(window).width() > 768){
        jQuery(".review-slider .elementor-widget-image-carousel").css({"min-width":"auto","height":"auto"});
    }

    // kennisbank mobile ad height
    var ad_mobile_height = jQuery(".ad-block-mobile .adsanity-inner,.review-main-content .text-right-block .ad-block-mobile .adsanity-inner").parent().outerHeight();
    if(jQuery(window).width() < 992){
        var ad_mobile_height_px = jQuery(".ad-block-mobile .adsanity-inner").outerHeight()+'px';
        var ad_mobile_height_px_for_top = jQuery(".ad-block-mobile .adsanity-inner").outerHeight()+(-1)+'px';
        if(jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile,.review-main-content .text-right-block .ad-block-mobile,.page-template-tmp-topten-brokers .ad-block-mobile").find(".adsanity-inner").find('img').length){
            var ad_mobile_height_px = jQuery(".ad-block-mobile .adsanity-inner img").outerHeight()+'px';
            var ad_mobile_height_px_for_top = jQuery(".ad-block-mobile .adsanity-inner img").outerHeight()+(-1)+'px';
            var adsanity_inner_w_img = jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile .adsanity-inner,.review-main-content .text-right-block .ad-block-mobile .adsanity-inner,.page-template-tmp-topten-brokers .ad-block-mobile .adsanity-inner");
            adsanity_inner_w_img.attr('style', adsanity_inner_w_img.attr('style') + ';' +  'height :'+ad_mobile_height_px);
        }
        var adsanity_inner_w_img = jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile .adsanity-inner,.review-main-content .text-right-block .ad-block-mobile .adsanity-inner,.page-template-tmp-topten-brokers .ad-block-mobile .adsanity-inner");
        adsanity_inner_w_img.attr('style', adsanity_inner_w_img.attr('style') + ';' +  'height :'+ad_mobile_height_px);
        
        var ad_block_mobile = jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile,.review-main-content .text-right-block .ad-block-mobile,.page-template-tmp-topten-brokers .ad-block-mobile");
        ad_block_mobile.attr('style', ad_block_mobile.attr('style') + ';' +  'height :'+ad_mobile_height_px);
        
        var kennisbank_header = jQuery(".ad-block-mobile-present.single-kennisbank .header, .ad-block-mobile-present.tax-kennisbank_cat .header,.review-page-body .header,.ad-block-mobile-present.page-template-tmp-topten-brokers .ad-block-mobile");
        kennisbank_header.attr('style', "margin-top :"+ad_mobile_height_px_for_top);
        
        var kennisbank_header_fixed = jQuery(".ad-block-mobile-present.single-kennisbank .header.fixed, .ad-block-mobile-present.tax-kennisbank_cat .header.fixed,.review-page-body .header.fixed,.ad-block-mobile-present.page-template-tmp-topten-brokers .ad-block-mobile .header.fixed");
        kennisbank_header_fixed.attr('style', "top :"+ad_mobile_height_px_for_top);
    
        if (jQuery(this).scrollTop() > 70) {
            jQuery('.sidebar.sidebar-left').addClass("sticky");
            if(jQuery(window).width() < 992){
                var review_ad_mobile_height_px = jQuery(".ad-block-mobile .adsanity-inner").outerHeight()+(-1)+'px';
                
                var reivew_header = jQuery(".elementor-element.sidebar.sidebar-left.review-page,.tax-kennisbank_cat .library-page-section .sidebar,.page-template-tmp-topten-brokers .lander-left .sidebar");
                reivew_header.attr('style', "margin-top :"+ad_mobile_height_px_for_top);
            }
        } else {
            jQuery('.sidebar.sidebar-left').removeClass("sticky");
            if(jQuery(window).width() < 992){
                // var review_ad_mobile_height_px = jQuery(".ad-block-mobile .adsanity-inner").outerHeight()+'px';
                
                var reivew_header = jQuery(".elementor-element.sidebar.sidebar-left.review-page,.tax-kennisbank_cat .library-page-section .sidebar,.page-template-tmp-topten-brokers .lander-left .sidebar");
                reivew_header.attr('style', "margin-top :"+"-80px");
            }
        }
    
    }
    if(jQuery(window).width() > 992){
        var ad_mobile_height_px = jQuery(".ad-block-mobile .adsanity-inner").outerHeight()+'px';
        if(jQuery(".ad-block-mobile").is(":hidden")){
            var ad_mobile_height_px = 0;
            var ad_mobile_height_px_for_top = 0;
        }
        if(jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile,.review-main-content .text-right-block .ad-block-mobile,.page-template-tmp-topten-brokers .ad-block-mobile").find(".adsanity-inner").find('img').length){
            var ad_mobile_height_px = jQuery(".ad-block-mobile .adsanity-inner img").outerHeight()+'px';
            if(jQuery(".ad-block-mobile").is(":hidden")){
                var ad_mobile_height_px = 0;
                var ad_mobile_height_px_for_top = 0;
            }
            var adsanity_inner_w_img = jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile .adsanity-inner,.review-main-content .text-right-block .ad-block-mobile .adsanity-inner,.page-template-tmp-topten-brokers .adsanity-inner");
            adsanity_inner_w_img.attr('style', adsanity_inner_w_img.attr('style') + ';' +  'height :'+ad_mobile_height_px);
        }
        var adsanity_inner_w_img = jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile .adsanity-inner,.review-main-content .text-right-block .ad-block-mobile .adsanity-inner,.page-template-tmp-topten-brokers .ad-block-mobile");
        adsanity_inner_w_img.attr('style', adsanity_inner_w_img.attr('style') + ';' +  'height :'+ad_mobile_height_px);
        
        var ad_block_mobile = jQuery(".single-kennisbank .ad-block-mobile, .tax-kennisbank_cat .ad-block-mobile,.review-main-content .text-right-block .ad-block-mobile,.page-template-tmp-topten-brokers .ad-block-mobile");
        ad_block_mobile.attr('style', ad_block_mobile.attr('style') + ';' +  'height :'+ad_mobile_height_px);
        
        var kennisbank_header = jQuery(".ad-block-mobile-present.single-kennisbank .header, .ad-block-mobile-present.tax-kennisbank_cat .header,.review-page-body .header,.ad-block-mobile-present.page-template-tmp-topten-brokers .header");
        kennisbank_header.attr('style', "margin-top :"+ad_mobile_height_px_for_top);
        
        var kennisbank_header_fixed = jQuery(".ad-block-mobile-present.single-kennisbank .header.fixed, .ad-block-mobile-present.tax-kennisbank_cat .header.fixed,.review-page-body .header.fixed,.ad-block-mobile-present.page-template-tmp-topten-brokers .ad-block-mobile .header.fixed");
        kennisbank_header_fixed.attr('style', "top :"+ad_mobile_height_px_for_top);

    }


    // add class for adsinity plugin horizontal
    jQuery(".single-kennisbank .banner-btm-info .info-box-text,.elementor-section-wrap .review-main-content .text-right-block .ad-300x250,.elementor-section-wrap .review-main-content .text-right-block .ad-336x280").find(".adsanity-inner").each(function(){
        jQuery(this).parent().addClass("adsanity-parent-horizontal");
        if(jQuery(this).find('img').length){
            jQuery(this).parent().addClass("banner-w-img");
            jQuery(".elementor-section-wrap .review-main-content .text-right-block .ad-block-mobile .banner-w-img").removeClass("banner-w-img");
            if(jQuery(window).width() < 767){
                var mobile_square_banner = jQuery(".single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-300x250.banner-w-img,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-300x250.banner-w-img,.single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-336x280.banner-w-img,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-336x280.banner-w-img");
                mobile_square_banner.find(".adsanity-inner").height("auto");
                mobile_square_banner.find(".adsanity-inner").attr('style', "height :"+"auto"+";"+"max-height:"+"unset");
                var mobile_square_banner_height = mobile_square_banner.find(".adsanity-inner").outerHeight()+40;
                var mobile_banner_height_w_img = setInterval(function(){
                    
                    mobile_square_banner.find(".adsanity-inner").attr('style', "height :"+mobile_square_banner_height+"px"+";"+"max-height:"+mobile_square_banner_height+"px");
                    mobile_square_banner.attr('style', "height :"+mobile_square_banner_height+"px"+";"+"max-height:"+mobile_square_banner_height+"px"+';' +"min-width: "+jQuery(window).width()+ 'px;');
                },100);
                setTimeout(function( ) {
                    clearInterval( mobile_banner_height_w_img ); 
                }, 2000);
            }
        }
        else{
            if(jQuery(window).width() < 767){
                // adsinity mobile height
                if(jQuery(this).find("iframe").length){
                    var mobile_square_banner = jQuery(this).find("iframe").height()+40;
                }
                else{
                    var mobile_square_banner = jQuery(this).find("a").height()+40;
                }
                var mobile_banner_height = setInterval(function(){
                    jQuery(".single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-300x250,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-300x250,.single-kennisbank .banner-btm-info .info-box-text .adsanity-parent-horizontal.ad-336x280,.elementor-section-wrap .review-main-content .text-right-block .adsanity-parent-horizontal.ad-336x280").each(function(){
                        jQuery(this).height(mobile_square_banner);
                        jQuery(this).attr('style', jQuery(this).attr('style') + ';' + "max-height :"+mobile_square_banner +'px'+ ';' +"min-width: "+jQuery(window).width()+ 'px;');
                        
                    });
                },100);
                setTimeout(function( ) {
                    clearInterval( mobile_banner_height ); 
                }, 2000);
            }
        }
    });

    

    var equal_height_interval_resize = setInterval(function(){
        equalheight('.point-carousel-wrapper .slick-slide');
        equalheight('.center-slick .slide-info .spcl-img');
        equalheight('.center-slick .slide-info');
        equalheight('.equal-height');
        // equalheight('.blog-col');
        // equalheight('.blog-block');
        equalheight('.page-template-tmp-library-main .library_themes.features_wrapper ul li');
        equalheight('.page-template-tmp-library-main .library_themes.themes_wrapper ul li');
        equalheight(' .slick-list .blog-block');
        equalheight ('.blog-overview .blog-block');
        equalheight ('.blog-overview .blog-block .title');
        equalheight ('.blog-overview-cat .blog-block');
        equalheight ('.blog-overview-cat .blog-block .title');
        equalheight ('.home .blog-block .title');
        equalheight ('.home .blog-block .content-block > p');
        equalheight ('.rel-blog-wrapper .slick-list .blog-block');
        equalheight ('.rel-blog-wrapper .blog-block .title');
        equalheight ('.rel-blog-wrapper .blog-block .content-block > p');
        equalheight ('.single-kennisbank .point-carousel-section .slick-slide .single-block');
        equalHeight (jQuery('.single-kennisbank .point-carousel-section .single-block .content-block h4'));
        equalheight ('.page-template-tmp-topten-brokers .client-logo-section .logo-slider .single-block p');
        if ($(window).width() > 767) {
            equalheight(".page-template-tmp-home .point-carousel-wrapper .point-carousel .slick-slide .single-block");
        }    

        equalHeight (jQuery('.slick-list .blog-block'));
        equalHeight (jQuery('.blog-overview .blog-block'));
        equalHeight (jQuery('.blog-overview .blog-block .title'));
        equalHeight (jQuery('.blog-overview .blog-block .content-block > p'));
        equalHeight (jQuery('.blog-overview-cat .blog-block'));
        equalHeight (jQuery('.blog-block .content-block p'));
        equalHeight (jQuery('.blog-overview-cat .blog-block .title'));
        equalHeight (jQuery('.home .blog-block .title'));
        equalHeight (jQuery('.home .blog-block .content-block > p'));
        equalHeight (jQuery('.rel-blog-wrapper .slick-list .blog-block'));
        equalHeight (jQuery('.rel-blog-wrapper .blog-block .title'));
        equalHeight (jQuery('.rel-blog-wrapper .blog-block .content-block > p'));
        equalHeight (jQuery('.single-kennisbank .point-carousel-section .slick-slide .single-block')); 
        equalHeight (jQuery('.single-kennisbank .point-carousel-section .single-block .content-block h4'));
    },2000)
    setTimeout(function( ) {
        clearInterval( equal_height_interval_resize ); 
    }, 8000);

    setTimeout(function(){
        equalheight_compare();        
    },200);

    setTimeout(function () {
        equalheight ('.rel-blog-wrapper .slick-list .blog-block');
        equalheight ('.rel-blog-wrapper .blog-block .title');
        equalheight ('.rel-blog-wrapper .blog-block .content-block > p');
        if ($(window).width() > 767) {
            equalheight(".page-template-tmp-home .point-carousel-wrapper .point-carousel .slick-slide .single-block");
        }    
    },200);

    // text popup bottom overlap issue 
    if(jQuery(".wisepops-popup").length){   
        var elem_wisepopup = document.querySelector(".wisepops-popup");
        var elem_wisepopup_style = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("opacity");
        var elem_wisepopup_style1 = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("transform");
        if (elem_wisepopup_style === "1" && elem_wisepopup_style1==="matrix(1, 0, 0, 1, 0, 0)") {
            jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});
            jQuery(".floating-box-design .btn-green").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()-25});

            if(jQuery(".single-kennisbank .floating-box-design").outerHeight()>0){
                jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()+jQuery(".single-kennisbank .floating-box-design").outerHeight()});
                jQuery(".single-kennisbank .floating-box-design").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});
            }
        }
        else{
            jQuery("footer.site-footer>.container").css({"margin-bottom":"0"});
            jQuery(".floating-box-design .btn-green").css({"margin-bottom":0});
        }

        if(jQuery(window).width() <768){
            var elem_wisepopup = document.querySelector(".wisepops-popup");
            var elem_wisepopup_style = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("opacity");
            var elem_wisepopup_style1 = window.getComputedStyle(elem_wisepopup, null).getPropertyValue("transform");
            if (elem_wisepopup_style === "1" && elem_wisepopup_style1==="matrix(1, 0, 0, 1, 0, 0)") {
                jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()+jQuery(".single-brokers .main_bottom_bar").outerHeight()});
                jQuery(".single-brokers .main_bottom_bar").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});

                if(jQuery(".single-kennisbank .floating-box-design").outerHeight()>0){
                    jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()+jQuery(".single-kennisbank .floating-box-design").outerHeight(),"padding-bottom":"20px"});
                    jQuery(".single-kennisbank .floating-box-design").css({"margin-bottom":jQuery(".wisepops-popup").outerHeight()});
                }
            }
            else{
                jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".single-brokers .main_bottom_bar").outerHeight()});
                jQuery(".single-brokers .main_bottom_bar").css({"margin-bottom":"0"});
            
                if(jQuery(".single-kennisbank .floating-box-design").outerHeight()>0){
                    jQuery("footer.site-footer>.container").css({"margin-bottom":jQuery(".single-kennisbank .floating-box-design").outerHeight()});
                    jQuery(".single-kennisbank .floating-box-design").css({"margin-bottom":"0"});
                }
            }
        }
    }

    if(jQuery(this).width() > 768){
        jQuery(".tax-kennisbank_cat .sidebar").height(jQuery(".tax-kennisbank_cat .library-page-section .content-right").outerHeight());
        jQuery(".single-kennisbank .banner-btm-info .left-sidebar").height(jQuery(".single-kennisbank .banner-btm-info .info-box-text").outerHeight());
        jQuery(".review-page-body .sidebar-left").height(jQuery(".review-page-body .elementor-section-wrap .review-main-content .text-right-block").outerHeight());
        jQuery(".elementor-section-wrap .review-main-content .review-right-add").height(jQuery(".review-page-body .elementor-section-wrap .review-main-content .text-right-block").outerHeight());
    }

    

    if ($(window).width() < 600) {
        // $('.blog-col').matchHeight({ remove: true });
        // $('.blog-block').matchHeight({ remove: true });
        // $('.blog-overview .blog-block .title').matchHeight({ remove: true });
        //  $('.blog-overview-cat .blog-block .title').matchHeight({ remove: true });   
    }
});


// temp
/*  jQuery('a.page-numbers').click(function(){
        console.log('equal height called');
                  equalheight ('.blog-overview .blog-block');
                  equalheight ('.blog-overview .blog-block .title');
                });*/
//

/* Script all functions
----------------------------------*/
// equal height testimonials block
equalheight = function (container) {

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

function equalHeight(group) {
    tallest = 0;
    group.each(function() {
        thisHeight = jQuery(this).height();
        if(thisHeight > tallest) {
          tallest = thisHeight;
        }
    });
    group.height("auto");
    group.height(tallest);
}
equalheight_compare = function () {
    $('.pricing-plan').each(function () {
        $(this).find('.plan-features li').each(function () {
            var index = $(this).index();
            //console.log('index: ' + index);

            var index_height = $(this).outerHeight();

            $(this).addClass('index' + index);

            var i_height = $('li.index' + index).map(function () {
                    return $(this).outerHeight();
                }).get(),

                maxHeight = Math.max.apply(null, i_height);

           // console.log('index' + index + 'maxHeight:-' + maxHeight);

            $('li.index' + index).css('height', maxHeight);
        });
    });
}




/* home slider css add-remove */
jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 1024) {
      jQuery('.home .point-carousel-section').removeClass('broker-slide-desk');
    } else if (ww >= 401) {
      jQuery('.home .point-carousel-section').addClass('broker-slide-desk');
    };
  };
  jQuery(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

jQuery(".review-main-content").closest("body").addClass("review-page-body");

// js end

/*17-08-21*/
/*sticky review menu*/
$(window).scroll(function() { 
    if ($(window).width() >= 768) {
        var scroll = $(window).scrollTop();
         //console.log(scroll);
        if (scroll >= 730) { 
            //console.log('a');
            $(".menu-stickyblock").addClass("sticky-innermenu");
        } else {
            //console.log('a');
            $(".menu-stickyblock").removeClass("sticky-innermenu");
        }
    }
    if ($(window).width() < 768) {
        var scroll = $(window).scrollTop();
         //console.log(scroll);
        if (scroll >= 1750) {   
            //console.log('a');
            $(".menu-stickyblock").addClass("sticky-innermenu1");
        } else {
            //console.log('a');
            $(".menu-stickyblock").removeClass("sticky-innermenu1");
        }  
    }
});

/*review detail slider on menu*/

if ($(window).width() >= 768 && $(window).width() < 1650) { 
    $('.menu-stickyblock ul.menu').slick({
        arrows: true,
        dots: false,
        slidesToShow: 9,
        infinite: true,
        swipe: true,
        slidesToScroll: 1,             
        responsive: [
            {
                breakpoint: 1650,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    // item:4,
                    slidesToShow: 3,
                    slidesToScroll: 1, 
                    infinite: false          
                }
            },
            {
                breakpoint: 768,
                settings: {
                    // item:4,
                    centerMode: true,
                    centerPadding: '80px',
                    focusOnSelect: true,
                    slidesToShow: 1, 
                    slidesToScroll: 1, 
                    infinite: true 
                }
            },
            {
                breakpoint: 480,
                settings: {
                    // item:4,
                    centerMode: true,
                    centerPadding: '90px',
                    focusOnSelect: true,
                    slidesToShow: 1, 
                    slidesToScroll: 1,  
                    infinite: true     
                }
            }

        ]
    });

}


if ($(window).width() >= 768) {
    
    // Cache selectors
    var lastId,
        topMenu = $(".menu-stickyblock ul.menu"),
        topMenuHeight = topMenu.outerHeight()+140,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

    menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 1500);
      e.preventDefault();
        return false; 
    });

    $(window).scroll(function(){

       var fromTop = $(this).scrollTop()+topMenuHeight;

       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });

       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";

       if (lastId !== id) {
           lastId = id;

           menuItems
             .parent().removeClass("active")
             .end().filter("[href='#"+id+"']").parent().addClass("active");
       }                   
    });
}
 

if ($(window).width() < 768 ) {
    var lastId,
        topMenu = $(".menu-stickyblock ul.menu"),
        topMenuHeight = topMenu.outerHeight()+90,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

    menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 1500);
      e.preventDefault();
        return false; 
    });

    $(window).scroll(function(){

       var fromTop = $(this).scrollTop()+topMenuHeight;

       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });

       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";

       if (lastId !== id) {
           lastId = id;

           menuItems
             .parent().removeClass("active")
             .end().filter("[href='#"+id+"']").parent().addClass("active");
       }                   
    });
}



/*
var lastId1,
    topMenu1 = $(".sidebar-left-class.mobile-showing .sidebar-nav-review ul"),
    topMenuHeight1 = topMenu1.outerHeight()-170,
    // All list items
    menuItems1 = topMenu1.find("a"),
    // Anchors corresponding to menu items
    scrollItems1 = menuItems1.map(function(){
      var item1 = $($(this).attr("href"));
      if (item1.length) { return item1; }

    }); 

    menuItems1.click(function(e){

  e.preventDefault();
  var href1 = $(this).attr("href"),
      offsetTop = href1 === "#" ? 0 : $(href1).offset().top-(topMenuHeight1+50);
      // console.log("topmenu-height",topMenuHeight1);
    //   console.log("offset-top",offsetTop); 
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1500);
    return false;  
});
*/


/*leftsidebar*/
/*var lastId1,
    topMenu1 = $(".sidebar-left-class.mobile-showing .sidebar-nav-review ul"),
    topMenuHeight1 = topMenu1.outerHeight()+80,
    // All list items
    menuItems1 = topMenu1.find("a"),
    // Anchors corresponding to menu items
    scrollItems1 = menuItems1.map(function(){
      var item1 = $($(this).attr("href"));
      if (item1.length) { return item1; }
  
    }); 

menuItems1.click(function(e){ 

  e.preventDefault();  
  var href1 = $(this).attr("href"), 
      offsetTop = href1 === "#" ? 0 : $(href1).offset().top-(topMenuHeight1-0);
       //console.log("topmenu-height",topMenuHeight1);
       //console.log("offset-top",offsetTop);
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1500);
    return false;  
});*/
/*phase 3b start*/
$(document).ready(function () {
    $(".table-cont-title .elementor-heading-title").append("<span class='toggle-arrow'><i class='fa fa-chevron-down'></i></span>");
    
    $("span.toggle-arrow").click(function(e){
        $(this).toggleClass("open-togleinfo");
        $(".show-slide-info").slideToggle();
    });
}); 
/*phase 3b end*/

/* table list script(hub page) */

jQuery(document).ready(function () {
    if ($(window).width() < 768) {
        jQuery('.wc_list h5').on('click', function () {
            jQuery(this).parent('.wc_list').toggleClass('wc_list_dropdown');
        });
        // saxo bank point slider
        $('#broker-detail-slider.desk_slide').slick('unslick');
        
        // saxo bank load more benefit
        var size_li = $(".warrom-saxobank-section .repeat-blockbox").length;
        var x = 3;
        var def_show = 2;
        for (var xx = 0; xx <= def_show; xx++) {
            console.log("lopp=" + xx);
            jQuery('.warrom-saxobank-section .repeat-blockbox:eq(' + xx + ')').show();
        }
        $('#more_benefit').click(function () {
            x = (x + 3 <= size_li) ? x + 3 : size_li;
            $('.warrom-saxobank-section .repeat-blockbox:lt(' + x + ')').show();
            if(x = size_li){
                $(this).hide();
            }
        });
    
    }
    
    jQuery('.bb_wc_text_sec .wc_rm_trigger').on('click',function(){
            jQuery(this).toggleClass("bb_rm_toggle");
            jQuery(this).parent().prev().toggleClass("bb_text_more");
            if($(this).hasClass('bb_rm_toggle')){
                $(this).text("Lees minder");
            }
            else{
                $(this).text("Lees meer");
            }
        });

});

$(".sidebar-left-class.mobile-showing .sidebar-nav-review ul a[href^='#']").bind("click", function(ev) {
      ev.preventDefault();  
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 150
      }, 1000);
      return false;
    });

if ($(window).width() > 767){
$(".main-body a[href^='#']").bind("click", function(ev) {
  ev.preventDefault();  
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top - 130
  }, 1000);
  return false;
});
}

if ($(window).width() < 767){
   $(".main-body a[href^='#']").bind("click", function(ev) {
  ev.preventDefault();  
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top - 80
  }, 1000);
  return false;
});
 
}
if ($(window).width() > 767){
$(".info-box-text a[href^='#']").bind("click", function(ev) {
  ev.preventDefault();  
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top - 130
  }, 1000);
  return false;
});
}

if ($(window).width() < 767){
   $(".info-box-text a[href^='#']").bind("click", function(ev) {
  ev.preventDefault();  
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top - 80
  }, 1000);
  return false;
});
 
}
if ($(window).width() > 767){
$(".elementor-inner a[href^='#']").bind("click", function(ev) {
  ev.preventDefault();  
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top - 130
  }, 1000);
  return false;
});
}

if ($(window).width() < 767){
   $(".elementor-inner a[href^='#']").bind("click", function(ev) {
  ev.preventDefault();  
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top - 80
  }, 1000);
  return false;
});
 
}

// Single post sticky banner @np
$(document).ready(function () {
    $('.single-post .content-right .elementor-section ,.single-brokers .broker_single_main_content').each(function(){
        $(this).find('.adsanity-inner').parent().addClass('sp_horz_ad');
    });
    $( ".single-post .content-right .sp_horz_ad , .single-brokers .broker_single_main_content .sp_horz_ad" ).wrap( "<div class='sp_horz_ad_wrap'></div>" );

});


/*phase 3b start*/
$(document).ready(function () {
    $(".table-cont-title .elementor-heading-title").append("<span class='toggle-arrow'><i class='fa fa-chevron-down'></i></span>");
    
    $("span.toggle-arrow").click(function(e){
        $(this).toggleClass("open-togleinfo");
        $(".show-slide-info").slideToggle();
    });
}); 
/*phase 3b end*/