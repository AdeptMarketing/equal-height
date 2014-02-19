/* Equal Height Plugin */
/* If container has images, load using window.load rather than document.ready */
/*global jQuery*/

(function($) {
    "use strict";
    $.fn.equalHeight = function() {
        var maxHeight, elementHeight;
        maxHeight = 0;
        elementHeight = 0;

        $(this).each(function() {
            elementHeight = $(this).height();
            if (elementHeight > maxHeight) {
                maxHeight = elementHeight;
            }
        });
        //Now set all callouts to max height as long as they were found...
        if (maxHeight !== 0) {
            $(this).each(function() {
                $(this).css("height", maxHeight + "px");
            });
        }
    };
}(jQuery));