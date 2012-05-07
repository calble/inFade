inFade
======
This program is free software: you can redistribute it and/or modify
it under the terms of the Lesser GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
=====================================================================

Copyright 2012 Noah Eltzroth.

=====================================================================

Options --
* images -- Array of image names
* animationSpeed -- The time in milliseconds for the animation to last.
* duration -- The delay between animations in milliseconds
* throbber -- file name of the loading image

=====================================================================

Usage --
<script type="text/javascript">
	$(function(){
		$("#demo").inFade({
					images:['1.jpg','2.jpg','3.jpg'],
					animationSpeed: 750, 
					duration: 2000, 
					throbber: 'loading.gif'});
	});
</script>

<div id="demo"></div>

***************************************/
