// =====================================
// ORION DECISION ENGINE v1.7
// =====================================

const ORION_DECISION = {


scoreOption:function(value,foundation,risk){

return (
value +
foundation -
risk
);

},


analyze:function(reasoning,input){


let decision = {

priority:"No priority detected.",

reason:"No decision available.",

actions:[]

};



let objective =
reasoning.objective.toLowerCase();



//
// GENERAL COMPARISON DECISION
//

if(
objective.includes("should i") ||
objective.includes(" or ") ||
objective.includes("compare") ||
objective.includes("versus") ||
objective.includes("vs")
){



//
// MEMORY VS TOOLS / INTERNET
//

if(
objective.includes("memory") &&
(
objective.includes("tool") ||
objective.includes("internet") ||
objective.includes("access")
)
){


let memoryScore =
this.scoreOption(9,10,2);


let toolsScore =
this.scoreOption(8,5,4);



if(memoryScore > toolsScore){


decision.priority =
"Improve ORION memory systems first.";


decision.reason =
"Memory creates stronger long-term value because it improves personalization, context, and the effectiveness of future capabilities.";


decision.actions.push(
"Improve memory storage and retrieval accuracy."
);


decision.actions.push(
"Test memory recall and relevance."
);


decision.actions.push(
"Add advanced capabilities after the foundation is reliable."
);


}


else{


decision.priority =
"Add external capabilities first.";


decision.reason =
"The current objective suggests external capabilities provide the greatest immediate value.";


decision.actions.push(
"Add and test new capabilities."
);


decision.actions.push(
"Measure usefulness."
);


decision.actions.push(
"Improve systems based on results."
);


}


}


//
// ORION VS USERS / BUSINESS VALIDATION
//

else if(
objective.includes("user") ||
objective.includes("customer") ||
objective.includes("business") ||
objective.includes("revenue")
){


decision.priority =
"Validate real-world value before expanding development.";


decision.reason =
"Improving ORION increases capability, but users and real-world feedback determine whether the system creates meaningful value.";


decision.actions.push(
"Identify potential users and their needs."
);


decision.actions.push(
"Test the current version with real feedback."
);


decision.actions.push(
"Improve ORION based on validated demand."
);


}



//
// GENERAL COMPARISON FALLBACK
//

else{


decision.priority =
"Evaluate both options based on long-term value.";


decision.reason =
"The best choice depends on impact, risk, effort, and future opportunity.";


decision.actions.push(
"Compare the advantages and disadvantages of each option."
);


decision.actions.push(
"Identify the highest-impact action."
);


decision.actions.push(
"Measure results and adjust."
);


}


}



//
// BUSINESS DECISION
//

else if(
objective.includes("business") ||
objective.includes("brand") ||
objective.includes("revenue")
){


decision.priority =
"Validate the business opportunity first.";


decision.reason =
"A strong business begins with understanding the customer, the problem, and the value being created before expanding execution.";


decision.actions.push(
"Define the target customer."
);


decision.actions.push(
"Identify the problem being solved."
);


decision.actions.push(
"Create a measurable execution plan."
);


}



//
// ORION DEVELOPMENT DECISION
//

else if(
objective.includes("orion") ||
objective.includes("ai")
){


decision.priority =
"Strengthen ORION's core systems first.";


decision.reason =
"Reliable foundations improve every future capability. Core intelligence, memory, and reasoning should be stable before adding complexity.";


decision.actions.push(
"Improve system reliability."
);


decision.actions.push(
"Test reasoning and memory behavior."
);


decision.actions.push(
"Expand capabilities gradually."
);


}



//
// DEFAULT DECISION
//

else{


decision.priority =
"Take the highest-value next action.";


decision.reason =
"The decision is based on long-term impact, efficiency, and progress toward the objective.";


decision.actions.push(
"Evaluate the current situation."
);


decision.actions.push(
"Choose the most valuable action."
);


decision.actions.push(
"Measure results and improve."
);


}



return decision;


}


};
