var btnCart=document.getElementById("btn-cart1")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
    let carth1=document.getElementById("carth1")
    carth1.innerText("veg-pulav")
})
var btnCart=document.getElementById("btn-cart2")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})
var btnCart=document.getElementById("btn-cart3")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})
var btnCart=document.getElementById("btn-cart4")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})
var btnCart=document.getElementById("btn-cart5")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})
var btnCart=document.getElementById("btn-cart6")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})
var btnCart=document.getElementById("btn-cart7")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})
var btnCart=document.getElementById("btn-cart8")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})








let nonVeg=document.getElementById("nonveg")
nonVeg.addEventListener("click",()=>{
    nonVeg.style.backgroundColor="#D6C0B3"
    nonVeg.style.color="white"
    let nonVegBox=document.getElementById("nonvegBox")
    nonVegBox.style.display="block"
    let VegBox=document.getElementById("vegBox")
    VegBox.style.display="none"

    let veg=document.getElementById("veg")
    veg.style.backgroundColor="white"
    veg.style.color="black"
    
})
let Veg=document.getElementById("veg")
Veg.addEventListener("click",()=>{
    Veg.style.backgroundColor="#D6C0B3"
    Veg.style.color="white"
    let nonVegBox=document.getElementById("nonvegBox")
    nonVegBox.style.display="none"
    let VegBox=document.getElementById("vegBox")
    VegBox.style.display="block"

    let nonveg=document.getElementById("nonveg")
    nonveg.style.backgroundColor="white"
    nonveg.style.color="black"
    
})
var btnCart=document.getElementById("btncart1")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})
var btnCart=document.getElementById("btncart2")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})
var btnCart=document.getElementById("btncart3")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})
var btnCart=document.getElementById("btncart4")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})
var btnCart=document.getElementById("btncart5")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})
var btnCart=document.getElementById("btncart6")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})
var btnCart=document.getElementById("btncart7")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})
var btnCart=document.getElementById("btncart8")
btnCart.addEventListener("click",()=>{
    alert("Your Item Added!!")
})

let svg = document.getElementById("svg")
svg.addEventListener("click",()=>{
    window.open("./addtocart.html","_self")
})