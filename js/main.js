const opciones = ["turnOn", "turnOnSquirt", "turnOnMario"]

function turnScreenOn(){
    let screen = document.getElementById("screenOn");
    for(var i =0; i < opciones.length; i++){
        if (opciones[i] == "turnOn" || opciones[i] == "turnOnSquirt" || opciones[i] == "turnOnMario"){
            screen.classList.remove(`${opciones[i]}`);
        }
    }
    screen.classList.add("turnOn");
    let audio = new Audio();
    audio.play();
}

function turnScreenOnSquirt(){
    let screen = document.getElementById("screenOn");
    for(var i =0; i < opciones.length; i++){
        if (opciones[i] == "turnOn" || opciones[i] == "turnOnSquirt" || opciones[i] == "turnOnMario"){
            screen.classList.remove(`${opciones[i]}`);
        }
}
    screen.classList.add("turnOnSquirt");
}

function turnScreenOnMario(){
    let screen = document.getElementById("screenOn");
    for(var i =0; i < opciones.length; i++){
        if (opciones[i] == "turnOn" || opciones[i] == "turnOnSquirt" || opciones[i] == "turnOnMario"){
            screen.classList.remove(`${opciones[i]}`);
        }
}
    screen.classList.add("turnOnMario");
}

function turnScreenOff(){
    let main = document.getElementById("screenOn");
    for(var i =0; i < opciones.length; i++){
        if (opciones[i] == "turnOn" || opciones[i] == "turnOnSquirt" || opciones[i] == "turnOnMario"){
            main.classList.remove(`${opciones[i]}`);
        }
}}