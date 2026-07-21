// =====================================
// ORION DECISION ENGINE v1.5
// =====================================

const ORION_DECISION = {


analyze:function(reasoning,input){


let decision = {

priority:"No priority detected.",

reason:"No decision available.",

actions:[]

};



let objective =
reasoning.objective.toLowerCase();



//
// MEMORY VS TOOLS DECISION
//

if(
objective.includes("memory") &&
objective.includes("tool")
){


decision.priority =
"Improve ORION memory systems first.";


decision.reason =
"Memory is a foundation capability. A stronger memory system improves personalization, context, and future tool performance. Building tools before ORION can reliably use information creates less long-term value.";


decision.actions.push(
"Improve memory storage and retrieval accuracy."
);


decision.actions.push(
"Test memory recall and relevance."
);


decision.actions.push(
"Add advanced tools after the foundation is reliable."
);


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
