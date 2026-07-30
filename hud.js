// =====================================
// ORION HUD CONTROLLER
// System Visualization Layer
// Voice Integration Build 1.0
// =====================================


const ORION_HUD = {


update(system,status){


const element =
document.getElementById(
system + "-status"
);



if(!element){

return;

}



element.innerHTML =
status;



},




processing(){


this.update(
"brain",
"PROCESSING"
);


this.update(
"memory",
"ACCESSING"
);


this.update(
"learning",
"ACTIVE"
);


this.update(
"planning",
"THINKING"
);


},




ready(){


this.update(
"brain",
"READY"
);


this.update(
"memory",
"ONLINE"
);


this.update(
"learning",
"ACTIVE"
);


this.update(
"planning",
"READY"
);


},




// =====================================
// VOICE STATUS
// =====================================


voiceListening(){


this.update(
"voice",
"LISTENING"
);


},




voiceSpeaking(){


this.update(
"voice",
"SPEAKING"
);


},




voiceIdle(){


this.update(
"voice",
"IDLE"
);


}



};



console.log(
"ORION HUD Controller Online."
);
