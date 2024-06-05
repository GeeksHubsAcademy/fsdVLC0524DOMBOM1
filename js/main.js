
let interruptor = false;
let square = document.getElementById("square");
let buttons = document.getElementsByClassName("mini-square");
let title = document.getElementById("title");
let info = document.getElementById("info");

//Buttons contiene varios elementos de tipo HTMLElement, en este caso botones div

//Como todos comparten la misma clase, son una HTMLCollection..tenemos que transformarla a Array

let arrayBotones = Array.from(buttons)
console.log(arrayBotones)
//Eventos...

//Ahora quiero dar A CADA UNO DE LOS BOTONES, LA PROPIEDAD ADDEVENTLISTENER

for(let i = 0; i < arrayBotones.length; i++){
    arrayBotones[i].addEventListener("click", () => {
        if(interruptor){
            console.log(`Has pulsado el botón ${i+1}`)
            title.innerHTML = `Estás viendo el canal ${i+1}`
        }
    })
}

square.addEventListener("click", () => {
    square.classList.toggle("on")
    interruptor = !interruptor
    
    interruptor 
        ? title.innerHTML = "TV encendida"
        : title.innerHTML = "TV apagada"
})

info.addEventListener("click", () => {
    let date = new Date();
    info.innerHTML = `${date}`;
})
