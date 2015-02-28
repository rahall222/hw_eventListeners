var changeTitle = document.getElementById("title");

// this handler will be executed only once when the cursor moves over the title
//it changes the title to orange
	changeTitle.addEventListener("mouseover", function() {   
    	changeTitle.style.color = "orange";
    }, false);

// this handler will be executed only once when the cursor moves away from the title
//it changes the title to a red brown that I samples from the drawings
	changeTitle.addEventListener("mouseout", function() {   
		changeTitle.style.color = "#701800";
  	}, false);

var changeSubhead = document.getElementById("subhead");

// this handler will be executed once the cursor is moved over the sub heading
//it changes the sub heading to orange
	changeSubhead.addEventListener("mouseover", function() {   
    	changeSubhead.style.color = "orange";
  	}, false);

// this handler will be executed once the cursor is moved away from the sub heading
//it changes the sub title to a red brown that I samples from the drawings
	changeSubhead.addEventListener("mouseout", function() {   
    	changeSubhead.style.color = "#701800";
  	}, false);

var changePara = document.getElementById("para");

// this handler will be executed once the cursor is moved over the paragraph
//it changes the span background color to orange so it looks highlighted
	changePara.addEventListener("mouseover", function(){
  		var theContainer = document.getElementById("highlight");
  		theContainer.style.backgroundColor = "orange";
  	}, false);

//I do not understand what the boolean false means here, but it was in what I found online, so I kept it in.

//show a hidden image when you click on the span to take life less seriously.
//This works, but I can't figure out how to make it stop after one click. maybe we could go over that?
/*
var showImage = document.getElementById("highlight");

showImage.addEventListener( "click", function() {
	var newImage = document.createElement( "p" );
	newImage.innerHTML = "<img src='img/scribble.jpg' alt='hidden drawing'>";

	var imageContainer = document.getElementById("header");
	imageContainer.appendChild( newImage );
});
*/

//event listener listens for click on the title
//listener opens the url for marc johns website
changeTitle.addEventListener("click", function(){
	window.open("http://www.marcjohns.com/");
});

//event listener listens for click on the subtitle
//listener opens the url for marc johns pintrest site
changeSubhead.addEventListener("click", function(){
	window.open("https://www.pinterest.com/marcjohns/");
});

//event listener listens for click on the highlighted span
//listener opens the url with a picture of a dog being way too serious!
changePara.addEventListener("click", function(){
	window.open("http://simplelifestrategies.com/wp-content/uploads/2012/02/Serious-Dog.png");
});

//I set bg color here instead of in css
//event listener listens for scroll of the window
//it changes bgColor to mistyrose, which compliments the artwork
document.bgColor = "powderblue";

window.addEventListener("scroll", function(){
	document.bgColor = "mistyrose";
});

