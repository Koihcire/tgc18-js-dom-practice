// PLACE YOUR CODE HERE
//1. Change the first (and only the first) <h2> to be font size 32px and using the font Verdana.
document.querySelector("#htmlSkills h2").style.fontSize = "32px";
document.querySelector("#htmlSkills h2").style.fontFamily = "Verdana";

//2. Put a border of 1px black solid around the image of the wolf, with padding top 32px and padding bottom 15px
document.querySelector("#wolf img").style.border = "10px solid black";
document.querySelector("#wolf img").style.paddingTop = "32px";
document.querySelector("#wolf img").style.paddingBottom = "15px";

//3. For the A Few Random Favorite Facts <ul>, make it such that the first and the last <li> has background color yellow.
document.querySelector("#fact1").style.backgroundColor = "yellow";
document.querySelector("#fact4").style.backgroundColor = "yellow";

//4. Change to <h2> to have the inner text "Pancake Recipe" instead of "How to Cook Pancakes. What you need".
document.querySelector("#cookPancakes h2").innerText = "Pancake Recipe";

//5. All the <li> inside any <ol> to have color orange.
let list = document.querySelectorAll(".ol");
for (o in list){
    list[o].style.color = "orange";
}
