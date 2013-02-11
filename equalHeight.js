/* Equal Height Plugin */
/* If container has images, load using window.load rather than document.ready */
(function( $ ){

$.fn.equalHeight = function() {
		var $this = $(this);
		var maxHeight=0;
		var elementHeight=0;

		$this.each(function(index, element) {
			var elementHeight = $(this).height();
			if(elementHeight > maxHeight) {
				maxHeight = elementHeight;
			}
		});
		//Now set all callouts to max height as long as they were found...
		if(maxHeight !==0) {
			$this.each(function(index, element) {
				$(this).css("height", maxHeight + "px");
			});
		}
};
})( jQuery );