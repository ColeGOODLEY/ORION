function executeORION(){


let command =
document.getElementById("command").value.toLowerCase().trim();

let command =
document.getElementById("command").value.toLowerCase().trim();


let response =
document.getElementById("response");


if(command == ""){

response.innerHTML =
"Command required.";

}


else if(command == "status"){

response.innerHTML =
"ORION SYSTEM STATUS<br><br>" +
"AI CORE: ONLINE<br>" +
"MEMORY: READY<br>" +
"VERSION: 0.5";

}


else if(command == "mission"){

response.innerHTML =
"CURRENT MISSION:<br><br>" +
"Continue developing ORION into a personal AI operating system.";

}


else if(command == "help"){

response.innerHTML =
"AVAILABLE COMMANDS:<br><br>" +
"• status<br>" +
"• mission<br>" +
"• help<br>" +
"• who are you<br>" +
"• think<br>" +
"• remember [information]<br>" +
"• what do you know about me<br>" +
"• recall";

}


else if(command == "think"){

let result =
ORION_BRAIN.think(command);


response.innerHTML =
"ORION BRAIN STATUS:<br><br>" +
result.message;

}

else if(command == "who are you"){

response.innerHTML =
"I am " + ORION.name +
".<br><br>" +

"Version: " + ORION.version +
"<br><br>" +

"Mission:<br>" +
ORION.mission;

}


else if(
command == "hello" ||
command == "hi" ||
command == "hey" ||
command == "good morning" ||
command == "good evening"
){

response.innerHTML =
"Good to see you, sir.<br><br>" +
"ORION is online and ready to assist.";

}


else if(command.startsWith("remember")){

let memory =
command.replace("remember","").trim();


let category = "general";


if(memory.includes("favorite color") ||
memory.includes("favorite food")){

category = "preferences";

}

else if(memory.includes("goal")){

category = "goals";

}


saveMemory(category,memory);


response.innerHTML =
"Memory stored.<br><br>" +
"Category: " +
category +
"<br><br>" +
"ORION will remember:<br>" +
memory;

}


else if(command.includes("favorite color")){

let result =
searchMemory("favorite color");


if(result && result.length > 0){

response.innerHTML =
"Your favorite color is:<br><br>" +
result[0];

}

else{

response.innerHTML =
"I do not have your favorite color stored yet.";

}

}
else if(command.includes("what do you know about me")){

let memories =
getAllMemories();

let knowledge = "";


for(let category in memories){

if(Array.isArray(memories[category])){

knowledge +=
"<b>" + category + ":</b><br>";


memories[category].forEach(function(item){

knowledge +=
"• " + item + "<br>";

});


knowledge += "<br>";

}

}

response.innerHTML =
knowledge ?

"Here is what I know about you:<br><br>" + knowledge :

"I do not have any stored information about you yet.";

}


else if(command == "recall"){

response.innerHTML =
"ORION MEMORY BANK:<br><br>" +
JSON.stringify(getAllMemories());

}


else if(command == "joke"){

response.innerHTML =
"Humor module activated.<br><br>" +
"Your productivity system has detected a suspicious amount of procrastination. Investigation underway.";

}


else{

response.innerHTML =
"Command received:<br><br>" +
command +
"<br><br>" +
"I apologize sir, I do not recognize this command yet. I will continue learning.";

}
}
