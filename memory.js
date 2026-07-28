// =====================================
// ORION MEMORY SYSTEM
// Recovery Build 1.1
// =====================================


function saveMemory(category, value){

    let memories =
    JSON.parse(
        localStorage.getItem("orion_memory")
    ) || {};

    if(!memories[category]){
        memories[category] = [];
    }

    // Prevent duplicate memories
    if(!memories[category].includes(value)){
        memories[category].push(value);
    }

    localStorage.setItem(
        "orion_memory",
        JSON.stringify(memories)
    );

}




function recallMemory(category){

    let memories =
    JSON.parse(
        localStorage.getItem("orion_memory")
    ) || {};

    return memories[category] || [];

}




function searchMemory(command){

    let memories =
    JSON.parse(
        localStorage.getItem("orion_memory")
    ) || {};

    const words =
    command
    .toLowerCase()
    .replace(/[^\w\s]/g,"")
    .split(/\s+/)
    .filter(word => word.length > 2);

    let scored = [];

    for(const category in memories){

        if(!Array.isArray(memories[category])){

            continue;

        }

        memories[category].forEach(item=>{

            if(typeof item !== "string"){

                return;

            }

            let score = 0;

            const lower =
            item.toLowerCase();

            words.forEach(word=>{

                if(lower.includes(word)){

                    score++;

                }

            });

            if(score > 0){

                scored.push({

                    memory:item,

                    score:score

                });

            }

        });

    }

    scored.sort(function(a,b){

        return b.score-a.score;

    });

    return scored.map(item=>item.memory);

}

// =====================================
// GET RELEVANT MEMORIES
// =====================================

function searchRelevantMemories(command){

    const results =
    searchMemory(command);

    return results.slice(0,5);

}


function clearMemory(){

    localStorage.removeItem("orion_memory");

}

// =====================================
// GET ALL MEMORIES
// =====================================

function getAllMemories(){

    let memories =
    JSON.parse(
        localStorage.getItem("orion_memory")
    ) || {};


    return memories;

}
