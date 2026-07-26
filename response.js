// =====================================
// ORION RESPONSE SYSTEM
// Personality Recovery Build 1.1
// =====================================

function generateResponse(command, decision, memories, knowledge){
    let text =
    command.toLowerCase();


    // ==========================
    // REMEMBER
    // ==========================

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


    // ==========================
    // RECALL MEMORY
    // ==========================

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


    // ==========================
    // CLEAR MEMORY
    // ==========================

    if(text === "clear memory"){

        clearMemory();

        return `

ORION ONLINE

Understood, Mr. Goodley.

All stored memories have been cleared successfully.

`;

    }


    // ==========================
    // GREETING
    // ==========================

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


    // ==========================
    // IDENTITY
    // ==========================

    if(text.includes("who are you")){

        return `

I am ORION, Sir.

Operational Research & Intelligence for Optimization and Navigation.

I am designed to assist with analysis, strategy, memory, and decision support.

My purpose is to help you accomplish your objectives efficiently.

`;

    }


    // ==========================
    // STATUS
    // ==========================

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


    // ==========================
    // DEFAULT RESPONSE
    // ==========================

let memorySection = "";

if(memories && memories.length > 0){

    memorySection = `

Relevant Memory:

• ${memories.join("\n• ")}

`;

}

return `

ORION ONLINE

Sir, I have analyzed your request.


Strategic Context:

${decision.context || "No additional context available."}


Assessment:

${decision.reason}


Recommendation:

${decision.decision}


Suggested Action:

${decision.action}


Awaiting your next instruction, Mr. Goodley.

`;
}
