// Uses AMD or browser globals to create a module.

// If you want something that will also work in Node, see returnExports.js
// If you want to support other stricter CommonJS environments,
// or if you need to create a circular dependency, see commonJsStrict.js

// Defines a module "amdWeb" that depends on another module called "b".
// Note that the name of the module is implied by the file name. It is best
// if the file name and the exported global have matching names.

// If the 'b' module also uses this type of boilerplate, then
// in the browser, it will create a global .b that is used below.

// If you do not want to support the browser global path, then you
// can remove the `root` use and the passing of `this` as the first arg to
// the top function.

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['b'], factory);
  } else {
    // Browser globals
    root.amdWeb = factory(root.b);
  }
}(this, function (b) {
  //use b in some fashion.

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return (function ($) {
    'use strict';

    function tfingi_megamenu_init() {
      $('.megamenu-parent').each(function (index, el) {
        var megamenu_parent = $(this);
        var megamenu = $(megamenu_parent).children('.sub-menu');
        var megamenu_columns_count = megamenu.children('.megamenu-column').length;

        // Get predefined in menu width for megamenu using data-width attribute
        var megamenu_width = megamenu_parent.attr('data-width');
        var megamenu_left = '';
        var megamenu_parent_itemwidth = 0;

        // change .sub-menu to .megamenu-submenu to get rid of standard styling
        $(megamenu).addClass('megamenu-sub-menu');
        $(megamenu).find('.sub-menu').each(function () {
          // change .sub-menu to .megamenu-inner-sub-menu
          $(this).attr('class', '').addClass('megamenu-inner-sub-menu');
        });

        // add some css helper classes
        $(megamenu).find('.megamenu-column').each(function () {
          $(this).find('.megamenu-inner-sub-menu .megamenu-heading').eq(0).addClass('first-submenu-header');
        });



        if (megamenu_width === '') {
          megamenu_width = 260 * megamenu_columns_count; // Set default dropdown width value
        }

        if (megamenu_width === 'full') {
          // megamenu_width = '100%'; // Set full width dropdown

          megamenu_left = '0';
          // Set megamenu dropdown width
          megamenu.css({
            width: '100%',
            'margin-left': megamenu_left
          });

        } else {
          $(this).css('position', 'relative');
          megamenu_parent_itemwidth = $(megamenu_parent).outerWidth();
          megamenu_left = parseInt(megamenu_width, 10) / 2 * (-1) + megamenu_parent_itemwidth / 2;


          $(megamenu).css({
            width: megamenu_width + 'px',
            'margin-left': megamenu_left + 'px'
          });
        }

        megamenu_parent.addClass('megamenu-columns-' + megamenu_columns_count);

        // make sure mega menu dropdown doesn't go out of screen
        var window_width = jQuery(window).width();
        var megamenu_parent_offset = $(megamenu_parent).offset();

        if (megamenu_width != 'full') {

          // if screen size is smaller than megamenu panel
          if ((window_width < megamenu_width)) {
            // make mega menu full width
            $(this).addClass('mm-width-full');
            megamenu_left = '0';
            megamenu.css({
              width: '100%',
              position: 'static',
              'margin-left': megamenu_left
            });
          } else if (0 > (megamenu_parent_offset.left - megamenu_width)) {
            megamenu.css({
              'margin-left': 0
            });

          } else if (window_width < (megamenu_parent_offset.left + (megamenu_parent_itemwidth / 2) + megamenu_width / 2)) {
            // if megamenu comes out of the screen on the right
            $(megamenu_parent).addClass('dropdown-align-right');
            megamenu.css({
              'margin-left': '0',
              'right': '0',
              'left': 'auto'
            });
          }
        }
      });
    }

	$(function() {
    	tfingi_megamenu_init();
	});

    $(window).resize(tfingi_megamenu_init);


  })(jQuery);
}));
