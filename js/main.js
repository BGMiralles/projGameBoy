const opciones = ["turnOn", "turnOnSquirt", "turnOnMario"]
let audio = new Audio();

function turnScreenOn(){
    let audio = document.getElementById("miAudioStart");
    let screen = document.getElementById("screenOn");
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
    let screen = document.getElementById("screenOn");
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
    let screen = document.getElementById("screenOn");
    for(var i =0; i < opciones.length; i++){
        if (opciones[i] == "turnOn" || opciones[i] == "turnOnSquirt" || opciones[i] == "turnOnMario"){
            screen.classList.remove(`${opciones[i]}`);
        }
}
    screen.classList.add("turnOnMario");
    audio.play();
}

function turnScreenOff(){
    let main = document.getElementById("screenOn");
    for(var i =0; i < opciones.length; i++){
        if (opciones[i] == "turnOn" || opciones[i] == "turnOnSquirt" || opciones[i] == "turnOnMario"){
            main.classList.remove(`${opciones[i]}`);
        }
}}