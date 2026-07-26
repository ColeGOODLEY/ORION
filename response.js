// =====================================
// ORION RESPONSE SYSTEM
// Adaptive Intelligence Build 2.3
// JARVIS Personality Integration
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
// PERSONALITY DATA
// =====================================

let personalityInfo = "";

let personalityTone =
"Professional and adaptive";


let personalityBehavior =
"Assist with strategic thinking and problem solving.";



if(personalityStyleData){


personalityTone =
personalityStyleData.tone ||
personalityTone;


personalityBehavior =
personalityStyleData.behavior ||
personalityBehavior;



personalityInfo = `

Communication Style:

${personalityTone}


Behavior:

${personalityBehavior}

`;

}



// =====================================
// PERSONALITY RESPONSE PREFIX
// =====================================

function personalityOpening(){


if(
text.includes("should") ||
text.includes("choose") ||
text.includes("decide")
){

return "Sir, I have evaluated the available options strategically.";

}



if(
text.includes("fix") ||
text.includes("bug") ||
text.includes("error") ||
text.includes("code")
){

return "Sir, I have analyzed the system issue.";

}



return "Sir, I have analyzed your request.";

}



// =====================================
// MEMORY STORAGE
// =====================================

if(text.startsWith("remember ")){

const memory =
command.substring(9).trim();


let category =
"facts";



if(
memory.includes("favorite") ||
memory.includes("like") ||
memory.includes("prefer")
){

category =
"preferences";

}

else if(
memory.includes("goal") ||
memory.includes("want") ||
memory.includes("build")
){

category =
"goals";

}

else if(
memory.includes("orion") ||
memory.includes("project")
){

category =
"projects";

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


`;

}



// =====================================
// LEARNING COUNT
// =====================================

if(
text === "learning count" ||
text === "how much have you learned"
){

return `

ORION LEARNING STATUS


Stored Decision Records:

${learningCount("decisions")}


`;

}



// =====================================
// SHOW LEARNING
// =====================================

if(
text.includes("what have you learned") ||
text.includes("show learning")
){

const learned =
recallLearning("decisions") || [];



if(learned.length === 0){

return `

ORION LEARNING STATUS


No learned decision records currently available.

`;

}



let output = "";



learned.forEach(item=>{


output += `

Decision:

${item.decision}


Reason:

${item.reason}


Recorded:

${item.timestamp}


----------------

`;

});



return `

ORION LEARNING STATUS


${output}


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

"No conversation history."

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

...(recallMemory("preferences") || []),

...(recallMemory("goals") || []),

...(recallMemory("projects") || []),

...(recallMemory("facts") || [])

];



return `

ORION MEMORY STATUS


Current Memories:


${
memories.length > 0

?

"• " + memories.join("\n• ")

:

"No memories stored."

}


`;

}



// =====================================
// IDENTITY / PERSONALITY
// =====================================

if(

text.includes("who are you") ||

text.includes("personality") ||

text.includes("describe yourself") ||

text.includes("what are you like")

){


return `

ORION ONLINE


I am ORION, Sir.


Operational Research & Intelligence for Optimization and Navigation.


My purpose is to assist with:


• Strategic analysis

• Decision support

• Memory management

• Planning

• Goal optimization

• Adaptive learning



My personality framework:


• Intelligent

• Strategic

• Calm

• Honest

• Supportive

• Analytical

• Witty

• Loyal



My operating principle:


I am designed to assist you, not simply agree with you.


If your current approach appears inefficient, I will respectfully explain why and recommend a stronger path.


${personalityInfo}


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
// STATUS
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

if(
plan &&
(
text.includes("plan") ||
text.includes("mission")
)
){


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

if(
goal &&
(
text.includes("goal") ||
text.includes("mission") ||
text.includes("objective")
)
){


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
// FINAL RESPONSE BUILD
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


if(comparison){

comparisonSection = `

Comparison:

${comparison.comparison || JSON.stringify(comparison)}

`;

}



let evaluationSection = "";


if(evaluation){

evaluationSection = `

Evaluation:

${evaluation.analysis || ""}

`;

}



return `

ORION ONLINE


${personalityOpening()}


${personalityInfo}


${knowledgeSection}


${reasoningSection}


${comparisonSection}


${evaluationSection}


${memorySection}



Assessment:

${decision?.reason || "No assessment available."}



Recommendation:

${decision?.decision || "No recommendation available."}



Suggested Action:

${decision?.action || "Continue operation."}



Awaiting your next instruction, Mr. Goodley.

`;

}
