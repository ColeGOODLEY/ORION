// =====================================
// ORION MEMORY SYSTEM v1.0
// =====================================


function saveMemory(category, value, importance = "normal"){


let memories =
JSON.parse(localStorage.getItem("orion_memory")) || {};


if(!memories[category]){

memories[category] = [];

}


let memory = {

information: value,

importance: importance,

created:
new Date().toLocaleString()

};


memories[category].push(memory);


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


if(Array.isArray(memories[category])){


memories[category].forEach(function(memory){


if(
memory.information
.toLowerCase()
.includes(keyword.toLowerCase())
){


results.push(memory);


}


});


}


}


return results;


}
