// =====================================
// ORION BRAIN SYSTEM v0.8
// =====================================

const ORION_BRAIN = {

status: "ONLINE",

model: "ORION LOCAL REASONING CORE",


think: function(input){

console.log("THINK STARTED")

let context =
ORION_CONTEXT.build(input);


input =
input.toLowerCase();


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



if(
context.importantMemories.length > 0
){

response +=
"<br><br>Based on your current priority: " +
context.importantMemories[0].information +
", I will consider this objective when providing guidance.";

}



return {

message: response,

context: context

};


}

};
