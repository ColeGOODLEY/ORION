// =====================================
// ORION BRAIN SYSTEM
// Adaptive Intelligence Build 2.0
// Intent Recognition Engine
// =====================================


function analyzeCommand(command){


let text =
command.toLowerCase();



let intent =
"conversation";



let confidence =
"medium";



// =====================================
// MEMORY DETECTION
// =====================================

if(

text.includes("remember") ||

text.includes("what do you remember") ||

text.includes("what do you know about me") ||

text.includes("memory")

){

intent =
"memory";

confidence =
"high";

}



// =====================================
// PERSONALITY DETECTION
// =====================================

else if(

text.includes("who are you") ||

text.includes("personality") ||

text.includes("what are you like") ||

text.includes("describe yourself")

){

intent =
"personality";

confidence =
"high";

}



// =====================================
// SYSTEM STATUS
// =====================================

else if(

text.includes("status") ||

text.includes("systems") ||

text.includes("diagnostic")

){

intent =
"status";

confidence =
"high";

}



// =====================================
// DECISION DETECTION
// =====================================

else if(

text.includes("should") ||

text.includes("choose") ||

text.includes("decide") ||

text.includes("best option") ||

text.includes("which")

){

intent =
"decision";

confidence =
"high";

}



// =====================================
// PLANNING DETECTION
// =====================================

else if(

text.includes("plan") ||

text.includes("mission") ||

text.includes("roadmap") ||

text.includes("next step")

){

intent =
"planning";

confidence =
"high";

}



// =====================================
// GOAL DETECTION
// =====================================

else if(

text.includes("goal") ||

text.includes("objective") ||

text.includes("target") ||

text.includes("progress")

){

intent =
"goal";

confidence =
"high";

}



// =====================================
// CONFIDENCE DETECTION
// =====================================

else if(

text.includes("confidence") ||

text.includes("certainty") ||

text.includes("sure")

){

intent =
"confidence";

confidence =
"high";

}



// =====================================
// GREETING DETECTION
// =====================================

else if(

text.includes("hello") ||

text.includes("hi") ||

text.includes("hey")

){

intent =
"greeting";

confidence =
"high";

}



// =====================================
// RETURN ANALYSIS
// =====================================

return {


intent:

intent,


confidence:

confidence,


command:

command


};


}
