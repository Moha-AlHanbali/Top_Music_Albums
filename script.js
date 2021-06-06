// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function taste_validation(){
 
 
 var Yes = ["yes", "YES","yeah","YEAH","yup","YUP", "yea", "YEA","kinda","KINDA"];
 var No = ["no", "NO", "nope", "NOPE", "nah", "NAH"];

 while (q1answer != true){
  if (Yes.includes(q1answer)){
    alert("I hope you enjoy my music taste then!");
    break;
    } else if
   (No.includes(q1answer)){
  alert("Too bad, hope I could change your mind ," + visitorname + " !");
  break;
  } else{
    alert ("Please enter a valid answer!");
  q1answer = prompt("Do you like Metal music " + visitorname + " ?");
  }
}
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


var q1answer= " ";


var visitorname = prompt("What is your name by the way?");


alert("Nice to meet you "+visitorname);
 q1answer = prompt("Do you like Metal music " + visitorname + " ?");


taste_validation();


var music_notes = " ";
var add_notes = " ";
var note_image = " ";







/*
----------------------------------------------------------
if (q1answer=="yes"){alert("I hope you enjoy my taste in music then!")} else{
if (q1answer=="yup"){alert("I hope you enjoy my taste in music then!")} else{
if (q1answer=="yeah"){alert("I hope you enjoy my taste in music then!")} else{
if (q1answer=="YES"){alert("I hope you enjoy my taste in music then!")} else{
if (q1answer=="YUP"){alert("I hope you enjoy my taste in music then!")} else{ 
if (q1answer=="YEAH"){alert("I hope you enjoy my taste in music then!")} else{
if (q1answer=="no"){alert("Too bad, I hope I can change your mind " + visitorname + " !")} else{
if (q1answer=="nah"){alert("Too bad, I hope I can change your mind " + visitorname + " !")} else{
if (q1answer=="nope"){alert("Too bad, I hope I can change your mind " + visitorname + " !")} else{
if (q1answer=="NO"){alert("Too bad, I hope I can change your mind " + visitorname + " !")} else{
if (q1answer=="NAH"){alert("Too bad, I hope I can change your mind " + visitorname + " !")} else{
if (q1answer=="NOPE"){alert("Too bad, I hope I can change your mind " + visitorname + " !")} else{
  alert("Not interested in answering " + visitorname + " ?")
----------------------------------------------------------
}}}}}}}}}}}};

*/



/*
 if (Yes.IndexOf(q1answer)==-1){alert ("TEST TEST")};
*/



// alert("I need you to do one last thing for me!");

// confirm("Promise me you'll try one of my top Albums!");
// alert("AND!");
// alert("Enjoy your visit!♪");

var visitor_text = document.getElementById("visitor").innerHTML="Are being viewed by " + visitorname + ", Live!";







// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// lab06 REQ ADDITIONs:

// var name = prompt("What is your name?")
// document.write("<h2>Hello " + name +  "!</h2>")

// var answer = prompt("Would like to learn the Piano " + name +" ?")

// if (answer == "yes") {
//   alert ("Great! Contact me at once!")} else
//   {
//    alert ("Too bad, wish I could help!")
//   }

  // alert("Take care for now!")
















// *************************************************************************




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// lab07 + lab08 REQ ADDITIONs:
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function first_question (){
  var music_type  = prompt("Which music genre do you want to learn about, Rock or Classic?")

  while (music_type != "Rock" && music_type != "Classic"){
  var music_type  = prompt("Which music genre do you want to learn about, Rock or Classic?")
  }
}
first_question()


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


var image_question = function(){
var image_number = prompt ("How many Rock Music images would you like to see?")

var output = "";

for (i=0 ; i< image_number ; i++){
  if (image_number > 10){
    alert("Please enter a lower number");
    var image_number = prompt ("How many Rock Music images would you like to see?");} else{

  output = output + "<img src='https://image.freepik.com/free-vector/rock-music-forever-poster-with-one-guitar-centre_1284-49237.jpg' width='120' height='120'>"
}}
document.write(output)
}

image_question();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>