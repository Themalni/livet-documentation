jQuery(document).ready(function(){

  $(".indicator, .credits").on("click", showLinks);

    function showLinks(){

      var allMenus = $("#ab-menu, #str-menu, #ht-menu"),
          allCarets = $("#ab-caret, #str-caret, #ht-caret"),
          linkId = $(this).attr("data-menu"),
          caretId = $(this).attr("data-caret");

          $(allMenus).not($(linkId)).removeClass("show");
          $(allCarets).not($(caretId)).removeClass("caret-rotate");

          $(linkId).toggleClass("show");
          $(caretId).toggleClass("caret-rotate");

    };

});
