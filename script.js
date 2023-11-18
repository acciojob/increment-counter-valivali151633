//your JS code here. If required.
let countervalue = 0;


function incrementfun(){
	const counterElement=document.getElementById('counter');
	counterElement.innerText= countervalue;
	alert( counterElement.innerText)
	countervalue++;
	
	
}