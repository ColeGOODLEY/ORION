// =====================================
// ORION SCRIPT
// Command Interface System
// Build 2.6
// AI Response Formatting Stabilization
// =====================================



// =====================================
// TYPEWRITER RESPONSE EFFECT
// =====================================

function typeResponse(element, text){

    element.innerHTML = "";

    let index = 0;

    const cursor = "_";


    const interval = setInterval(function(){

        element.innerHTML =
        text.substring(0,index)
        +
        cursor;


        index++;


        if(index > text.length){

            clearInterval(interval);

            element.innerHTML = text;

        }


    },25);

}





// =====================================
// ACTIVITY LOG
// =====================================

function addActivity(message){

    const log =
    document.querySelector(".activity");


    if(!log){

        return;

    }


    const entry =
    document.createElement("p");


    const time =
    new Date().toLocaleTimeString();


    entry.innerHTML =
    `${time} - ${message}`;


    log.appendChild(entry);

}





// =====================================
// CLEAN AI RESPONSE
// =====================================

function cleanAIResponse(response){


    if(!response){

        return "ORION AI response unavailable.";

    }



    let text = response.trim();



    // Remove unnecessary long explanations

    if(text.length > 1200){


        text =
        text.substring(0,1200)
        +
        "\n\n[Response shortened for efficiency.]";


    }



    return text;

}





// =====================================
// EXECUTE ORION COMMAND
// =====================================

async function executeORION(){


    const input =
    document.getElementById("command");


    const output =
    document.getElementById("response");



    if(!input || !output){

        return;

    }




    const command =
    input.value.trim();



    if(command === ""){


        typeResponse(

            output,

            "ORION ONLINE\n\nAwaiting your command, Mr. Goodley."

        );


        return;

    }




// =====================================
// SAVE USER MESSAGE
// =====================================


if(typeof ORION_CONTEXT !== "undefined"){


    ORION_CONTEXT.addMessage(

        "user",

        command

    );


}



try{


if(typeof ORION_HUD !== "undefined"){

    ORION_HUD.processing();

}



addActivity(
"Command Received"
);


addActivity(
"Brain Processing"
);





// =====================================
// PROCESS BRAIN
// =====================================

const brainResult =

await processBrain(command);




console.log(
"DEBUG BRAIN RESULT:",
brainResult
);




let response = "";





// =====================================
// ORION CORE
// =====================================

if(
brainResult.source === "ORION_CORE"
){


    response =

    await ORION.process(command);


}





// =====================================
// AI BRAIN
// =====================================

else if(
brainResult.source === "AI_BRAIN"
){


const aiOutput =

brainResult.response?.response

||

brainResult.response

||

"ORION AI response unavailable.";





response =

cleanAIResponse(aiOutput);



}





else{


response =
"ORION ERROR: Unknown response source.";


}







// =====================================
// HUD READY
// =====================================

if(typeof ORION_HUD !== "undefined"){


setTimeout(function(){

ORION_HUD.ready();

},1000);


}




addActivity(
"Response Generated"
);





typeResponse(

output,

response

);


ORION_VOICE.speak(response);






// =====================================
// SAVE RESPONSE
// =====================================

if(typeof ORION_CONTEXT !== "undefined"){


ORION_CONTEXT.addMessage(

"assistant",

response

);


}



input.value = "";



}




catch(error){



console.error(

"ORION SYSTEM ERROR:",

error

);



typeResponse(

output,

`ORION SYSTEM ERROR

${error.message}`

);



}




}





// =====================================
// ENTER KEY
// =====================================

document.addEventListener(

"DOMContentLoaded",

function(){


const input =
document.getElementById("command");



if(input){


input.addEventListener(

"keydown",

function(event){


if(event.key === "Enter"){


executeORION();


}


});


}


});







// =====================================
// BOOT SEQUENCE
// =====================================

document.addEventListener(

"DOMContentLoaded",

function(){



const boot =
document.getElementById("boot-screen");


const status =
document.getElementById("boot-status");



if(!boot || !status){

return;

}



const messages = [

"AI CORE ........ ONLINE",

"MEMORY ......... ONLINE",

"KNOWLEDGE ...... ONLINE",

"REASONING ...... ONLINE",

"DECISION ....... ONLINE",

"PERSONALITY .... ONLINE",

"SYSTEM READY"

];



let index = 0;



const interval = setInterval(function(){


status.innerHTML =
messages[index];


index++;



if(index >= messages.length){


clearInterval(interval);



setTimeout(function(){


boot.style.opacity="0";


setTimeout(function(){


boot.remove();


},1000);



},800);



}



},700);



});





console.log(

"ORION Interface Loaded Successfully."

);

// =====================================
// VOICE BUTTON
// =====================================

document.addEventListener(
"DOMContentLoaded",
function(){

const voiceButton =
document.getElementById("voiceButton");


if(voiceButton){


voiceButton.onclick = function(){


ORION_VOICE.listen();


};


}


});
