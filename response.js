// =====================================
// ORION RESPONSE SYSTEM
// Adaptive Intelligence Build 2.4
// AI Response Routing + Formatting Fix
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
// DECISION PRIORITY FIX
// =====================================


if(aiResponse && !decision){


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
// LEARNING COUNT
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
// SHOW LEARNING
// =====================================


if(

text.includes("what have you learned") ||

text.includes("show learning")

){



const learned =

recallLearning("decisions");




if(

!learned ||

learned.length === 0

){


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



My purpose is not simply to answer.


My purpose is to help you think, improve, and execute.


${personalityInfo}


`;



}






// =====================================
// GREETING
// =====================================


const words =

text.split(/\s+/);




if(

words.includes("hello") ||

words.includes("hi") ||

words.includes("hey") ||

text === "good morning" ||

text === "good afternoon" ||

text === "good evening"

){



return `

ORION ONLINE


Good day, Mr. Goodley.


All primary systems are operational.


How may I assist you today, Sir?


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


if(plan){



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
// DEFAULT RESPONSE
// =====================================


return `

ORION ONLINE


Sir, I have analyzed your request.



${knowledge || ""}



${reasoning || ""}



Assessment:


${decision?.reason || "No assessment available."}



Recommendation:


${decision?.decision || "No recommendation available."}



Suggested Action:


${decision?.action || "Continue operation."}



Awaiting your next instruction, Mr. Goodley.


`;



}
