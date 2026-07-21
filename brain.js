// =====================================
// ORION BRAIN SYSTEM v0.7
// =====================================

const ORION_BRAIN = {

status: "ONLINE",

model: "ORION LOCAL REASONING CORE",

think: function(input){

let context =
ORION_CONTEXT.build(input);


let response =
"ORION is analyzing your request.";

input = input.toLowerCase();


// Strategic reasoning

if(
input.includes("plan") ||
input.includes("strategy") ||
input.includes("goal")
){

response =
"Strategic analysis activated. I will evaluate the objective, consider long-term impact, and help create an efficient path forward.";

}


// Memory reasoning

else if(
input.includes("memory") ||
input.includes("remember")
){

response =
"Memory systems are online. I will review stored information and determine what is relevant.";

}


// Analysis reasoning

else if(
input.includes("what") ||
input.includes("why") ||
input.includes("how")
){

response =
"Analysis mode activated. I will examine the situation, identify key factors, and provide a solution.";

}


// Personality response

else{

response =
"I have processed your request. I am ready to assist with analysis, planning, and execution.";

}


return {

message: response,

input: input,

context: context,

importantMemories: context.importantMemories,

personality: ORION_PERSONALITY.name,

role: ORION_PERSONALITY.role

};

}

};
