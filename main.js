
document.addEventListener('click', function (event) {

	if (event.target.matches('.button')) {
        console.log(event.target.textContent);
        document.getElementById('screen').value+=event.target.textContent;
	}
//get element and set the value to target the event and retrieve it's contents. 
    if (event.target.matches('#clear')) {
        document.getElementById('screen').value="";
    }
//clear the screen 

    if (event.target.matches('#equals')) {
        document.getElementById('screen').value=eval(document.getElementById('screen').value);
    }
    //eval() evaluate the values
}, false);