// =====================================
// ORION RESPONSE ENGINE v1.0
// =====================================

const ORION_RESPONSE = {

process: function(command) {

const context = CONTEXT_ENGINE.analyze(command);

const memories = getAllMemories();

const reasoning = ORION_BRAIN.think(command);

const decision = ORION_DECISION.analyze(context, command);

return {

identity: ORION,

personality: ORION_PERSONALITY,

context: context,

memories: memories,

reasoning: reasoning,

decision: decision

};

},

buildResponse: function(result) {

return (
"ORION RESPONSE<br><br>" +

"<b>Priority</b><br>" +
result.decision.priority +

"<br><br><b>Reason</b><br>" +
result.decision.reason +

"<br><br><b>Recommended Action</b><br>" +
result.decision.actions[0]
);

}

};
