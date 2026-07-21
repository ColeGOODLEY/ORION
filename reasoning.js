// =====================================
// ORION REASONING ENGINE v1.1
// =====================================

const ORION_REASONING = {


analyze:function(context,input){


let result = {


objective:"No objective detected.",

priority:"No priority detected.",

recommendations:[]

};


let command =
input
.toLowerCase()
.replace("think","")
.trim();



//
// CURRENT REQUEST FIRST
//

if(command !== ""){


result.objective = command;

result.priority =
"Current objective detected.";


}


//
// MEMORY SECOND
//

else if(
context.relevantMemories &&
context.relevantMemories.length > 0
){


result.objective =
context.relevantMemories[0].information;


result.priority =
"Relevant objective detected.";


}


else if(
context.importantMemories &&
context.importantMemories.length > 0
){


result.objective =
context.importantMemories[0].information;


result.priority =
"High importance objective detected.";


}



//
// RECOMMENDATIONS
//

if(
result.objective
.toLowerCase()
.includes("feature")
){


result.recommendations.push(
"Evaluate the highest-value capability to develop next."
);


result.recommendations.push(
"Consider user impact, complexity, and long-term value."
);


result.recommendations.push(
"Test the feature before expanding the system."
);


}


else{


result.recommendations.push(
"Continue improving ORION's core systems."
);


result.recommendations.push(
"Improve reasoning accuracy."
);


result.recommendations.push(
"Expand capabilities carefully."
);


}



return result;


}


};
