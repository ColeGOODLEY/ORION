// =====================================
// ORION REASONING ENGINE v1.2
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
// IDENTIFY CURRENT OBJECTIVE FIRST
//

if(command !== ""){

result.objective = command;

result.priority =
"Current objective detected.";

}


//
// USE MEMORY IF NO CURRENT OBJECTIVE
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
// OBJECTIVE SPECIFIC RECOMMENDATIONS
//

let objective =
result.objective.toLowerCase();


else if(
objective.includes(" or ") ||
objective.includes("should i") ||
objective.includes("better") ||
objective.includes("versus") ||
objective.includes("vs")
){

result.recommendations.push(
"Compare both options based on long-term value, impact, and implementation difficulty."
);

result.recommendations.push(
"Identify which option improves the system foundation first."
);

result.recommendations.push(
"Choose the option that creates the greatest future capability."
);

}
if(
objective.includes("orion")
||
objective.includes("ai")
){

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


else if(
objective.includes("business")
||
objective.includes("money")
||
objective.includes("brand")
){

result.recommendations.push(
"Define the target customer and value proposition."
);

result.recommendations.push(
"Create a clear execution plan with measurable goals."
);

result.recommendations.push(
"Prioritize actions that increase revenue potential."
);

}


else if(
objective.includes("plan")
||
objective.includes("goal")
){

result.recommendations.push(
"Break the objective into smaller actionable steps."
);

result.recommendations.push(
"Identify the highest-value action first."
);

result.recommendations.push(
"Review progress and adjust strategy."
);

}


else{


result.recommendations.push(
"Analyze the objective carefully."
);

result.recommendations.push(
"Identify important factors and possible solutions."
);

result.recommendations.push(
"Choose the highest-value next action."
);

}



return result;


}


};
