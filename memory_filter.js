// =====================================
// ORION MEMORY FILTER
// Recovery Build 1.0
// =====================================

function getRelevantMemories(command){

    const text =
    command.toLowerCase();

    let memories = [];

    if(
        text.includes("orion") ||
        text.includes("project")
    ){

        memories.push(
            ...recallMemory("projects")
        );

    }

    if(
        text.includes("goal") ||
        text.includes("career") ||
        text.includes("future") ||
        text.includes("want")
    ){

        memories.push(
            ...recallMemory("goals")
        );

    }

    if(
        text.includes("favorite") ||
        text.includes("color") ||
        text.includes("food") ||
        text.includes("like")
    ){

        memories.push(
            ...recallMemory("preferences")
        );

    }

    return memories;

}
