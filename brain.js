// =====================================
// ORION BRAIN SYSTEM v0.8
// =====================================

const ORION_BRAIN = {

status: "ONLINE",

model: "ORION LOCAL REASONING CORE",


think: function(input){


let context = {};


input = input.toLowerCase();


let response =
"ORION is processing your request.";



if(
input.includes("plan") ||
input.includes("strategy") ||
input.includes("goal")
){

response =
"Strategic analysis activated. I will evaluate the objective, consider key factors, and help create an efficient path forward.";

}


else if(
input.includes("memory") ||
input.includes("remember")
){

response =
"Memory systems are online. I will analyze stored information and relevant context.";

}


else if(
input.includes("what") ||
input.includes("why") ||
input.includes("how")
){

response =
"Analysis mode activated. I will examine the situation, identify key factors, and provide a solution.";

}


else{

response =
"I have processed your request and am ready for further instructions.";

}



// MEMORY AWARENESS

if(
context.importantMemories &&
context.importantMemories.length > 0
){

let goal =
context.importantMemories[0];


if(goal.information){

response +=
"<br><br>Based on your current priority: " +
goal.information +
", I will consider this objective when providing guidance.";

}




return {

message: response,

input: input,

context: context,

importantMemories:
context.importantMemories,

personality:
ORION_PERSONALITY.name,

role:
ORION_PERSONALITY.role

};


}

};
