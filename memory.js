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




function searchMemory(keyword){

    let memories =
    JSON.parse(
        localStorage.getItem("orion_memory")
    ) || {};

    let results = [];

    for(let category in memories){

        if(!Array.isArray(memories[category])){
            continue;
        }

        memories[category].forEach(item => {

            if(
                typeof item === "string" &&
                item.toLowerCase().includes(keyword.toLowerCase())
            ){

                results.push(item);

            }

        });

    }

    return results;

}




function clearMemory(){

    localStorage.removeItem("orion_memory");

}
