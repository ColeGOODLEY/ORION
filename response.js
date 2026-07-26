// =====================================
// ORION RESPONSE SYSTEM
// Personality Recovery Build 1.4
// =====================================


function generateResponse(command, decision, memories, knowledge, reasoning, comparison, evaluation){


let text =
command.toLowerCase();



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



if(text.includes("who are you")){


return `

I am ORION, Sir.

Operational Research & Intelligence for Optimization and Navigation.

I am designed to assist with analysis, strategy, memory, and decision support.

My purpose is to help you accomplish your objectives efficiently.

`;

}




if(text.includes("status")){


return `

ORION SYSTEM STATUS

Core System:
ONLINE

Reasoning Engine:
ONLINE

Memory System:
ONLINE

Decision Engine:
ONLINE

Personality Layer:
ACTIVE


Everything appears operational, Mr. Goodley.

`;

}



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

if(
evaluation
){

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
