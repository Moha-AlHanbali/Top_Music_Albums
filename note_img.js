alert("Hello, Welcome to My Top Metal Albums Page");


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function visitor_rating(){
var music_notes = " ";
var note_image = " ";

while (music_notes != true){
var music_notes= prompt("On a scale from 1-10, how much do you like music?");

if (music_notes <= 10 && music_notes > 0){
  
break;
} else {
  alert ("Please answer accordinly,")
 }
}

for (var i = 0; i < music_notes; i++){
var note_image = note_image + "<img src='IMG/music_note.png' id='note_img' width= '31.5px' height='51.2px'>";


}
var visitor_images = document.getElementById("visitor_rating").innerHTML= "<div>"+note_image+"</div>";
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




visitor_rating();



