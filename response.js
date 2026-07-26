// =====================================
// ORION RESPONSE SYSTEM
// Adaptive Intelligence Build 2.2
// Personality Integration
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
conversation,
personalityStyleData
){


let text =
command.toLowerCase();



// =====================================
// PERSONALITY
// =====================================


let personalityTone = "";

let personalityBehavior = "";


if(personalityStyleData){


personalityTone =

`

Communication Style:

${personalityStyleData.tone}


`;


personalityBehavior =

`

Behavior:

${personalityStyleData.behavior}


`;

}





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

text === "learning count" ||
text === "how much have you learned"

){


return `

ORION ONLINE


Learning Records:


${learningCount("decisions")}


`;

}





// =====================================
// CONVERSATION STATUS
// =====================================


if(text.includes("conversation status")){


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


const memories = [


...recallMemory("preferences"),

...recallMemory("goals"),

...recallMemory("projects"),

...recallMemory("facts")


];



if(memories.length === 0){


return `

ORION ONLINE


No stored memories currently available, Mr. Goodley.


`;

}



return `

ORION ONLINE


Current Memory Records:


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


${personalityTone}


How may I assist you today?


`;

}





// =====================================
// IDENTITY
// =====================================


if(text.includes("who are you")){


return `

I am ORION, Sir.


Operational Research & Intelligence for Optimization and Navigation.


I am designed to provide:

• Strategic analysis
• Decision support
• Memory assistance
• Planning
• Adaptive learning
• Personal optimization


${personalityTone}


`;

}





// =====================================
// SYSTEM STATUS
// =====================================


if(text.includes("status")){


return `

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
ONLINE



Current Mode:

${personalityStyleData ? personalityStyleData.tone : "Standard"}



Everything appears operational, Mr. Goodley.


`;

}





// =====================================
// CONFIDENCE
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
// PLANNING
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


Planning engine operational.


`;

}





// =====================================
// GOALS
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
// BUILD RESPONSE SECTIONS
// =====================================


let memorySection = "";


if(memories && memories.length > 0){


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


if(reasoning && reasoning.analysis){


reasoningSection = `

Reasoning Analysis:


${reasoning.analysis}


`;

}



let comparisonSection = "";


if(decision && decision.comparison){


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


${evaluation.optionAEvaluation || ""}


${evaluation.optionBEvaluation || ""}


`;

}





return `

ORION ONLINE


Sir, I have analyzed your request.



${personalityTone}


${personalityBehavior}



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
