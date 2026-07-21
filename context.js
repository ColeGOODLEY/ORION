// =====================================
// ORION CONTEXT ENGINE v1.0
// =====================================

const ORION_CONTEXT = {

build: function(input){

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


memory:

typeof getAllMemories === "function"

? getAllMemories()

: {},


request: input

};

}

};
