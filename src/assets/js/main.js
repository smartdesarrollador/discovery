function init_plugins() {
  (function ($) {
    "use strict";
    /*--
        Commons Variables
    -----------------------------------*/
    var $window = $(window),
      $body = $("body");




    /**********************
     * Vertical Menu
     ***********************/
    $(".header-menu-vertical .menu-title").on("click", function (event) {
      $(".header-menu-vertical .menu-content").slideToggle(500);
    });

    $(".menu-content").each(function () {
      var $ul = $(this),
        $lis = $ul.find(".menu-item:gt(7)"),
        isExpanded = $ul.hasClass("expanded");
      $lis[isExpanded ? "show" : "hide"]();

      if ($lis.length > 0) {
        $ul.append(
          $(
            '<li class="expand">' +
              (isExpanded
                ? '<a href="javascript:;"><span><i class="icon-minus-square"></i>Close Categories</span></a>'
                : '<a href="javascript:;"><span><i class="icon-plus-square"></i>More Categories</span></a>') +
              "</li>"
          ).on("click", function (event) {
            var isExpanded = $ul.hasClass("expanded");
            event.preventDefault();
            $(this).html(
              isExpanded
                ? '<a href="javascript:;"><span><i class="icon-plus-square"></i>More Categories</span></a>'
                : '<a href="javascript:;"><span><i class="icon-minus-square"></i>Close Categories</span></a>'
            );
            $ul.toggleClass("expanded");
            $lis.toggle(300);
          })
        );
      }
    });

    /*--------------------
    Category more toggle
    ----------------------*/

    $(".category-menu li.hidden").hide();
    $("#more-btn").on("click", function (e) {
      e.preventDefault();
      $(".category-menu li.hidden").toggle(500);
      var htmlAfter =
        '<i class="ion-ios-minus-empty" aria-hidden="true"></i> Less Categories';
      var htmlBefore =
        '<i class="ion-ios-plus-empty" aria-hidden="true"></i> More Categories';

      if ($(this).html() == htmlBefore) {
        $(this).html(htmlAfter);
      } else {
        $(this).html(htmlBefore);
      }
    });




    /*-------------------------------
        Create an account toggle
    ---------------------------------*/
    $(".creat-account").on("click", function () {
      $(".open-create-account").slideToggle(1000);
    });

    $(".shipping-account").on("click", function () {
      $(".open-shipping-account").slideToggle(1000);
    });

    /*----------------------------------
        Scroll To Top Active
    -----------------------------------*/
    $("body").materialScrollTop();
  })(jQuery);

}
function init_navbar() {

  /**********************
     * Sticky Menu
     ***********************/
    $(window).on("scroll", function (event) {
      var scroll = $(window).scrollTop();
      if (scroll < 350) {
        $(".header-menu").removeClass("is-sticky");
      } else {
        $(".header-menu").addClass("is-sticky");
      }
    });



  (function ($) {
    "use strict";
    /*--
        Commons Variables
    -----------------------------------*/
    var $window = $(window),
      $body = $("body");


    /*--
        Off Canvas Function sidebar desplegable (carrito)
    -----------------------------------*/
    (function () {
      var $offCanvasToggle = $(".offcanvas-toggle"),
        $offCanvas = $(".offcanvas"),
        $offCanvasOverlay = $(".offcanvas-overlay"),
        $mobileMenuToggle = $(".mobile-menu-toggle");
      $offCanvasToggle.on("click", function (e) {
        e.preventDefault();
        var $this = $(this),
          $target = $this.attr("href");
        $body.addClass("offcanvas-open");
        $($target).addClass("offcanvas-open");
        $offCanvasOverlay.fadeIn();
        if ($this.parent().hasClass("mobile-menu-toggle")) {
          $this.addClass("close");
        }
      });
      $(".offcanvas-close, .offcanvas-overlay").on("click", function (e) {
        e.preventDefault();
        $body.removeClass("offcanvas-open");
        $offCanvas.removeClass("offcanvas-open");
        $offCanvasOverlay.fadeOut();
        $mobileMenuToggle.find("a").removeClass("close");
      });
    })();





    /**********************
     * Offcanvas: Menu Content
     ***********************/
    function mobileOffCanvasMenu() {
      var $offCanvasNav = $(".offcanvas-menu"),
        $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");

      /*Add Toggle Button With Off Canvas Sub Menu*/
      $offCanvasNavSubMenu
        .parent()
        .prepend('<span class="offcanvas__menu-expand"></span>');

      /*Category Sub Menu Toggle*/
      $offCanvasNav.on("click", "li a, .offcanvas__menu-expand", function (e) {
        var $this = $(this);
        if (
          $this.attr("href") === "#" ||
          $this.hasClass("offcanvas__menu-expand")
        ) {
          e.preventDefault();
          if ($this.siblings("ul:visible").length) {
            $this.parent("li").removeClass("active");
            $this.siblings("ul").slideUp();
            $this.parent("li").find("li").removeClass("active");
            $this.parent("li").find("ul:visible").slideUp();
          } else {
            $this.parent("li").addClass("active");
            $this
              .closest("li")
              .siblings("li")
              .removeClass("active")
              .find("li")
              .removeClass("active");
            $this.closest("li").siblings("li").find("ul:visible").slideUp();
            $this.siblings("ul").slideDown();
          }
        }
      });
    }
    mobileOffCanvasMenu();

    /**********************
     * Offcanvas: User Panel
     ***********************/
    function mobileOffCanvasUserPanel() {
      var $offCanvasNav = $(".offcanvas-userpanel"),
        $offCanvasNavSubMenu = $offCanvasNav.find(".user-sub-menu");

      /*Add Toggle Button With Off Canvas Sub Menu*/
      $offCanvasNavSubMenu
        .parent()
        .prepend('<span class="offcanvas__user-expand"></span>');

      /*Category Sub Menu Toggle*/
      $offCanvasNav.on("click", "li a, .offcanvas__user-expand", function (e) {
        var $this = $(this);
        if (
          $this.attr("href") === "#" ||
          $this.hasClass("offcanvas__user-expand")
        ) {
          e.preventDefault();
          if ($this.siblings("ul:visible").length) {
            $this.parent("li").removeClass("active");
            $this.siblings("ul").slideUp();
            $this.parent("li").find("li").removeClass("active");
            $this.parent("li").find("ul:visible").slideUp();
          } else {
            $this.parent("li").addClass("active");
            $this
              .closest("li")
              .siblings("li")
              .removeClass("active")
              .find("li")
              .removeClass("active");
            $this.closest("li").siblings("li").find("ul:visible").slideUp();
            $this.siblings("ul").slideDown();
          }
        }
      });
    }
    mobileOffCanvasUserPanel();


  })(jQuery);




}
