function slide(x){
		var slide, slideID;
		if (x == 1){
			slide = $('#slideshow li:first');
			slideID = '#slideshow';
		} else {
			slide = $('#slideshow2 li:first');
			slideID = '#slideshow2';
		}
		slide					 	/*get the slideshow li element, first*/
    	.fadeOut(1000)				/*fadeout over 500*/
    	.next()						/*next li*/
    	.fadeIn(2000)				/*fade it in*/
    	.end()						/**/	
    	.appendTo(slideID);	/**/
	}

function main(){	
	$("#slideshow li:gt(0)").hide();	/*gt pseudo-class. greater than index 0: hide em*/
	setInterval(function(){slide(1)}, 3000);  			/*setInterval with function inside.*/
  	$("#slideshow2 li:gt(0)").hide();
  	setInterval(function(){slide(2)}, 3500);
}

/*RUN THE SCRIPT -- but wait until load to run it*/
window.addEventListener('DOMContentLoaded', main, false);