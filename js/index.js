// Your code goes here
let nav = document.querySelector(".nav-container");
nav.addEventListener("mouseover", () => {
    nav.style.backgroundColor = "blue";
})

let key = document.querySelector(".nav-link");
key.addEventListener("click", () => {

    key.style.color = "white"

    
})

let heading = document.querySelector(".text-content");
heading.addEventListener("mouseenter", () => {
    heading.style.backgroundColor = "red"
})


let timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(window.alert, 2000, 'That was really slow!');
}

let button = document.querySelector(".btn");
button.addEventListener("dblclick", delayedAlert)


key.addEventListener("drag", () => {
    key.textContent = "hello";
})

let image = document.querySelector(".btn")
image.addEventListener("wheel", () => {
    image.style.backgroundColor = "black";
})

let secondlink = document.getElementsByTagName("a")
secondlink[1].addEventListener("focus", () => {
    secondlink[1].style.fontSize = "20px"
})

let body = document.querySelector("body");
body.addEventListener("load", delayedAlert())

let logo = document.querySelector(".logo-heading")
function change (){
    logo.textContent = "Tobi!!!"
}
window.addEventListener("resize", change)

let destination = document.querySelector(".content-section");
destination.addEventListener("scoll", () => {
    destination.style.backgroundColor = "grey"
})

let AllNavigation = document.querySelectorAll("nav a");
AllNavigation.addEventListener("click", (event) => {
    event.preventDefault();
}, false)