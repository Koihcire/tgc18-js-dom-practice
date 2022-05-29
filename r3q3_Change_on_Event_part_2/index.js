let boxes = document.querySelectorAll(".box");
// console.log(boxes);

for (let b of boxes){
    console.log(b)
    b.addEventListener("mouseover", function(){
        b.style.backgroundColor = "red";
    })
    b.addEventListener("mouseout", function(){
        b.style.backgroundColor = "white";
    })
}
