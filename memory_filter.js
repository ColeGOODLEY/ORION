// =====================================
// ORION MEMORY FILTER
// Recovery Build 1.1
// =====================================

function getRelevantMemories(command){

    const text =
    command.toLowerCase();

    let memories = [];


    // Project memories
    if(
        text.includes("orion") ||
        text.includes("project") ||
        text.includes("memory") ||
        text.includes("internet") ||
        text.includes("build") ||
        text.includes("improve") ||
        text.includes("assistant")
    ){

        memories.push(
            ...recallMemory("projects")
        );

    }


    // Goal memories
    if(
        text.includes("goal") ||
        text.includes("career") ||
        text.includes("future") ||
        text.includes("want") ||
        text.includes("should") ||
        text.includes("improve")
    ){

        memories.push(
            ...recallMemory("goals")
        );

    }


    // Preference memories
    if(
        text.includes("favorite") ||
        text.includes("color") ||
        text.includes("food") ||
        text.includes("like") ||
        text.includes("prefer")
    ){

        memories.push(
            ...recallMemory("preferences")
        );

    }


    return memories;

}
