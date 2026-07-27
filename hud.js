// =====================================
// ORION HUD CONTROLLER
// System Visualization Layer
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


}



};



console.log(
"ORION HUD Controller Online."
);
