function executeORION(){

let command =
document.getElementById("command").value;


let response =
document.getElementById("response");


if(command == ""){

response.innerHTML =
"Command required.";

}

else {


response.innerHTML =
"Command received.<br><br>" +
"Analyzing: " + command +
"<br><br>" +
"ORION is standing by.";


}


}


