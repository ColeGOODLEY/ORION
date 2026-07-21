// =====================================
// ORION REASONING ENGINE v1.4
// =====================================

const ORION_REASONING = {


analyze:function(context,input){


let result = {

objective:"No objective detected.",

priority:"No priority detected.",

recommendations:[]

};



let objective =
input
.toLowerCase()
.replace("think","")
.trim();



//
// CURRENT OBJECTIVE
//

if(objective !== ""){

result.objective = objective;

}



//
// COMPARISON / TRADEOFF ANALYSIS
//

if(
objective.includes(" or ") ||
objective.includes("versus") ||
objective.includes(" vs ") ||
objective.includes("compare") ||
objective.includes("comparison")
){

result.priority =
"Decision comparison detected.";


result.recommendations.push(
"Compare each option based on long-term value, impact, and difficulty."
);


result.recommendations.push(
"Identify the advantages and disadvantages of each option."
);


result.recommendations.push(
"Choose the option that creates the greatest future benefit."
);


}



//
// BUSINESS STRATEGY
//

else if(
objective.includes("business") ||
objective.includes("money") ||
objective.includes("brand") ||
objective.includes("revenue")
){

result.priority =
"Business objective detected.";


result.recommendations.push(
"Define the target customer and value proposition."
);


result.recommendations.push(
"Create an execution plan with measurable goals."
);


result.recommendations.push(
"Prioritize actions that increase revenue potential."
);


}



//
// ORION DEVELOPMENT
//

else if(
objective.includes("orion") ||
objective.includes("ai")
){

result.priority =
"ORION development objective detected.";


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



//
// DAILY FOCUS / PROGRESS PLANNING
//

else if(
objective.includes("today") ||
objective.includes("focus") ||
objective.includes("progress") ||
objective.includes("next step")
){

result.priority =
"Progress planning objective detected.";


result.recommendations.push(
"Identify the highest-impact task available right now."
);


result.recommendations.push(
"Prioritize actions that create measurable progress."
);


result.recommendations.push(
"Complete the next important step before expanding scope."
);


}



//
// GENERAL GOAL / PLAN
//

else if(
objective.includes("plan") ||
objective.includes("goal")
){

result.priority =
"Planning objective detected.";


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



//
// DEFAULT ANALYSIS
//

else{


result.priority =
"General analysis detected.";


result.recommendations.push(
"Analyze the objective carefully."
);


result.recommendations.push(
"Identify important factors."
);


result.recommendations.push(
"Choose the most valuable next action."
);


}



return result;


}


};
