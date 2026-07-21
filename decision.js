// =====================================
// ORION DECISION ENGINE v1.2
// =====================================

const ORION_DECISION = {


analyze:function(reasoning,input){


let decision = {


priority:"No decision made.",

reason:"Insufficient information.",

actions:[]

};



if(
reasoning &&
reasoning.objective &&
reasoning.objective !== "No objective detected."
){



decision.priority =
"Improve ORION's core systems first.";



decision.reason =
"The foundation of ORION determines the reliability of every future capability. Strengthening the core systems creates the highest long-term value before adding more advanced features.";



decision.actions.push(
"Review and improve current ORION architecture."
);


decision.actions.push(
"Test existing systems for stability."
);


decision.actions.push(
"Only add new capabilities after the foundation is reliable."
);



}



return decision;


}


};
