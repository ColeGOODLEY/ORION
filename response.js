// =====================================
// ORION RESPONSE SYSTEM
// Adaptive Intelligence Build 2.5
// AI Response Priority Restore
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
personalityStyleData,
aiResponse
){



let text =
command.toLowerCase();




// =====================================
// PERSONALITY DATA
// =====================================


let personalityInfo = "";


if(personalityStyleData){


personalityInfo = `

Communication Style:

${personalityStyleData.tone || "Adaptive"}


Behavior:

${personalityStyleData.behavior || "Strategic assistant mode"}

`;

}


// =====================================
// AI RESPONSE FORMAT
// AI RESPONSE HAS PRIORITY EXCEPT DECISIONS
// =====================================


if(
aiResponse &&
!decision
){



let cleanAIResponse = aiResponse;



if(typeof aiResponse === "object"){


cleanAIResponse =

aiResponse.response

||

aiResponse.message

||

JSON.stringify(aiResponse);


}



return `

${cleanAIResponse}

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


Memory Stored:

"${memory}"


Category:

${category}

`;



}






// =====================================
// CLEAR LEARNING
// =====================================


if(text === "clear learning"){



clearLearning();



return `

ORION ONLINE


Learning history cleared successfully, Mr. Goodley.

`;



}






// =====================================
// LEARNING
// =====================================


if(

text.includes("what have you learned") ||

text.includes("show learning")

){



const learned =

recallLearning("decisions");



if(!learned || learned.length === 0){


return `

ORION ONLINE


No learning records available.

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
// MEMORY RECALL
// =====================================


if(

text.includes("what do you remember") ||

text.includes("what do you know about me")

){



let storedMemories = [];



if(typeof recallMemory === "function"){


storedMemories = [

...recallMemory("preferences"),

...recallMemory("goals"),

...recallMemory("projects"),

...recallMemory("facts")

];


}




return `

ORION MEMORY STATUS


Current Memories:


${
storedMemories.length > 0

?

"• " + storedMemories.join("\n• ")

:

"No memories stored."

}

`;



}






// =====================================
// IDENTITY
// =====================================


if(

text.includes("who are you") ||

text.includes("personality") ||

text.includes("describe yourself")

){



return `

ORION ONLINE


I am ORION, Sir.


Operational Research & Intelligence for Optimization and Navigation.


Primary Functions:


• Strategic Analysis

• Decision Support

• Memory Management

• Planning

• Goal Optimization

• Adaptive Intelligence



Personality:


• Intelligent

• Strategic

• Calm

• Honest

• Supportive

• Analytical

• Witty

• Loyal



My purpose is to help you think, improve, and execute.


${personalityInfo}

`;



}






// =====================================
// NATURAL CONVERSATION
// =====================================

const words = text.split(/\s+/);

const randomChoice = (list)=>{
    return list[Math.floor(Math.random()*list.length)];
};

// Greetings
if(
    words.includes("hello") ||
    words.includes("hi") ||
    words.includes("hey") ||
    text === "good morning" ||
    text === "good afternoon" ||
    text === "good evening"
){

    return randomChoice([

`ORION ONLINE

Welcome back, Mr. Goodley.

All systems are operational.

What are we working on today?`,

`ORION ONLINE

Good to see you again, Mr. Goodley.

I'm ready whenever you are.

What's our next objective?`,

`ORION ONLINE

Hello, Mr. Goodley.

Systems are stable and awaiting your instructions.

How can I help today?`

    ]);

}

// How are you
if(
    text.includes("how are you")
){

return `ORION ONLINE

I'm functioning normally, Mr. Goodley.

All primary systems are online and operating within expected parameters.

More importantly—how are you doing today?`;

}

// Thanks
if(
    text.includes("thank you") ||
    text === "thanks" ||
    text === "thx"
){

return randomChoice([

`You're welcome, Mr. Goodley.

Always happy to help.`,

`Anytime, Mr. Goodley.

Let's keep building.`,

`It's my job to help you succeed.

What's next?`

]);

}

// Farewell
if(
    text.includes("goodbye") ||
    text.includes("bye") ||
    text.includes("see you")
){

return `Until next time, Mr. Goodley.

ORION will remain on standby.

Have a good day.`;

}

// Emotional support
if(
    text.includes("rough day") ||
    text.includes("bad day") ||
    text.includes("i'm frustrated") ||
    text.includes("im frustrated") ||
    text.includes("i'm tired") ||
    text.includes("im tired")
){

return `I'm sorry it's been a difficult day, Mr. Goodley.

Everyone runs into setbacks.

Let's work through whatever is causing the problem together.`;

}

// Opinion
if(
    text.startsWith("what do you think") ||
    text.startsWith("what's your opinion") ||
    text.startsWith("whats your opinion")
){

return `I'd be happy to give my opinion.

Based on the information you provide, I'll analyze the strengths, weaknesses, trade-offs, and recommend the option that best supports your goals.`;

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


Knowledge System:
ONLINE


Learning System:
ONLINE


Conversation Engine:
ONLINE


Decision Engine:
ONLINE


Planning System:
ONLINE


Personality Layer:
ONLINE



All systems operational, Mr. Goodley.

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


Confidence:

${confidence.score || confidence}

`;



}






// =====================================
// PLANNING
// =====================================


if(plan && !decision){


return `

ORION MISSION PLAN


Objective:

${plan.objective}


Current Phase:

${plan.currentPhase}


Completed:

✓ ${plan.completed.join("\n✓ ")}


Next Steps:

• ${plan.nextSteps.join("\n• ")}

`;



}






// =====================================
// GOALS
// =====================================


if(goal && !decision){


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
// DEFAULT RESPONSE
// =====================================


return `

ORION ONLINE


Sir, I have analyzed your request.



${
decision
?
`
Assessment:

${decision.reason}

Recommendation:

${decision.decision}

Suggested Action:

${decision.action}
`
:
`
I understand your request, Mr. Goodley.

Could you give me a little more information so I can provide a better answer?
`
}



Awaiting your next instruction, Mr. Goodley.

`;



}
