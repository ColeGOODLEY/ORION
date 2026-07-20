// ORION MEMORY SYSTEM v0.3

function saveMemory(category, value){

let memories =
JSON.parse(localStorage.getItem("orion_memory")) || {};


if(!memories[category]){

memories[category] = [];

}


memories[category].push(value);


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


function searchMemory(keyword){

let memories =
getAllMemories();

let results = [];


for(let category in memories){

memories[category].forEach(memory => {

if(memory.includes(keyword)){

results.push(memory);

}

});

}


return results;

}
