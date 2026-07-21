// =====================================
// ORION CONTEXT ENGINE v1.1
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
typeof memory === "object" &&
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
.includes(input.toLowerCase()) ||

input.toLowerCase()
.includes("goal") ||

input.toLowerCase()
.includes("focus") ||

input.toLowerCase()
.includes("plan")
){

relevantMemories.push(memory);

}



}



});


}


}



return {


identity:{

name:ORION.name,

version:ORION.version,

mission:ORION.mission

},


personality:{

name:ORION_PERSONALITY.name,

role:ORION_PERSONALITY.role,

traits:ORION_PERSONALITY.traits,

objective:ORION_PERSONALITY.primaryDirective

},


memory:memories,


importantMemories:importantMemories,


relevantMemories:relevantMemories,


request:input


};


}

};
