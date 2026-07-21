// =====================================
// ORION DECISION ENGINE v1.0
// =====================================

const ORION_DECISION = {


analyze: function(context,input){


let decision = {

priority:"",
reason:"",
actions:[]

};



if(
context.importantMemories &&
context.importantMemories.length > 0
){


let goal =
context.importantMemories[0].information;



decision.priority =
goal;


decision.reason =
"This objective has been identified as a high importance goal.";



decision.actions.push(
"Continue developing core systems."
);


decision.actions.push(
"Improve reasoning capability."
);


decision.actions.push(
"Expand ORION functionality."
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
