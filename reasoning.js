// =====================================
// ORION REASONING ENGINE v1.3
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

result.priority =
"Current objective detected.";

}



//
// INTENT DETECTION
//

// COMPARISON / TRADEOFF

if(
objective.includes(" or ") ||
objective.includes("should i") ||
objective.includes("better") ||
objective.includes("versus") ||
objective.includes("vs")
){

result.priority =
"Decision comparison detected.";


result.recommendations.push(
"Compare both options based on long-term value, impact, and difficulty."
);


result.recommendations.push(
"Identify which option improves the foundation first."
);


result.recommendations.push(
"Choose the option that creates the greatest future capability."
);


}


// BUSINESS

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


// ORION DEVELOPMENT

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


// GENERAL PLANNING

else if(
objective.includes("plan") ||
objective.includes("goal") ||
objective.includes("focus")
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


// DEFAULT

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
