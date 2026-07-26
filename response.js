// =====================================
// ORION RESPONSE SYSTEM
// Adaptive Intelligence Build 2.2
// Complete Module Integration
// =====================================


function generateResponse(
    command,
    decision,
    memories,
    knowledge,
    reasoning,
    comparison,
    evaluation,
    plan,
    goal,
    confidence,
    conversation
){


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
// LEARNING STATUS
// =====================================

if(
text.includes("learning count") ||
text.includes("how much have you learned")
){

const count =
learningCount("decisions");


return `

ORION LEARNING STATUS

Stored Decision Records:

${count}

Learning engine remains active.

`;

}



// =====================================
// SHOW LEARNING
// =====================================

if(
text.includes("show learning") ||
text.includes("what have you learned") ||
text.includes("learning status")
){

const learned =
recallLearning("decisions");


if(
!learned ||
learned.length === 0
){

return `

ORION ONLINE

No learning records currently available.

`;

}


let output = "";


learned.forEach(item=>{


output += `

Decision:
${item.decision}

Reason:
${item.reason}

Command:
${item.command}

Recorded:
${item.timestamp}

----------------

`;

});


return `

ORION LEARNING RECORDS

${output}

Future decisions will use this information.

`;

}



// =====================================
// CONVERSATION STATUS
// =====================================

if(
text.includes("conversation status")
){

let history =
conversation || [];


return `

ORION CONVERSATION STATUS


Messages Stored:

${history.length}


Recent Context:


${
history.length > 0

?

history.map(item =>
item.role + ": " + item.message
).join("\n")

:

"No conversation history available."

}


`;

}



// =====================================
// MEMORY RECALL
// =====================================

if(
text.includes("what do you remember") ||
text.includes("what do you know about me")
){

let storedMemories = [

...recallMemory("preferences"),
...recallMemory("goals"),
...recallMemory("projects"),
...recallMemory("facts")

];


if(
storedMemories.length === 0
){

return `

ORION ONLINE

I currently have no stored memories, Mr. Goodley.

`;

}


return `

ORION MEMORY SYSTEM


Current Stored Information:


• ${storedMemories.join("\n• ")}


`;

}



// =====================================
// CONFIDENCE REPORT
// =====================================

if(
text.includes("confidence")
){

if(!confidence){

return `

ORION CONFIDENCE SYSTEM

No confidence analysis available.

`;

}


return `

ORION CONFIDENCE ANALYSIS


Confidence Score:

${confidence.score}%


Reasoning:

${
confidence.reasoning &&
confidence.reasoning.length > 0

?

"• " + confidence.reasoning.join("\n• ")

:

"No supporting factors available."

}


`;

}



// =====================================
// MISSION PLAN
// =====================================

if(
text.includes("mission") ||
text.includes("plan")
){

if(plan){

return `

ORION MISSION PLAN


Objective:

${plan.objective}


Current Phase:

${plan.currentPhase}


Completed Systems:

✓ ${
plan.completed.join("\n✓ ")
}


Next Objectives:

• ${
plan.nextSteps.join("\n• ")
}


Mission Status:

Planning engine operational.

`;

}

}



// =====================================
// GOAL STATUS
// =====================================

if(
text.includes("goal") ||
text.includes("goals")
){

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

}



// =====================================
// GREETING
// =====================================

if(
text.includes("hello") ||
text === "hi" ||
text.includes("hey")
){

return `

ORION ONLINE

Good day, Mr. Goodley.

All primary systems are operational.

How may I assist you today?

`;

}



// =====================================
// IDENTITY
// =====================================

if(
text.includes("who are you")
){

return `

I am ORION, Sir.

Operational Research & Intelligence for Optimization and Navigation.

I assist with analysis, strategy, memory, planning, decision support, and adaptive learning.

My purpose is to help you accomplish your objectives efficiently.

`;

}



// =====================================
// SYSTEM STATUS
// =====================================

if(
text.includes("status")
){

return `

ORION SYSTEM STATUS


Core System:
ONLINE


Memory System:
ONLINE


Knowledge Engine:
ONLINE


Reasoning Engine:
ONLINE


Decision Engine:
ONLINE


Learning Engine:
ONLINE


Planning Engine:
ONLINE


Goal Manager:
ONLINE


Confidence Engine:
ONLINE


Conversation Engine:
ONLINE


Personality Layer:
ACTIVE


All primary systems operational.

`;

}



// =====================================
// MAIN RESPONSE
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

Knowledge:

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
comparison
){

comparisonSection = `

Comparison:

${JSON.stringify(comparison)}

`;

}



let evaluationSection = "";


if(
evaluation
){

evaluationSection = `

Evaluation:

${evaluation.analysis || ""}

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

${
decision && decision.reason
?
decision.reason
:
"No assessment available."
}


Recommendation:

${
decision && decision.decision
?
decision.decision
:
"No recommendation available."
}


Suggested Action:

${
decision && decision.action
?
decision.action
:
"Awaiting further instruction."
}


Awaiting your next instruction, Mr. Goodley.

`;

}
