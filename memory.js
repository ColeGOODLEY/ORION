// ORION MEMORY SYSTEM


function saveMemory(category,value){


let memories =
JSON.parse(
localStorage.getItem("orion_memory")
)
||
{};



if(!memories[category]){

memories[category]=[];

}



memories[category].push(value);



localStorage.setItem(
"orion_memory",
JSON.stringify(memories)
);


}




function recallMemory(category){


let memories =
JSON.parse(
localStorage.getItem("orion_memory")
)
||
{};



return memories[category] || [];


}




function searchMemory(keyword){


let memories =
JSON.parse(
localStorage.getItem("orion_memory")
)
||
{};



let results=[];



for(let category in memories){


memories[category].forEach(item=>{


if(
item.toLowerCase()
.includes(keyword.toLowerCase())
){

results.push(item);

}


});


}



return results;


}
