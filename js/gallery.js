/*||||||||||||||||||||||||||||||| JS GALLERY PAGE ||||||||||||||||||||||||||||||||*/

/*V A R I A B L E S*/
var diamonds = {el: document.getElementById('diamonds'), ref: "images/diamonds.JPG"};
var freya = {el: document.getElementById('freya'), ref: "images/freya.JPG"};
var pillow = {el: document.getElementById('pillow'), ref: "images/pillow.JPG"};
var wink = {el: document.getElementById('wink'), ref: "images/wink.JPG"};
var woolbrass = {el: document.getElementById('woolbrass'), ref: "images/woolbrass.JPG"};
var wooldriftwood = {el: document.getElementById('wooldriftwood'), ref: "images/wooldriftwood.JPG"};
/*weaving array*/
var weavings = [diamonds, freya, pillow, wink, woolbrass, wooldriftwood];

/*F U N C T I O N S*/
/*when the mouse hovers onto the thumb the full pic is shown in the showPic area*/
function onFunction(x){
		
		var mage = document.createElement('img');
		mage.src = x;
		mage.style.height = "500px";
    	mage.style.width = "500px";
    	mage.style.alt = x;

		document.getElementById('showPic').appendChild(mage);
}

/*when the mouse hovers-off the thumb the showPic area is left blank*/
function offFunction(){
		document.getElementById('showPic').removeChild(document.getElementById('showPic').firstChild);	
}
	
/*assignment function addseventlisteners to the param*/	
function assign(weave){	
  
	if(weave.el.addEventListener){
		weave.el.addEventListener('mouseover', function(){
				onFunction(weave.ref);
			}, false);
		
	} else { /*workaround for IE 8*/
		weave.el.attachEvent('onmouseover', function(){
			onFunction(weave.ref);
			});
	}
	weave.el.onmouseout = offFunction;
  
}

/*MAIN FUNCTION*/
function main(){
  for(var i=0; i<weavings.length; i++){
  	assign(weavings[i]);
  }
}

/*RUN THE SCRIPT -- but wait until load to run it*/
window.addEventListener('DOMContentLoaded', main, false);