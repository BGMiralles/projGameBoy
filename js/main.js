const opciones = ["turnOn", "turnOnSquirt", "turnOnMario"]
const screen = document.getElementById("screenOn");
let audio = new Audio();

function turnScreenOn(){
    let audio = document.getElementById("miAudioStart");
    for(var i =0; i < opciones.length; i++){
        if (opciones[i] == "turnOn" || opciones[i] == "turnOnSquirt" || opciones[i] == "turnOnMario"){
            screen.classList.remove(`${opciones[i]}`);
        }
    }
    screen.classList.add("turnOn");
    audio.play();
}

function turnScreenOnSquirt(){
    let audio = document.getElementById("miAudioA");
    for(var i =0; i < opciones.length; i++){
        if (opciones[i] == "turnOn" || opciones[i] == "turnOnSquirt" || opciones[i] == "turnOnMario"){
            screen.classList.remove(`${opciones[i]}`);
        }
    }
    screen.classList.add("turnOnSquirt");
    audio.play();
}

function turnScreenOnMario(){
    let audio = document.getElementById("miAudioB");
    for(var i =0; i < opciones.length; i++){
        if (opciones[i] == "turnOn" || opciones[i] == "turnOnSquirt" || opciones[i] == "turnOnMario"){
            screen.classList.remove(`${opciones[i]}`);
        }
}
    screen.classList.add("turnOnMario");
    audio.play();
}

function turnScreenOff(){
    for(var i =0; i < opciones.length; i++){
        if (opciones[i] == "turnOn" || opciones[i] == "turnOnSquirt" || opciones[i] == "turnOnMario"){
            screen.classList.remove(`${opciones[i]}`);
        }
}}