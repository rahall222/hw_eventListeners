document.body.bgColor = "#2187B7";

var myForm = document.getElementById( "myForm" );

myForm.addEventListener("submit", function(){
	var firstName = document.getElementById("firstName").value;
	console.log("The firstName is: " + firstName);

	var lastName = document.getElementById("lastName").value;
	console.log("The lastName is: " + lastName);

	var email = document.getElementById("email").value;
	console.log("The email is: " + email);

	var message = document.getElementById("message").value;
	console.log("The message is: " + message);
});