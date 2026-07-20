function executeORION(){

let command =
document.getElementById("command").value.toLowerCase();


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
"VERSION: 0.3";

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
"• remember [information]<br>" +
"• recall";
}


else if(
command.includes("hello") ||
command.includes("hi") ||
command.includes("hey") ||
command.includes("good morning") ||
command.includes("good evening")
){

response.innerHTML =
"Good to see you, sir.<br><br>" +
"ORION is online and ready to assist.";

}

else if(command.startsWith("remember")){

let memory =
command.replace("remember", "").trim();


let category = "general";


if(memory.includes("favorite color")){

category = "preferences";

}

else if(memory.includes("favorite food")){

category = "preferences";

}

else if(memory.includes("goal")){

category = "goals";

}


saveMemory(category, memory);


response.innerHTML =
"Memory stored.<br><br>" +
"Category: " +
category +
"<br><br>" +
"ORION will remember:<br>" +
memory;

}


else if(command.includes("favorite")){

response.innerHTML =
"ORION MEMORY SEARCH ACTIVATED";

}

else if(command == "recall"){

let memories =
getAllMemories();


response.innerHTML =
"ORION MEMORY BANK:<br><br>" +
JSON.stringify(memories);

}
else if(command == "joke"){

response.innerHTML =
"Humor module activated.<br><br>" +
"Your productivity system has detected a suspicious amount of procrastination. Investigation underway.";

}


else {

response.innerHTML =
"Command received:<br><br>" +
command +
"<br><br>" +
"I apologize sir, I do not recognize this command yet. I will continue learning.";

}

}
