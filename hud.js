// =====================================
// ORION HUD CONTROLLER
// System Visualization Layer
// Voice + State Integration Build 1.1
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





// =====================================
// ORION SYSTEM STATE
// =====================================


state(status){


const element =
document.getElementById(
"orion-state"
);



if(!element){

return;

}



element.innerHTML =
status;



},





// =====================================
// PROCESSING STATE
// =====================================


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



this.state(
"THINKING"
);



},





// =====================================
// READY STATE
// =====================================


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



this.state(
"IDLE"
);



},





// =====================================
// VOICE STATES
// =====================================


voiceListening(){


this.update(
"voice",
"LISTENING"
);


this.state(
"LISTENING"
);



},





voiceSpeaking(){


this.update(
"voice",
"SPEAKING"
);


this.state(
"SPEAKING"
);



},





voiceIdle(){


this.update(
"voice",
"IDLE"
);



if(!this.processing){

this.state(
"IDLE"
);

}



}



};



console.log(
"ORION HUD Controller Online."
);// =====================================
// ORION HUD CONTROLLER
// System Visualization Layer
// Voice + State Integration Build 1.1
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





// =====================================
// ORION SYSTEM STATE
// =====================================


state(status){


const element =
document.getElementById(
"orion-state"
);



if(!element){

return;

}



element.innerHTML =
status;



},





// =====================================
// PROCESSING STATE
// =====================================


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



this.state(
"THINKING"
);



},





// =====================================
// READY STATE
// =====================================


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



this.state(
"IDLE"
);



},





// =====================================
// VOICE STATES
// =====================================


voiceListening(){


this.update(
"voice",
"LISTENING"
);


this.state(
"LISTENING"
);



},





voiceSpeaking(){


this.update(
"voice",
"SPEAKING"
);


this.state(
"SPEAKING"
);



},





voiceIdle(){


this.update(
"voice",
"IDLE"
);



if(!this.processing){

this.state(
"IDLE"
);

}



}



};



console.log(
"ORION HUD Controller Online."
);
