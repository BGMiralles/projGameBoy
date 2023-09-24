const opciones = ["turnOn", "turnOn1"]

function turnScreenOn(){
    let screen = document.getElementById("screenOn");
    for(var i =0; i < opciones.length; i++){
        if (opciones[i] == "turnOn" || opciones[i] == "turnOn1"){
            screen.classList.remove(`${opciones[i]}`);
        }
    }
    screen.classList.add("turnOn");
    let audio = new Audio();
    audio.src = "../sound/gameboy-1.mp3";
    audio.play();
}

function turnScreenOn1(){
    let screen = document.getElementById("screenOn");
    for(var i =0; i < opciones.length; i++){
        if (opciones[i] == "turnOn" || opciones[i] == "turnOn1"){
            screen.classList.remove(`${opciones[i]}`);
        }
}
    screen.classList.add("turnOn1");
}

function turnScreenOff(){
    let main = document.getElementById("screenOn");
    for(var i =0; i < opciones.length; i++){
        if (opciones[i] == "turnOn" || opciones[i] == "turnOn1"){
            main.classList.remove(`${opciones[i]}`);
        }
}}