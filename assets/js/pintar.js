// let ele = document.querySelector("#ele1")
// ele.style.backgroundColor= "green"
// ele.addEventListener("click", 
// function pintar(){
//     ele.style.backgroundColor = "yellow"
// })

let ele = document.querySelector("#ele1")
ele.style.backgroundColor= "green"
//ele.setAttribute ('style','background-color: green')

let paint= function(element,color){
    element.style.backgroundColor= color
    }


ele.addEventListener('click', () => paint(ele,'yellow'))



