/**
 * @file
 * Makes an object size as cover effect.
 */

(function ($) {
  "use strict";

  /**
   * Sizes all object with class imgCover.
   */
  function imgCoverSetup() {
    $('.imgCover').once('imgCover').each(function(i, obj) {
      imgCoverSize(obj);
    });
  }

  /**
   * Sizes properly an object given.
   */
  function imgCoverSize(obj) {
    // Wrapper dimensions.
    var wWidth = parseInt($(obj).width(), 10);
    var wHeight = parseInt($(obj).height(), 10);

    // Object original dimensions.
    var oWidth = parseInt($(obj).attr('data-width'), 10);
    var oHeight = parseInt($(obj).attr('data-width'), 10);

    // Resulting dimensions.
    var rWidth = wWidth;
    var rHeight = parseInt(wWidth/oWidth*oHeight, 10);

    if (rHeight < wHeight) {
      rHeight = wHeight;
      rWidth = parseInt(wHeight/oHeight*oWidth, 10);
    }

    $(obj).css({
      width: rWidth,
      height: rHeight
    });
  }

  /**
   * Attach imgCoverSetup on window load.
   */
  $(window).on('load', imgCoverSetup);

  /**
   * Attach event on window resize.
   */
  var resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);

    setTimeout(imgCoverSetup, 250);
  });

})(jQuery);
