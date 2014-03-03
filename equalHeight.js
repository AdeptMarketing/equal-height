/* Equal Height Plugin */
/* If container has images, load using window.load rather than document.ready */
/*global jQuery*/

(function ($) {
    "use strict";
    $.equalHeight = function (el, options) {
        var defaults, plugin, init, resetHeight, setCollectionHeight;

        defaults = {
            extraSpacing: 0,
            hiddenElementId: null
        };

        plugin = this;

        plugin.settings = {};

        init = function () {
            plugin.settings = $.extend({}, defaults, options);
            plugin.el = el;
            plugin.resizeElements();
        };


        /**
         * Resets height of elements so that they can be
         * accurately resized
         * @return {void}
         */
        resetHeight = function () {
            $(plugin.el).each(function () {
                $(this).css("height", "auto");
            });
        };

        /**
         * Sets the height of collection elements
         * @param {int} height height to which elements should be set
         */
        setCollectionHeight = function (height) {
            $(plugin.el).each(function () {
                $(this).css("height", height + "px");
            });
        };

        /**
         * Public function to resize Elements at will
         * @return {void}
         */
        plugin.resizeElements = function () {
            var maxHeight, elementHeight, absoluteHidden;

            maxHeight = 0;
            elementHeight = 0;

            /**
             * Reset Height of all elements
             */
            resetHeight();

            /**
             * Check if element is absolutely positioned and display none; if so, we need to make it invisible,
             * but not display none so that the height can be calculated correctly.
             */
            if (plugin.settings.hiddenElementId !== null) {
                $("#" + plugin.settings.hiddenElementId).css({
                    "display": "block",
                    "visibility": "hidden"
                });
            }

            $(plugin.el).each(function () {

                elementHeight = parseInt($(this).outerHeight(), 10) + plugin.settings.extraSpacing;
                if (elementHeight > maxHeight) {
                    maxHeight = elementHeight;
                }
            });

            if (plugin.settings.hiddenElement !== null) {
                $("#" + plugin.settings.hiddenElementId).css({
                    "display": "",
                    "visibility": "visible"
                });
            }

            //Now set all callouts to max height as long as they were found.
            if (maxHeight !== 0) {
                setCollectionHeight(maxHeight);
            }
        };

        /**
         * Initialize Plugin
         **/
        init();

    };
}(jQuery));