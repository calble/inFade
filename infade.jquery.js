/***************************************
InFader -- A fade show.
Copyright 2012 Noah Eltzroth.

Options --
* images -- Array of image names
* animationSpeed -- The time in milliseconds for the animation to last.
* duration -- The delay between animations in milliseconds
* throbber -- file name of the loading image

Usage --
$(function(){
$("#demo").inFade({images:['1.jpg','2.jpg','3.jpg'],animationSpeed: 750, duration: 2000, throbber: 'loading.gif'});
});

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
***************************************/

(function( $ ) {
	var _firstImage = new Image();
	$.fn.inFade = function(opts){
	//SetUp HTML
	$(this).html("<img/>");

	var $imgTag = $(this).children('img');
	//Set the loading image
	$imgTag.attr('alt',"Fade Show").attr('src',opts.throbber).css({'width':'100%','height':'100%'});

	//Boolean to determine if we should start the fade show.
	var shouldStart = true;

	_firstImage.onload = function(){
		//Change away from loading image when first image loads.
		changeImage();
	}
	_firstImage.src = opts.images[0];

	//Preload those images
	for(image in opts.images){
		var tmp = new Image();	
		tmp.src = image;
	}

	var timeout;
	var currentImageIndex = 0;
	var self = this;

	function changeImage(){
		//Set Background
		$imgTag.fadeIn(opts.animationSpeed, function(){
			$(self).css({'background-image': "url("+opts.images[currentImageIndex]+")"});

			//fade out image
			$imgTag.fadeOut(opts.animationSpeed, function(){
				//Queue up next image	
				if(currentImageIndex+1 >= opts.images.length){
					currentImageIndex = 0;
				}else{
					currentImageIndex++;
				}
				//Set image src to bg image of next image
				$imgTag.attr('src',opts.images[currentImageIndex]);
				setTimeout(changeImage, opts.animationSpeed + opts.duration);	
			});
		});
	}



	return this;	
	}
})(jQuery);
