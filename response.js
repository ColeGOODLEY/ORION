// =====================================
// ORION RESPONSE SYSTEM
// Adaptive Learning Build 2.0
// Conversation Engine Integration
// =====================================


function generateResponse(command, decision, memories, knowledge, reasoning, comparison, evaluation, plan, goal, confidence, conversation){

let text =
command.toLowerCase();


// =====================================
// MEMORY STORAGE
// =====================================

if(text.startsWith("remember ")){

    const memory =
    command.substring(9).trim();

    let category = "facts";


    if(
        memory.includes("favorite") ||
        memory.includes("like") ||
        memory.includes("prefer")
    ){

        category = "preferences";

    }
    else if(
        memory.includes("goal") ||
        memory.includes("want") ||
        memory.includes("build")
    ){

        category = "goals";

    }
    else if(
        memory.includes("orion") ||
        memory.includes("project")
    ){

        category = "projects";

    }


    saveMemory(
        category,
        memory
    );


    return `

ORION ONLINE

Understood, Mr. Goodley.

I will remember:

"${memory}"

Memory has been successfully stored.

`;

}



// =====================================
// CLEAR LEARNING
// =====================================

if(text === "clear learning"){

    clearLearning();


    return `

ORION ONLINE

Learning history has been cleared successfully, Mr. Goodley.

Future decision analysis will begin building a new learning history.

`;

}



// =====================================
// LEARNING COUNT
// =====================================

if(
text === "learning count" ||
text === "how much have you learned"
){

    const count =
    learningCount("decisions");


    return `

ORION ONLINE

Current Learning Statistics

Stored Decision Records:

${count}

`;

}



// =====================================
// SHOW LEARNING
// =====================================

if(
text.includes("what have you learned") ||
text.includes("show learning") ||
text.includes("learning status")
){

    const learned =
    recallLearning("decisions");


    if(
        learned.length === 0
    ){

        return `

ORION ONLINE

I currently have no learned decision records, Mr. Goodley.

`;

    }


    let learningOutput = "";


    learned.forEach(item => {


        learningOutput += `

Decision:
${item.decision}

Reason:
${item.reason}

Command:
${item.command}

Recorded:
${item.timestamp}

--------------------

`;

    });



    return `

ORION ONLINE

Mr. Goodley,

Here are my current learning records:

${learningOutput}

I will continue using these records to improve future decision analysis.

`;

}



// =====================================
// CONVERSATION STATUS
// =====================================

if(
text.includes("conversation status")
){

return `

ORION CONVERSATION STATUS


Messages Stored:

${conversation ? conversation.length : 0}


Recent Context:

${conversation
.map(item =>
item.role + ": " + item.message
)
.join("\n")}


`;

}



// =====================================
// MEMORY RECALL
// =====================================

if(
text.includes("what do you remember") ||
text.includes("what do you know about me")
){

    const memories = [

        ...recallMemory("preferences"),
        ...recallMemory("goals"),
        ...recallMemory("projects"),
        ...recallMemory("facts")

    ];


    if(memories.length === 0){

        return `

ORION ONLINE

I currently have no stored personal memories, Mr. Goodley.

`;

    }


    return `

ORION ONLINE

Mr. Goodley,

Here is what I currently remember:

• ${memories.join("\n• ")}

`;

}



// =====================================
// GREETING
// =====================================

if(
text.includes("hello") ||
text.includes("hi") ||
text.includes("hey")
){

return `

ORION ONLINE

Good day, Mr. Goodley.

All primary systems are operational.

How may I assist you today, Sir?

`;

}



// =====================================
// IDENTITY
// =====================================

if(text.includes("who are you")){


return `

I am ORION, Sir.

Operational Research & Intelligence for Optimization and Navigation.

I am designed to assist with analysis, strategy, memory, decision support, planning, conversation awareness, and adaptive learning.

My purpose is to help you accomplish your objectives efficiently.

`;

}



// =====================================
// STATUS
// =====================================

if(
text.includes("conversation status")
){

if(!conversation){
    conversation = [];
}

return 

ORION SYSTEM STATUS

Core System:
ONLINE

Reasoning Engine:
ONLINE

Memory System:
ONLINE

Learning System:
ONLINE

Conversation Engine:
ONLINE

Decision Engine:
ONLINE

Planning System:
ONLINE

Goal Management:
ONLINE

Confidence Engine:
ONLINE

Personality Layer:
ACTIVE


Everything appears operational, Mr. Goodley.

`;

}



// =====================================
// CONFIDENCE ENGINE
// =====================================

if(
confidence &&
text.includes("confidence")
){

return `

ORION CONFIDENCE ANALYSIS


Confidence Score:

${confidence.score}%


Reasoning:

• ${confidence.reasoning.join("\n• ")}


`;

}



// =====================================
// PLANNING ENGINE
// =====================================

if(plan){

return `

ORION MISSION PLAN


Objective:

${plan.objective}


Current Phase:

${plan.currentPhase}


Completed Systems:

✓ ${plan.completed.join("\n✓ ")}


Next Objectives:

• ${plan.nextSteps.join("\n• ")}


Mission Status:

Planning engine is operational.

`;

}



// =====================================
// GOAL MANAGER
// =====================================

if(goal){

return `

ORION GOAL STATUS


Primary Goal:

${goal.primaryGoal}


Importance:

${goal.importance}


Current Focus:

${goal.currentFocus}


Progress:

${goal.progress}


Next Milestone:

${goal.nextMilestone}


`;

}



// =====================================
// RESPONSE BUILDING
// =====================================

let memorySection = "";


if(
memories &&
memories.length > 0
){

memorySection = `

Relevant Memory:

• ${memories.join("\n• ")}

`;

}



let knowledgeSection = "";


if(knowledge){

knowledgeSection = `

Strategic Context:

${knowledge}

`;

}



let reasoningSection = "";


if(
reasoning &&
reasoning.analysis
){

reasoningSection = `

Reasoning Analysis:

${reasoning.analysis}

`;

}



let comparisonSection = "";


if(
decision &&
decision.comparison
){

comparisonSection = `

Option Comparison:

${decision.comparison}

`;

}



let evaluationSection = "";


if(evaluation){

evaluationSection = `

Evaluation Analysis:

${evaluation.analysis}

${evaluation.optionAEvaluation}

${evaluation.optionBEvaluation}

`;

}



return `

ORION ONLINE

Sir, I have analyzed your request.

${knowledgeSection}

${reasoningSection}

${comparisonSection}

${evaluationSection}

${memorySection}

Assessment:

${decision.reason}


Recommendation:

${decision.decision}


Suggested Action:

${decision.action}


Awaiting your next instruction, Mr. Goodley.

`;

}
