// ORION MEMORY SYSTEM v0.2

function saveMemory(category, value){

let memories =
JSON.parse(localStorage.getItem("orion_memory")) || {};


memories[category] = value;


localStorage.setItem(
"orion_memory",
JSON.stringify(memories)
);

}


function recallMemory(category){

let memories =
JSON.parse(localStorage.getItem("orion_memory")) || {};


return memories[category];

}


function getAllMemories(){

return JSON.parse(
localStorage.getItem("orion_memory")
) || {};

}


function clearMemory(){

localStorage.removeItem("orion_memory");

}
