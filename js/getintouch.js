	/* Variables */
	var nameMsg = document.getElementById('nameComment');
	var nameInput = document.getElementById('myName');
	var emailMsg = document.getElementById('emailComment');
	var emailInput = document.getElementById('myEmail');
	
	/* functions */
	// check to make sure a name is inputed
	function checkName(){
		
		if (nameInput.value.length < 2){
			nameMsg.textContent = 'please enter your name';	
		} else {
			nameMsg.textContent = '';
		}
	}
	// check if the email contains an @ symbol
	function checkEmail(){
		if( emailInput.value.indexOf('@') === -1 || emailInput.value.indexOf('.') === -1 || emailInput.value.length < 3){
			emailMsg.textContent = 'please enter your email address';		
		} else {
			emailMsg.textContent = '';	
		}
		

	}

function main(){	
	//check the name input on Blur with ie workaround
	if(nameInput.addEventListener){	
		nameInput.addEventListener('blur', checkName, false);
	} else {
		nameInput.attachEvent('onblur', checkName);
	}
	//check the email on Blur with ie workaround
	if(emailInput.addEventListener){
		emailInput.addEventListener('blur', checkEmail, false);
	} else {
		emailInput.attachEvent('onblur', checkEmail);
	}
}

/*RUN THE SCRIPT -- but wait until load to run it*/
window.addEventListener('DOMContentLoaded', main, false);	