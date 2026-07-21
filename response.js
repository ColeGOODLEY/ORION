// =====================================
// ORION RESPONSE ENGINE v1.0
// =====================================

const ORION_RESPONSE = {

process:function(command){


let result =
ORION_BRAIN.think(command);


return {

message: result.message,

context: result.context,

reasoning: result.reasoning,

decision: result.decision

};


},


buildResponse:function(result){


return (

"ORION RESPONSE:<br><br>" +

result.message +

"<br><br><b>Strategic Priority:</b><br>" +

result.reasoning.priority +

"<br><br><b>Objective:</b><br>" +

result.reasoning.objective +

"<br><br><b>Recommended Actions:</b><br>" +

result.reasoning.recommendations.join("<br>") +

"<br><br><b>DECISION:</b><br>" +

result.decision.priority +

"<br><br><b>Decision Reason:</b><br>" +

result.decision.reason +

"<br><br><b>Decision Actions:</b><br>" +

result.decision.actions.join("<br>")

);


}


};
