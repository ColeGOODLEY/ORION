// =====================================
// ORION CONTEXT ENGINE v1.2
// =====================================

const ORION_CONTEXT = {

build:function(input){


let memories =
typeof getAllMemories === "function"

? getAllMemories()

: {};


let importantMemories = [];
let relevantMemories = [];


for(let category in memories){


if(Array.isArray(memories[category])){


memories[category].forEach(function(memory){


if(
memory &&
memory.information
){


if(
memory.importance === "high" ||
category === "goals"
){

importantMemories.push(memory);

}


if(
memory.information
.toLowerCase()
.includes(input.toLowerCase())

||

input.toLowerCase()
.includes("goal")

){

relevantMemories.push(memory);

}


}


});


}


}



return {

importantMemories: importantMemories,

relevantMemories: relevantMemories,

memory: memories,

request: input

};


}


};
