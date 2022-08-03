jQuery(document).ready(function () {
    jQuery.noConflict()
        (function ($) {

            jQuery('.radio-btn.male, .radio-btn.female').on('click', function () {
                var gneder = jQuery('.select-gender .radio-btn input:checked').val();
                var male = jQuery('#male').val();
                var female = jQuery('#female').val();
                if(gneder == male){
                    jQuery("#male").prop("checked", true);
                }else if(gneder == female){
                    jQuery("#female").prop("checked", true);
                }
            });

            /*jQuery('.banner-right-box, .bottom-form-inner').each(function() {
                  var targetForm = jQuery(this);
                  var body = jQuery('body');
                  var activeClass = 'form-active';
                  var parentActiveClass = 'form-active-parent';
                  var formActiveClass = 'focus-active';

                  function eventHandler(e) {
                      var target = jQuery(e.target);
                      if (targetForm.has(target).length) {
                          body.addClass(activeClass);
                          targetForm.addClass(formActiveClass);
                          targetForm.parent().addClass(parentActiveClass)
                      } else {
                          body.removeClass(activeClass);
                          targetForm.removeClass(formActiveClass);
                          targetForm.parent().removeClass(parentActiveClass)
                      }
                  }
                  targetForm.on('click', eventHandler)
              })*/

            var removeClass = true;
            $(".banner-right-box, .bottom-form-inner").click(function () {
                $("body").addClass("form-active");
                $(".banner-section, .bottom-form-section").addClass("form-active-parent");
                $(".banner-right-box, .bottom-form-inner").addClass("focus-active");
                $(".focus-active-none").addClass("focus-active-1");
                removeClass = false;
            });
            $("html").click(function () {
                if (removeClass) {
                    $("body").removeClass("form-active");
                    $(".banner-section, .bottom-form-section").removeClass("form-active-parent");
                    $(".banner-right-box, .bottom-form-inner").removeClass("focus-active");
                    $(".focus-active-none").removeClass("focus-active-1");
                }
                removeClass = true;
            });

            $("#accordion-ask").accordion({
                active: false,
                autoHeight: false,
                navigation: true,
                collapsible: true,
                heightStyle: "content"
            });

            $("#datepicker").datepicker({
                dateFormat: 'dd-mm-yy'
            }).val();

            // Popup Start
            $('.terms-and-conditions-link').fancybox({
                closeBtn: true,
                //maxWidth    : 480,
                //maxHeight   : 600,
                //minWidth    : 420,
                //fitToView   : false,
                //width       : '90%',
                //height      : '90%',
                //autoSize    : false,
                //closeClick  : false,
                //openEffect  : 'none',
                //closeEffect : 'none',
                //padding     : 0,
            });
            // Popup END

            // Popup Start
            $('.conditions-for-popup').fancybox({
                closeBtn: true,
                //maxWidth    : 480,
                //maxHeight   : 600,
                //minWidth    : 420,
                //fitToView   : false,
                //width       : '90%',
                //height      : '90%',
                //autoSize    : false,
                //closeClick  : false,
                //openEffect  : 'none',
                //closeEffect : 'none',
                //padding     : 0,
            });
            // Popup END

            // Popup Start
            $('.privacy-popup').fancybox({
                closeBtn: true,
                //maxWidth    : 480,
                //maxHeight   : 600,
                //minWidth    : 420,
                //fitToView   : false,
                //width       : '90%',
                //height      : '90%',
                //autoSize    : false,
                //closeClick  : false,
                //openEffect  : 'none',
                //closeEffect : 'none',
                //padding     : 0,
            });
            // Popup END

            // Popup Start
            $('.footer-link').fancybox({
                closeBtn: true,
                //maxWidth    : 480,
                //maxHeight   : 600,
                //minWidth    : 420,
                //fitToView   : false,
                //width       : '90%',
                //height      : '90%',
                //autoSize    : false,
                //closeClick  : false,
                //openEffect  : 'none',
                //closeEffect : 'none',
                //padding     : 0,
            });
            // Popup END

            // Popup END

            //  The menu
            $('#menu').mmenu({
                extensions: ['effect-slide-menu', 'pageshadow'],
                searchfield: false,
                counters: false,
                offCanvas: {
                    position: 'right',
                    //zposition: 'front'
                }
            });
            var API = $('#menu').data('mmenu');
            $('#nav-icon1').click(function () {
                API.close();
            });
            //  The menu End
            //equalheight Start
            $(window).load(function () {
                equalheight('.list-of-box-row ul li .list-of-box');                
            });
            $(window).resize(function () {
                equalheight('.list-of-box-row ul li .list-of-box');                
            });

            //equalheight End

            // owl-carousel Start
            var owl = $("#client-logo-slider");
            owl.owlCarousel({
                loop: true,
                nav: true,
                margin: 0,
                //autoplay: true,
                smartSpeed: 1000,
                //autoWidth:true,
                //animateOut: 'fadeOut',
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    960: {
                        items: 4
                    },
                    1200: {
                        items: 4
                    }
                }
            });
            // owl-carousel End

            // owl-carousel Start
            var owl = $("#client-logo-slider-1");
            owl.owlCarousel({
                loop: true,
                nav: true,
                margin: 0,
                //autoplay: true,
                smartSpeed: 1000,
                //autoWidth:true,
                //animateOut: 'fadeOut',
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    960: {
                        items: 4
                    },
                    1200: {
                        items: 4
                    }
                }
            });
            // owl-carousel End

            // owl-carousel Start
            var owl = $("#box-list-slider");
            owl.owlCarousel({
                loop: false,
                nav: true,
                margin: 0,
                autoplay: true,
                smartSpeed: 1000,
                //mouseDrag:false,
                //touchDrag:false,
                //animateOut: 'fadeOut',
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1,
                        mouseDrag: true,
                        touchDrag: true
                    },
                    768: {
                        items: 2,
                        mouseDrag: true,
                        touchDrag: true
                    },
                    960: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    }
                }
            });
            // owl-carousel End

            jQuery(window).on('load', function () {
                initCounter();
                //initHashSmoothScroll();
            });



            // loaded state script
            (function (w) {
                w.addEventListener('load', function () {
                    var loader = document.querySelector('.counter-box');
                    if (loader) {
                        loader.classList.add('loaded');
                    }
                });
            }(window));

            // loaded state script
            (function (w) {
                w.addEventListener('load', function () {
                    var loader = document.querySelector('.responsive-show .counter-box');
                    if (loader) {
                        loader.classList.add('loaded');
                    }
                });
            }(window));

            function initCounter() {
                jQuery('.counter-box').each(function () {
                    var holder = jQuery(this);
                    var counter = holder.find('.counter-holder');

                    startCounter(counter);
                });

                function startCounter(counter) {
                    var value = parseInt(counter.data('start'), 10);
                    var end = parseInt(counter.data('end'), 10);
                    var timer;

                    counter.empty();

                    var scrollNumber = new gScrollNumber(counter, {
                        width: {
                            tablet: 45,
                            desktop: 59
                        },
                        color: "rgba(53, 126, 149, 0.40)",
                        fontSize: 30,
                        //autoSizeContainerWidth: true
                    });


                    timer = setInterval(function () {
                        scrollNumber.run(value += 1);
                        if (value === end) {
                            clearTimeout(timer);
                        }
                    }, 1500);
                }
            }

            /*function initHashSmoothScroll() {
              var prefix = '-anchor';
              var hash = window.location.hash;
              var target = null;

              if (hash.length && hash.indexOf(prefix) !== -1) {
                target = jQuery(hash.replace(prefix, ''));

                if (target.length) {
                  window.TinySmoothScroll && TinySmoothScroll(target.offset().top, 1000);
                }
              }
            }*/

            // page init
            jQuery(function () {
                initCustomForms();
            });

            // initialize custom form elements
            function initCustomForms() {
                jcf.setOptions('Select', {
                    wrapNative: false,
                    fakeDropInBody: false,
                    wrapNativeOnMobile: false,
                    multipleCompactStyle: true,
                    maxVisibleItems: 15
                });
                jcf.replaceAll('.form-Select-1');
            }

        });

    jQuery.validator.addMethod("gendercheck", function (value, element, params) {
        var genderarray = ['male', 'female'];
        var gender = jQuery("input[name='gender']:checked").val();
        if(jQuery.inArray(gender, genderarray) !== -1){
            return true;
        }
        return false;
    }, "Vul alstublieft een geldige postcode in. (1234 AB)");

    jQuery.validator.addMethod("zipcodeformat", function (value, element, params) {
        return this.optional(element) || /^\d{4} ?[a-z]{2}$/i.test(value);
    }, "Vul alstublieft een geldige postcode in. (1234 AB)");

    jQuery.validator.addMethod("emailcheck", function (value, element) {
        return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(value);
    }, "Vul alstublieft een geldig e-mailadres in.");

    jQuery("#form_top").validate({
        //ignore: ['radio[name=gender]'],
        errorPlacement: function (error, element) {
            element.parent().removeClass('fill-success');
            element.addClass('wpcf7-not-valid');
        },
        success: function (label, element) {
            element.classList.remove('wpcf7-not-valid')
            element.parentElement.classList.add('fill-success');
            label.remove();

        },
        rules: {
            gender: {
                gendercheck: true
            },
            dag: "required",
            maand: "required",
            jaar: "required",
            voornaam: "required",
            achternaam: "required",
            postcode: {
                required: true,
                zipcodeformat: true
            },
            email: {
                required: true,
                emailcheck: true
            },
            accepteer_voorwaarden: "required"
        }
    });
});

jQuery("#form_step_button_1").on('click', function () {
    if (jQuery("#form_top").valid()) {
        jQuery("#step-part-2").css("display", "block");
        jQuery("#step-part-1").css("display", "none");
        jQuery('html, body').animate({
            scrollTop: jQuery(".banner-right-box.step-2").offset().top
        }, 700);
    }
});
jQuery("#form_step_button_2").on('click', function () {
    if (jQuery("#form_top").valid()) {
        jQuery("#step-part-3").css("display", "block");
        jQuery("#step-part-2").css("display", "none");
        jQuery('html, body').animate({
            scrollTop: jQuery(".banner-right-box.step-3").offset().top
        }, 700);
    }
});
jQuery("#form_step_button_3").on('click', function () {
    if (jQuery("#form_top").valid()) {
        
    }
});

jQuery("#form_top_button").on('click', function () {
    if (jQuery("#form_top").valid()) {
        //jQuery('#form_top').css('display', 'none');
        //jQuery('#message_top').css('display', 'block');

        /*var data = jQuery("#form_top").serializeArray();
        data.push({
            name: 'campaignId',
            value: id
        });
        data.push({
            name: 'tracking_url',
            value: window.location.toString()
        });
        data.push({
            name: 'portal_cookie',
            value: get_portal_cookie('portal_cookie', 20)
        });

        jQuery.ajax({
            url: 'https://portal.datafanatics.nl/admin/test_function',
            type: 'POST',
            data: data,
            success: function (msg) {
                var form = document.createElement('form');
                document.body.appendChild(form);
                form.method = 'post';
                form.action = window.location.href + '/thank-you.php?id=' + msg;
                jQuery(data).each(function (i, field) {
                    var input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = field.name;
                    input.value = field.value;
                    form.appendChild(input);
                });
                form.submit();
            }
        });*/

        jQuery('#message_top div').css('display', 'none');
        jQuery('#message_top p').css('display', 'inline-block');
        jQuery('html, body').animate({
            scrollTop: jQuery("#step-part-1").offset().top
        }, 700);
    }
});
