/**
 * img-cover - Makes an object size as cover effect.
 * Copyright 2019 Cristian Antonio Gonzalez Cienfuegos All Rights Reserved
 * Website: http://d4all.mx/libraries/img-cover
 * Version 1.0
 */
(function ($) {
  "use strict";

  /**
   * Sizes all object with class imgCover.
   */
  function imgCoverSetup() {
    $('.imgCover').each(function(i, obj) {
      if ($(this).hasClass('imgCoverReady')) {
        return;
      }

      $(this).addClass('imgCoverReady');
      imgCoverSize(obj);
    });
  }

  /**
   * Sizes all object with class imgCover.
   */
  function imgCoverReset() {
    $('.imgCover').each(function(i, obj) {
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
    var oHeight = parseInt($(obj).attr('data-height'), 10);

    // Resulting dimensions.
    var rWidth = wWidth;
    var rHeight = parseInt(wWidth/oWidth*oHeight, 10);

    if (rHeight < wHeight) {
      rHeight = wHeight;
      rWidth = parseInt(wHeight/oHeight*oWidth, 10);
    }
    $(obj).find('> *:first').width(rWidth);
    $(obj).find('> *:first').height(rHeight);
    $(obj).find('> *:first').addClass('ready');
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

    setTimeout(imgCoverReset, 250);
  });

})(jQuery);
