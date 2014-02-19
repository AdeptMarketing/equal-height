Equal Height Plugin
====================

Author: Phil Birnie, Adept Marketing
Version: 0.9


jQuery plugin that sets a collection of items to equal height.

## Options

* extraSpacing: 0 - creates extra padding at the bottom of the element beyond computed height.

## Methods

* `resizeElements`: This can be called at anytime and will automatically reset and recalculate the size of your elements.  Very useful for responsive design.

## How to use

`var resizer = new $.equalHeight($(elementCollection));`

If your elements contain images, you should fire this on the `window.load` event or your calculated height may be too small. 

For responsive sites, you may need to recalculate the height when the window changes size: 

    var resizer = new $.equalHeight($("#featured-products article"));
    $(window).bind("resize", function() {
        resizer.resizeElements();
    });
    

_Last Updated: February 18, 2014_