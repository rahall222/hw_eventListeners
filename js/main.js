var x = 1;
var theHeading = document.getElementsByTagName("h1")[0];

theHeading.addEventListener( "click", function() {
	var newPara = document.createElement( "p" );
	newPara.innerHTML = "This is click number " + x;

	var theContainer = document.getElementsByTagName('body')[0];
	theContainer.appendChild( newPara );
	
	x++;
});