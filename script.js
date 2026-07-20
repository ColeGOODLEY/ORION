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
"• help";

}


else if(command == "hello" || command == "hi"){

response.innerHTML =
"Good to see you, sir.<br><br>" +
"ORION is online and ready to assist.";

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
