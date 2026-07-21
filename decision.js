// =====================================
// ORION DECISION ENGINE v1.1
// =====================================

const ORION_DECISION = {


analyze: function(reasoning,input){


let decision = {

priority:"",
reason:"",
actions:[]

};



if(
reasoning &&
reasoning.objective &&
reasoning.objective !== "No objective detected."
){


decision.priority =
reasoning.objective;


decision.reason =
"This objective has been identified as a high priority goal based on ORION reasoning.";



decision.actions.push(
"Continue developing ORION's core systems."
);


decision.actions.push(
"Improve reasoning capability."
);


decision.actions.push(
"Expand ORION functionality carefully."
);


}



else{


decision.priority =
"No priority detected.";


decision.reason =
"Additional information is needed.";


decision.actions.push(
"Create or define a goal."
);


}



return decision;


}


};
