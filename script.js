//your JS code here. If required.
let counterValue = 0;


function incrementfun(){
	const counterElement=document.getElementById('counter');
	// counterElement.innerText= countervalue;
	// alert( counterElement.innerText)
	// countervalue++;
alert('Un-incremented value: ' + counterValue);
      
      // Increment the counter value
      counterValue++;

      // Update the counter element's text
      counterElement.textContent = counterValue;
}