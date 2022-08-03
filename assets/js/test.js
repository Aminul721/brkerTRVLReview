/* Script on ready
---------------------------------*/
$=jQuery;
$( document ).ready(function(e) {
    /*leftsidebar*/ 
    //e.preventDefault();  
    
    /*var lastId1,
        topMenu1 = $("#sidebar-left-id ul"),
        topMenuHeight1 = topMenu1.outerHeight()-70,
        // All list items
        menuItems1 = topMenu1.find("a"),
        // Anchors corresponding to menu items
        scrollItems1 = menuItems1.map(function(){
          var item1 = $($(this).attr("href"));
          if (item1.length) { return item1; }

        }); 

    menuItems1.unbind(function(e){ 
 
      e.preventDefault();  
      var href1 = $(this).attr("href"),
          offsetTop = href1 === "#" ? 0 : $(href1).offset().top-(topMenuHeight1+140);
           //console.log("topmenu-height",topMenuHeight1);
           //console.log("offset-top",offsetTop);
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 1500);
        return false;  
    });*/ 
    /*$("#sidebar-left-id ul li a[href^='#']").bind("click", function(ev) {
      ev.preventDefault();  
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 300
      }, 1000);
      return false;
    }); */  
});


