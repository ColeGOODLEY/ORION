// =====================================
// ORION RESPONSE ENGINE v1.0
// =====================================

const ORION_RESPONSE = {

process: function(command) {

let result =
ORION_BRAIN.think(command);


return {

context: result.context,

reasoning: result.reasoning,

decision: result.decision

};

},


buildResponse: function(result) {

return (

"ORION RESPONSE<br><br>" +

"<b>Strategic Priority:</b><br>" +
result.reasoning.reasoning.priority +

"<br><br><b>Objective:</b><br>" +
result.reasoning.reasoning.objective +

"<br><br><b>Decision:</b><br>" +
result.decision.priority +

"<br><br><b>Decision Reason:</b><br>" +
result.decision.reason +

"<br><br><b>Decision Actions:</b><br>" +
result.decision.actions.join("<br>")

);

}

};
