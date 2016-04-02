// Javascript Document
(function(){
console.log("gallery working");
// variables
var photos =["mov1", "mov2", "mov3", "mov4", "mov5", "mov6"];
var captions = ["ArmyofDarkness", "BettleJuice","BlackHawkDown", "Cloudy", "DespicableMe", "Dredd"]; 
var el = document.querySelector("#galleryList"); 
var anchors = el.querySelectorAll("a"); 
var Movies = document.querySelector("#Movies");
var Title = document.querySelector("#Title");

// functions
function ChangeMov(e) {
      e.preventDefault(); 
    var thisImg = "images/"+photos[e.target.id]+".jpg";  
    Movies.src = thisImg;
 }

 function ChangeTitle(e)
 {
	 e.preventDefault();
     var thisText = captions[e.target.id];
     Title.innerHTML = thisText;	
     console.log(captions[e.target.id]);
 }

// listeners 
for(var i = 0; i<anchors.length ; i++)
{
     anchors[i].addEventListener("click", ChangeMov, false);
     anchors[i].addEventListener("click", ChangeTitle, false); 
}


})();