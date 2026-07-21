// =====================================
// ORION COMMAND SYSTEM v1.1
// =====================================


function executeORION(){


let command =
document.getElementById("command").value.toLowerCase().trim();


let response =
document.getElementById("response");



// EMPTY COMMAND

if(command == ""){

response.innerHTML =
"Command required.";

}



// STATUS

else if(command == "status"){

response.innerHTML =

"ORION SYSTEM STATUS:<br><br>" +

"AI CORE: ONLINE<br>" +

"MEMORY SYSTEM: ONLINE<br>" +

"CONTEXT ENGINE: ONLINE<br>" +

"REASONING ENGINE: ONLINE<br>" +

"DECISION ENGINE: ONLINE";

}



// IDENTITY

else if(command == "who are you"){

response.innerHTML =

"I am " +

ORION.name +

".<br><br>" +

"Version: " +

ORION.version +

"<br><br>Mission:<br>" +

ORION.mission;

}



// MISSION

else if(command == "mission"){

response.innerHTML =

"CURRENT MISSION:<br><br>" +

ORION.mission;

}



// HELP

else if(command == "help"){

response.innerHTML =

"AVAILABLE COMMANDS:<br><br>" +

"status<br>" +

"who are you<br>" +

"mission<br>" +

"think<br>" +

"remember<br>" +

"recall<br>" +

"clear memory";

}



// THINK COMMAND

else if(command.startsWith("think")){


let result =
ORION_BRAIN.think(command);



response.innerHTML =


"ORION BRAIN STATUS:<br><br>" +

result.message +



"<br><br><b>Strategic Priority:</b><br>" +

result.reasoning.priority +



"<br><br><b>Objective:</b><br>" +

result.reasoning.objective +



"<br><br><b>Recommended Actions:</b><br>" +

result.reasoning.recommendations.join("<br>") +



"<br><br><b>DECISION:</b><br>" +

result.decision.priority +



"<br><br><b>Decision Reason:</b><br>" +

result.decision.reason +



"<br><br><b>Decision Actions:</b><br>" +

result.decision.actions.join("<br>");


}



// REMEMBER COMMAND

else if(command.startsWith("remember")){


let memory =
command.replace("remember","").trim();



let category =
"general";



if(
memory.includes("favorite") ||
memory.includes("like")
){

category =
"preferences";

}


else if(
memory.includes("goal")
){

category =
"goals";

}



saveMemory(category,{

information:memory,

importance:"normal",

created:new Date().toLocaleString()

});



response.innerHTML =

"Memory stored.<br><br>" +

"Category: " +

category +

"<br><br>" +

"ORION will remember:<br>" +

memory;


}



// RECALL COMMAND

else if(command == "recall"){


response.innerHTML =

"ORION MEMORY BANK:<br><br>" +

JSON.stringify(
getAllMemories(),
null,
2
);


}



// CLEAR MEMORY

else if(command == "clear memory"){


clearMemory();



response.innerHTML =

"ORION memory bank cleared.";

}



// FALLBACK

else{


response.innerHTML =

"I have received your command, Mr. Goodley:<br><br>" +

command +

"<br><br>" +

"I am continuing to expand my capabilities,sir.";

}


}
