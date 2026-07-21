// =====================================
// ORION CONTEXT ENGINE v1.1
// =====================================

const ORION_CONTEXT = {

build: function(input){


let memories =
typeof getAllMemories === "function"

? getAllMemories()

: {};



let importantMemories = [];


// Analyze important memories

for(let category in memories){


if(Array.isArray(memories[category])){


memories[category].forEach(function(memory){


if(
typeof memory === "object" &&
memory.importance === "high"
){

importantMemories.push(memory);

}


});


}


}



return {


identity: {

name: ORION.name,

version: ORION.version,

mission: ORION.mission

},



personality: {

name: ORION_PERSONALITY.name,

role: ORION_PERSONALITY.role,

traits: ORION_PERSONALITY.traits,

objective: ORION_PERSONALITY.primaryDirective

},



memory: memories,


importantMemories: importantMemories,


request: input


};


}

};
