// =====================================
// ORION CORE
// Adaptive Intelligence Build 2.3
// Decision Routing Priority Fix
// Central Processing System
// =====================================


const ORION = {


async process(command){


try{


// =====================================
// BRAIN ANALYSIS
// =====================================

const brain =
analyzeCommand(command);



// =====================================
// AI BRAIN ROUTING
// Conversation Only
// =====================================

if(brain.intent === "conversation"){


const aiResponse =
await processBrain(command);



if(
aiResponse &&
aiResponse.source === "AI_BRAIN"
){


return generateResponse(

    command,

    null,

    getRelevantMemories(command),

    null,

    null,

    null,

    null,

    null,

    null,

    null,

    getConversationContext(),

    ORION_PERSONALITY.getBehavior(
        ORION_PERSONALITY.getStyle(command)
    ),

    aiResponse.response

);


}


}



// =====================================
// PERSONALITY ANALYSIS
// =====================================

const personalityStyle =
ORION_PERSONALITY.getStyle(command);


const personality =
ORION_PERSONALITY.getBehavior(
    personalityStyle
);



// =====================================
// CONVERSATION CAPTURE
// =====================================

saveConversation(
    "user",
    command
);


const conversation =
getConversationContext();



// =====================================
// CONTEXT SYSTEM
// =====================================

const context =
getContext(command);



// =====================================
// MEMORY SYSTEM
// =====================================

const personalMemories =
getRelevantMemories(command);



// =====================================
// KNOWLEDGE SYSTEM
// =====================================

const knowledge =
integrateKnowledge(
    personalMemories
);



// =====================================
// RESPONSE ONLY MODES
// =====================================


// Personality

if(
brain.intent === "personality"
){

return generateResponse(
    command,
    {},
    personalMemories,
    knowledge,
    null,
    null,
    null,
    null,
    null,
    null,
    conversation,
    personality
);

}



// Status

if(
brain.intent === "status"
){

return generateResponse(
    command,
    {},
    personalMemories,
    knowledge,
    null,
    null,
    null,
    null,
    null,
    null,
    conversation,
    personality
);

}



// Memory

if(
brain.intent === "memory"
){

return generateResponse(
    command,
    {},
    personalMemories,
    knowledge,
    null,
    null,
    null,
    null,
    null,
    null,
    conversation,
    personality
);

}



// =====================================
// FULL REASONING PIPELINE
// =====================================


const reasoning =
processReasoning(
    command,
    brain,
    context,
    personalMemories,
    knowledge,
    conversation
);



const comparison =
compareOptions(command);



const evaluation =
evaluateDecision(
    command,
    comparison,
    knowledge
);



const decision =
makeDecision(
    command,
    comparison,
    knowledge,
    reasoning
);



// =====================================
// CONFIDENCE ENGINE
// =====================================

const confidence =
calculateConfidence(
    command,
    decision,
    personalMemories,
    recallLearning("decisions")
);



// =====================================
// PLANNING ENGINE
// =====================================

const plan =
createPlan(command);



// =====================================
// GOAL MANAGEMENT
// =====================================

const goal =
manageGoals(command);



// =====================================
// LEARNING CAPTURE
// =====================================

if(

decision &&

decision.decision &&

decision.decision !== "No decision required."

){

saveLearning(
    "decisions",
    {

        command:
        command,


        decision:
        decision.decision,


        reason:
        decision.reason,


        timestamp:
        new Date().toISOString()

    }
);

}



// =====================================
// FINAL RESPONSE
// =====================================


return generateResponse(
    command,
    decision,
    personalMemories,
    knowledge,
    reasoning,
    comparison,
    evaluation,
    plan,
    goal,
    confidence,
    conversation,
    personality,
    null
);



}



catch(error){


return `

ORION DIAGNOSTIC ERROR


System failed while processing command.


Error:

${error.message}


Please check system modules.

`;

}



}


};
