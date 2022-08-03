var $ = jQuery;

if (matchMedia('only screen and (max-width: 991px)').matches) {
    $('.voordelen_title, .nadelen_title').click(function() {
        $(this).toggleClass('close');
        $(this).next().toggle('slow');
    })
}

$('.demo_account_info .close_icon').click(function() {
    $('.demo_account_info').hide()
})



var owl = jQuery(".klanten_slider");
owl.owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: true,
    autoWidth: false,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    responsiveClass: true,
    stagePadding: 200,
    smartSpeed: 500,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0,
        },
        350: {
            items: 1,
            stagePadding: 0,
        },
        361: {
            items: 1,
            stagePadding: 0,
        },
        376: {
            items: 1,
            stagePadding: 0,
        },
        481: {
            items: 1,
            stagePadding: 0,

        },
        520: {
            items: 1,
            stagePadding: 0,
        },
        640: {
            items: 1,
            stagePadding: 0,
        },
        767: {
            items: 1,
            stagePadding: 140,
        },
        992: {
            items: 1,
            stagePadding: 140,
        },
        1651: {
            items: 1,
            stagePadding: 200
        }
    },
});



// fire the function when owl carousel changed
owl.on('changed.owl.carousel', function(event) {
    var currentIndex = event.item.index + 1;
    var prevIndex = event.item.index;
    var nextIndex = event.item.index + 2;
    owlClass(currentIndex, prevIndex, nextIndex);
});

function owlClass(currentIndex, prevIndex, nextIndex) {
    jQuery('.klanten_slider.owl-carousel .owl-item').removeClass('owlPrev owlNext');
    jQuery('.klanten_slider.owl-carousel .owl-item:nth-child(' + nextIndex + ')').addClass('owlNext');
    jQuery('.klanten_slider.owl-carousel .owl-item:nth-child(' + prevIndex + ')').addClass('owlPrev');
}
// default addClass owlNext on 2nd owl-item
jQuery('.klanten_slider.owl-carousel .owl-item.active').prev().addClass('owlPrev');
jQuery('.klanten_slider.owl-carousel .owl-item.active').next().addClass('owlNext');




// etoro Software slider
var owl2 = jQuery(".software_slider");
owl2.owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
});

// eenOrderPlaatsen slider


var owl3 = jQuery(".eenOrderPlaatsen_slider");
owl3.owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: true,
    autoWidth: false,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    responsiveClass: true,
    stagePadding: 200,
    smartSpeed: 500,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0,
        },
        350: {
            items: 1,
            stagePadding: 0,
        },
        361: {
            items: 1,
            stagePadding: 0,
        },
        376: {
            items: 1,
            stagePadding: 0,
        },
        481: {
            items: 1,
            stagePadding: 0,

        },
        520: {
            items: 1,
            stagePadding: 0,
        },
        640: {
            items: 1,
            stagePadding: 0,
        },
        767: {
            items: 1,
            stagePadding: 140,
        },
        992: {
            items: 1,
            stagePadding: 140,
        },
        1651: {
            items: 1,
            stagePadding: 200
        }

    },
});



// fire the function when owl carousel changed
owl3.on('changed.owl.carousel', function(event) {
    var currentIndex = event.item.index + 1;
    var prevIndex = event.item.index;
    var nextIndex = event.item.index + 2;
    owlClass3(currentIndex, prevIndex, nextIndex);
});

function owlClass3(currentIndex, prevIndex, nextIndex) {
    jQuery('.eenOrderPlaatsen_slider.owl-carousel .owl-item').removeClass('owlPrev owlNext');
    jQuery('.eenOrderPlaatsen_slider.owl-carousel .owl-item:nth-child(' + nextIndex + ')').addClass('owlNext');
    jQuery('.eenOrderPlaatsen_slider.owl-carousel .owl-item:nth-child(' + prevIndex + ')').addClass('owlPrev');
}
// default addClass owlNext on 2nd owl-item
jQuery('.eenOrderPlaatsen_slider.owl-carousel .owl-item.active').prev().addClass('owlPrev');
jQuery('.eenOrderPlaatsen_slider.owl-carousel .owl-item.active').next().addClass('owlNext');


// etoro mobieleApp slider
var owl4 = jQuery(".mobieleApp_slider");
owl4.owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: true,
    autoWidth: false,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    responsiveClass: true,
    stagePadding: 200,
    smartSpeed: 500,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0,
        },
        350: {
            items: 1,
            stagePadding: 0,
        },
        361: {
            items: 1,
            stagePadding: 0,
        },
        376: {
            items: 1,
            stagePadding: 0,
        },
        481: {
            items: 1,
            stagePadding: 0,

        },
        520: {
            items: 1,
            stagePadding: 0,
        },
        640: {
            items: 1,
            stagePadding: 0,
        },
        767: {
            items: 1,
            stagePadding: 200,
        },
        992: {
            items: 1,
            stagePadding: 140,
        },
        1651: {
            items: 1,
            stagePadding: 200
        }

    },
});



// fire the function when owl carousel changed
owl4.on('changed.owl.carousel', function(event) {
    var currentIndex = event.item.index + 1;
    var prevIndex = event.item.index;
    var nextIndex = event.item.index + 2;
    owlClass4(currentIndex, prevIndex, nextIndex);
});

function owlClass4(currentIndex, prevIndex, nextIndex) {
    jQuery('.mobieleApp_slider.owl-carousel .owl-item').removeClass('owlPrev owlNext');
    jQuery('.mobieleApp_slider.owl-carousel .owl-item:nth-child(' + nextIndex + ')').addClass('owlNext');
    jQuery('.mobieleApp_slider.owl-carousel .owl-item:nth-child(' + prevIndex + ')').addClass('owlPrev');
}
// default addClass owlNext on 2nd owl-item
jQuery('.mobieleApp_slider.owl-carousel .owl-item.active').prev().addClass('owlPrev');
jQuery('.mobieleApp_slider.owl-carousel .owl-item.active').next().addClass('owlNext');


// etoro MobieleApp Options slider
var owl5 = jQuery(".mobieleApp_options_slider");
owl5.owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
});


// analyses slider
var owl6 = jQuery(".analyses_slider");
owl6.owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: true,
    autoWidth: false,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    responsiveClass: true,
    stagePadding: 200,
    smartSpeed: 500,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0,
        },
        350: {
            items: 1,
            stagePadding: 0,
        },
        361: {
            items: 1,
            stagePadding: 0,
        },
        376: {
            items: 1,
            stagePadding: 0,
        },
        481: {
            items: 1,
            stagePadding: 0,

        },
        520: {
            items: 1,
            stagePadding: 0,
        },
        640: {
            items: 1,
            stagePadding: 0,
        },
        767: {
            items: 1,
            stagePadding: 140,
        },
        992: {
            items: 1,
            stagePadding: 140,
        },
        1651: {
            items: 1,
            stagePadding: 200
        }
    },
});



// fire the function when owl carousel changed
owl6.on('changed.owl.carousel', function(event) {
    var currentIndex = event.item.index + 1;
    var prevIndex = event.item.index;
    var nextIndex = event.item.index + 2;
    owlClass6(currentIndex, prevIndex, nextIndex);
});

function owlClass6(currentIndex, prevIndex, nextIndex) {
    jQuery('.analyses_slider.owl-carousel .owl-item').removeClass('owlPrev owlNext');
    jQuery('.analyses_slider.owl-carousel .owl-item:nth-child(' + nextIndex + ')').addClass('owlNext');
    jQuery('.analyses_slider.owl-carousel .owl-item:nth-child(' + prevIndex + ')').addClass('owlPrev');
}
// default addClass owlNext on 2nd owl-item
jQuery('.analyses_slider.owl-carousel .owl-item.active').prev().addClass('owlPrev');
jQuery('.analyses_slider.owl-carousel .owl-item.active').next().addClass('owlNext');



// Custom scrollbar js
jQuery(window).on("load", function() {
    if (matchMedia('only screen and (max-width: 991px)').matches) {
        jQuery.mCustomScrollbar.defaults.theme = "light-2"; //set "light-2" as the default theme
        jQuery(".demo-x").mCustomScrollbar({
            axis: "x",
            advanced: { autoExpandHorizontalScroll: true },
            callbacks: {
                whileScrolling: function() {
                    addEffect(this);
                }
            }
        });
    }
    jQuery.mCustomScrollbar.defaults.theme = "light-2"; //set "light-2" as the default theme

});

jQuery(document).ready(function() {
    jQuery(".account_type_slider_wrapper .demo-x").mCustomScrollbar({
        axis: "x",
        advanced: { autoExpandHorizontalScroll: true },
        callbacks: {
            whileScrolling: function() {
                addEffect(this);
            }
        }
    });
})

function addEffect(content) {
    let scrollPosition = content.mcs.leftPct;
    if (scrollPosition >= 1) {
        jQuery(content).addClass('leftShadow');
    } else {
        jQuery(content).removeClass('leftShadow');
    }
    if ((scrollPosition >= 99)) {
        jQuery(content).addClass('removeRightShadow')
    } else {
        jQuery(content).removeClass('removeRightShadow');
    }
}


// tabs function 
jQuery(function() {
    jQuery(".etoroSoftware_tab .tab_content").hide();
    jQuery(".etoroSoftware_tab ul.tabs li:first").addClass("active").show();
    jQuery(".etoroSoftware_tab .tab_content:first").show();
    jQuery(".etoroSoftware_tab ul.tabs li").click(function() {
        jQuery(".etoroSoftware_tab ul.tabs li").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".etoroSoftware_tab .tab_content").hide();
        var activeTab = jQuery(this).find("a").attr("href");
        jQuery(activeTab).fadeIn();
        return false;
    });
});



// analyses tab function 
jQuery(function() {
    // jQuery(".analyses_tab_wrapper .tab_content").hide();
    jQuery(".analyses_tab_wrapper ul.tabs li:first").addClass("active").show();
    jQuery('.inner_tab_content').hide();
    jQuery('.inner_tab_content:first').show();
    // jQuery(".analyses_tab_wrapper .tab_content:first").show();
    jQuery(".analyses_tab_wrapper ul.tabs li").click(function() {
        jQuery(".analyses_tab_wrapper ul.tabs li").removeClass("active");
        jQuery(this).addClass("active");
        // jQuery(".analyses_tab_wrapper .tab_content").hide();
        var activeTab = jQuery(this).find("a").attr("href");
        jQuery('.inner_tabs_select_option').removeClass('active');
        jQuery(`${activeTab} .inner_tabs_select_option`).addClass('active');
        // console.log(activeTab)
        // jQuery(activeTab).fadeIn();
        // jQuery(".analysesTab .inner_tab_content:first").show();
        // jQuery(".toolsTab .inner_tab_content:first").show();
        return false;
    });
});

// analyses inner tab function 
jQuery(function() {
    // jQuery(".analysesTab .inner_tab_content").hide();
    // jQuery(".analysesTab ul.inner_tabs li:first").addClass("active").show();
    // jQuery(".analysesTab .inner_tab_content:first").show();
    // jQuery(".analysesTab ul.inner_tabs li").click(function() {
    //     var activeTab = jQuery(this).find("a").attr("href");
    //     if (activeTab == "") {
    //         return false;
    //     } else {
    //         jQuery(".analysesTab ul.inner_tabs li").removeClass("active");
    //         jQuery(this).addClass("active");
    //         jQuery(".analysesTab .inner_tab_content").hide();


    //         jQuery(activeTab).fadeIn();
    //         return false;
    //     }
    // });
});


// analyses inner tab select function 
jQuery(function() {
    jQuery('.inner_tabs_select_option select').change(function() {
        let parent = jQuery(this).parent();
        let innerParent = jQuery(parent).parent().attr('id');
        jQuery('.inner_tabs_select_option').removeClass('active');

        jQuery(parent).addClass('active');
        let selectVal = jQuery(this).val();
        selectVal = "#" + selectVal;
        jQuery('.inner_tab_content').hide();
        jQuery(selectVal).show();

        jQuery(".analyses_tab_wrapper ul.tabs li").removeClass("active");
        if (innerParent == "analyses") {
            jQuery(".analyses_tab_wrapper ul.tabs li:first").addClass("active");
        } else if (innerParent == "tools") {
            jQuery(".analyses_tab_wrapper ul.tabs li:last").addClass("active");
        }
    })
})


// etoro strategieen Options slider
var owl7 = jQuery(".strategieen_options_slider");
owl7.owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
});



// etoro Account Open Plan slider

var owl8 = jQuery(".accountOpen_plan_slider");
owl8.owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: true,
    autoWidth: false,
    mouseDrag: true,
    touchDrag: true,
    dots: true,
    responsiveClass: true,
    stagePadding: 200,
    smartSpeed: 500,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0,
        },
        350: {
            items: 1,
            stagePadding: 0,
        },
        361: {
            items: 1,
            stagePadding: 0,
        },
        376: {
            items: 1,
            stagePadding: 0,
        },
        481: {
            items: 1,
            stagePadding: 0,

        },
        520: {
            items: 1,
            stagePadding: 0,
        },
        640: {
            items: 1,
            stagePadding: 0,
        },
        767: {
            items: 1,
            stagePadding: 140,
        },
        992: {
            items: 1,
            stagePadding: 140,
        },
        1651: {
            items: 1,
            stagePadding: 200
        }
    },
});





// fire the function when owl carousel changed
owl8.on('changed.owl.carousel', function(event) {
    var currentIndex = event.item.index + 1;
    var prevIndex = event.item.index;
    var nextIndex = event.item.index + 2;
    owlClass8(currentIndex, prevIndex, nextIndex);
});

function owlClass8(currentIndex, prevIndex, nextIndex) {
    jQuery('.accountOpen_plan_slider.owl-carousel .owl-item').removeClass('owlPrev owlNext');
    jQuery('.accountOpen_plan_slider.owl-carousel .owl-item:nth-child(' + nextIndex + ')').addClass('owlNext');
    jQuery('.accountOpen_plan_slider.owl-carousel .owl-item:nth-child(' + prevIndex + ')').addClass('owlPrev');
}
// default addClass owlNext on 2nd owl-item
jQuery('.accountOpen_plan_slider.owl-carousel .owl-item.active').prev().addClass('owlPrev');
jQuery('.accountOpen_plan_slider.owl-carousel .owl-item.active').next().addClass('owlNext');


var dotSpan = $('.accountOpen_plan_slider.owl-carousel .owl-dot span');
var planSliderActiveWidth = $('.accountOpen_plan_slider.owl-carousel .owl-item.active').width();
$('.accountOpen_plan_slider .owl-nav').css({
    "maxWidth": planSliderActiveWidth
});
for (let i = 0; i < dotSpan.length; i++) {
    dotSpan[i].textContent = i + 1;
}



// similar slider 
var owl9 = jQuery(".similiar_slider_inner");
owl9.owlCarousel({
    loop: true,
    margin: 0,
    items: 4,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
});


// Horizontal menubar slider
// similar slider 
var owl10 = jQuery(".horizontal_menuBar_slider");
owl10.owlCarousel({
    loop: false,
    margin: 0,
    items: 8,
    nav: true,
    dots: false,

    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            stagePadding: 80,
        },
        420: {
            items: 2,
        },
        576: {
            items: 3,
        },
        992: {
            items: 4,
        },
        1200: {
            items: 5,
        },
        1400: {
            items: 6,
        },
        1500: {
            items: 7,
        },
        1600: {
            items: 8,
        },
    },
});


jQuery('.owl-item')






// eenOrderPlaatsen_tabs_wrapper
if (matchMedia('only screen and (min-width: 768px)').matches) {
    jQuery(function() {
        jQuery(".eenOrderPlaatsen_content .eenOrderPlaatsenTab_content").hide();
        jQuery(".eenOrderPlaatsen_content ul.eenOrderPlaatsen_tabs li:first").addClass("active").show();
        jQuery(".eenOrderPlaatsen_content .eenOrderPlaatsenTab_content:first").show();
        jQuery(".eenOrderPlaatsen_content ul.eenOrderPlaatsen_tabs li").click(function() {
            jQuery(".eenOrderPlaatsen_content ul.eenOrderPlaatsen_tabs li").removeClass("active");
            jQuery(this).addClass("active");
            jQuery(".eenOrderPlaatsen_content .eenOrderPlaatsenTab_content").hide();
            var activeTab = jQuery(this).find("a").attr("href");
            jQuery(activeTab).fadeIn();
            return false;
        });
    });
}

// country available 
// jQuery(function() {
//     jQuery('.flag_box').click(function() {
//         jQuery('.flags .flag_box').removeClass('available');
//         jQuery(this).addClass('available');
//     })
// })


// toggle for Een order plaatsen
jQuery(function() {
    jQuery('#KoopOrder').show()
    jQuery('#verkoopOrder').hide()
    jQuery('.toggle_heading').click(function() {
        jQuery(this).toggleClass('active');
        jQuery(this).next().toggle();
    })
})


// deposite & withdraw info

jQuery(function() {
    jQuery('.depWith_work_device_left .device_select_option').click(function() {
        let parent = jQuery(this).parent();
        parent.toggleClass('active');
        jQuery(document).click(function(e) {
            if (jQuery(e.target).closest('.depWith_work_device_left').length != 0) return false;
            parent.removeClass('active')
        });
    })
})

jQuery(function() {
    jQuery('.depWith_work_device_right .device_select_option').click(function() {
        let parent = jQuery(this).parent();
        parent.toggleClass('active');
        jQuery(document).click(function(e) {
            if (jQuery(e.target).closest('.depWith_work_device_right').length != 0) return false;
            parent.removeClass('active')
        });
    })
})

jQuery(function() {
    jQuery('body').on('click', '.select_payment_option', function() {
        let parent = jQuery(this).parent();
        parent.toggleClass('active');
        jQuery(document).click(function(e) {
            if (jQuery(e.target).closest('.select_payment_option_wrapper').length != 0) {
                return false;
                parent.removeClass('active')
            }
        });
    })

    jQuery('.depWith_work_table_wrapper').hide();
    jQuery('.depWith_work_table_wrapper:first').show();
    jQuery('body').on('click', '.depWith_dropdown li', function() {
        let parent = jQuery(this).parent();
        let selectOption = parent.prev('.select_payment_option');
        let optionImgSrc = selectOption.find('.payment_option_img img');
        let optionText = selectOption.find('.payment_option_name');

        parent.children().removeClass('selected'); // Remove selected class for all li
        jQuery(this).addClass('selected'); // added selected class for li

        let thisImgSrc = jQuery(this).find('.payment_option_img img').attr('src');
        let thisTextValue = jQuery(this).find('.payment_option_name').text()
        optionText.text(thisTextValue)
        optionImgSrc.attr('src', thisImgSrc)

        selectOption.parent().removeClass('active');

        // table change js
        let paymentWrapper = jQuery(this).parents('.select_payment_option_wrapper').html();
        let dataTable = jQuery(this).attr('data-table');
        jQuery('.depWith_work_table_wrapper').hide();
        jQuery(`.depWith_work_table_wrapper.${dataTable}`).show();
        jQuery(`.depWith_work_table_wrapper.${dataTable}`).find('.select_payment_option_wrapper').html(paymentWrapper);
    })
});



// eToro educatie tabs
jQuery(function() {
    jQuery(".educatie_tab .tab_content").hide();
    jQuery(".educatie_tab ul.tabs li:first").addClass("active").show();
    jQuery(".educatie_tab .tab_content:first").show();
    jQuery(".educatie_tab ul.tabs li").click(function() {
        jQuery(".educatie_tab ul.tabs li").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".educatie_tab .tab_content").hide();
        var activeTab = jQuery(this).find("a").attr("href");
        jQuery(activeTab).fadeIn();
        return false;
    });
});


// Professional acc popup
jQuery(function() {
    jQuery('.professional_acc_link').click(function() {
        jQuery('.req_pro_acc').addClass('active');
        jQuery('.req_pro_acc').click(function(e) {
            if (jQuery(e.target).closest('.req_pro_acc_inner').length != 0) return false;
            jQuery('.req_pro_acc').removeClass('active');
        });
    });
    jQuery('.req_pro_acc .close_icon').click(function() {
        jQuery('.req_pro_acc').removeClass('active');
    })

})


// side Menu bar active 
jQuery(function() {
    jQuery('.side_menu_list a').click(function() {
        let allMenuLink = jQuery('.side_menu_list a');
        allMenuLink.removeClass('active');
        jQuery(this).addClass('active');
    })
})

// Horizontal innerNavbar
jQuery(function() {
    jQuery('.horizontal_menuBar a').click(function() {
        let allHorizontalLInk = jQuery('.horizontal_menuBar a');
        allHorizontalLInk.removeClass('active');
        jQuery(this).addClass('active');
    })
    tableOfContents()

    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();
        $('.horizontal_menuBar a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                tableOfContents();
                $('.horizontal_menuBar a').removeClass("active");
                currLink.addClass("active");
                let activeItem = jQuery('.horizontal_menuBar a.active');
                let index = jQuery('.horizontal_menuBar a').index(activeItem);
                switch (index) {
                    case 0:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 0);
                        break;
                    case 1:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 1);
                        break;
                    case 2:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 2);
                        break;
                    case 3:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 3);
                        break;
                    case 4:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 4);
                        break;
                    case 5:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 5);
                        break;
                    case 6:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 6);
                        break;
                    case 7:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 7);
                        break;
                    case 8:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 8);
                        break;
                    case 9:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 9);
                        break;
                    case 10:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 10);
                        break;
                    case 11:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 11);
                        break;
                    case 12:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 12);
                        break;
                    case 13:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 13);
                        break;
                    case 14:
                        $('.horizontal_menuBar_slider').trigger('to.owl.carousel', 14);
                        break;
                }
            } else {
                currLink.removeClass("active");
            }
        });
    })
})

function tableOfContents() {
    let carouselItem = $('.horizontal_menuBar_slider .owl-item');
    let carouselActiveItem = $('.horizontal_menuBar_slider .owl-item.active').next();
    carouselItem.removeClass('activeNext')
    carouselActiveItem.addClass('activeNext');
}

// Fixed navbar on scroll
jQuery(function() {
    let horizontalMenu = jQuery('.horizontal_menuBar');
    let sideBarMenu = jQuery('.side_menu_wrapper');
    sideBarMenu = sideBarMenu.offset().top + sideBarMenu.height();

    $(window).scroll(function() {
        if ($(window).width() >= 768) {
            var scroll = $(window).scrollTop();
            if (scroll >= sideBarMenu) {
                horizontalMenu.addClass("active");
            } else {
                horizontalMenu.removeClass("active");
            }
        }
        if ($(window).width() <= 767) {
            var scroll = $(window).scrollTop();
            if (scroll >= jQuery('.algemene_info').offset().top) {
                horizontalMenu.addClass("active");
            } else {
                horizontalMenu.removeClass("active");
            }
        }
        // if ($(window).width() < 768) {
        //     var scroll = $(window).scrollTop();
        //     //console.log(scroll);
        //     if (scroll >= 1750) {
        //         //console.log('a');
        //         $(".menu-stickyblock").addClass("sticky-innermenu1");
        //     } else {
        //         //console.log('a');
        //         $(".menu-stickyblock").removeClass("sticky-innermenu1");
        //     }
        // }
    });
})

// Fixed ad

jQuery(function() {
    let ad = jQuery('.ad');
    let adRight = jQuery('.ad_right');
    let adLeft = jQuery('.ad_left');
    let adRightTop = adRight.offset().top - 80;
    let adLeftTop = adLeft.offset().top - 80;
    let offsetBottom = jQuery('.review_page_content').offset().top + jQuery('.review_page_content').outerHeight() - ad.height() - 80;

    $(window).scroll(function() {
        let windowScrollTop = jQuery(window).scrollTop();
        if (windowScrollTop >= adRightTop) {
            adRight.addClass("ad_fixed");
        } else {
            adRight.removeClass("ad_fixed");
        }

        if (windowScrollTop >= adLeftTop) {
            adLeft.addClass("ad_fixed");
        } else {
            adLeft.removeClass("ad_fixed");
        }

        if (windowScrollTop >= offsetBottom) {
            jQuery('.ad').addClass('fixed_bottom');
            jQuery('.ad').removeClass('ad_fixed');
        } else {
            jQuery('.ad').removeClass('fixed_bottom');
        }
    })
});

// onze_badge
jQuery(function() {
    var badge = jQuery('.onze_badge');
    var badgeClose = jQuery('.badge_popup .close_icon');
    badge.click(function() {
        jQuery('.badge_popup').addClass('active');
        jQuery('.badge_popup').click(function(e) {
            if (jQuery(e.target).closest('.badge_popup_inner').length != 0) return false;
            jQuery('.badge_popup').removeClass('active');
        });
    })
    badgeClose.click(function() {
        jQuery('.badge_popup').removeClass('active');
    })

    // dropdown change
    let badgeDropdown = jQuery('.badge_dropdown select');
    jQuery('.badge_body').hide();
    jQuery('.badge_body:first').show()
    badgeDropdown.change(function() {
        let value = this.value;
        jQuery('.badge_body').hide();
        jQuery('#' + value).show();
    })
})


// Hover effect for Particulier Account link
jQuery(function() {
    var hoverElement = jQuery('.account_type_list_link');

    hoverElement.hover(function() {
        let tooltipContent = jQuery(this).siblings('.progress_tooltip').find('.tooltip_content');
        tooltipContent.toggleClass('active');
    })
})



// smooth scroll effect for click
jQuery('body').on('click', '.side_menu_wrapper a, .horizontal_menuBar_slider a', function() {
    var id = jQuery(this).attr('href');
    jQuery('html, body').animate({
        scrollTop: (jQuery(id).offset().top)
    }, 800)
})



// image lightbox js

lightbox.option({
    disableScrolling: true,
})