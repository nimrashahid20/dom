// console.log(document)
// console.log (document.body.childNodes)

let head = document.getElementById("heading");
head.style.color = "red";
head.style.backgroundColor = "black";
head.style.fontSize = "100px";
console.log(head);

let paraghraph = document.getElementsByClassName("para")
paraghraph[0].style.color = "purple";
paraghraph[0].style.backgroundColor = "pink";
paraghraph[0].style.fontSize = "30px";
paraghraph[0].style.border = "3px dotted black";
paraghraph[1].style.color = "green";
paraghraph[1].style.backgroundColor = "black";
paraghraph[1].style.fontSize = "30px"

paraghraph[1].innerHTML = "nimra"


let collection = document.getElementsByTagName("li")
document.getElementById("demo").innerHTML= collection[0].innerHTML

collection[1].style.fontSize = "30px"
collection[1].style.color = "navy"


function ChangeColor(newColor){
    let btn = document.getElementById("para2");
    btn.style.color = newColor
}




