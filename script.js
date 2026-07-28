// =====================================
// ORION SCRIPT
// Command Interface System
// Build 2.4
// AI Brain Pipeline Integration
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
// EXECUTE ORION COMMAND
// =====================================


async function executeORION(){



    const input =
    document.getElementById("command");



    const output =
    document.getElementById("response");



    if(!input || !output){


        console.error(
        "ORION ERROR: Command interface elements missing."
        );


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
// SAVE USER MESSAGE TO CONTEXT
// =====================================


if(typeof ORION_CONTEXT !== "undefined"){


    ORION_CONTEXT.addMessage(

        "user",

        command

    );


}




    try{


        // HUD STATUS UPDATE

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
// BRAIN ANALYSIS
// =====================================


const brainResult =

await processBrain(command);




let response;




// =====================================
// AI BRAIN RESPONSE
// =====================================


if(brainResult.source === "AI_BRAIN"){



response =

generateResponse(

    command,

    null,

    typeof getAllMemories === "function"

    ?

    getAllMemories()

    :

    [],


    brainResult.knowledge || "",


    brainResult.reasoning || "",


    null,


    null,


    null,


    null,


    brainResult.analysis?.confidence || null,


    typeof ORION_CONTEXT !== "undefined"

    &&

    typeof ORION_CONTEXT.getRecent === "function"

    ?

    ORION_CONTEXT.getRecent()

    :

    [],



    typeof ORION_PERSONALITY !== "undefined"

    &&

    typeof ORION_PERSONALITY.getStyle === "function"

    ?

    ORION_PERSONALITY.getStyle(command)

    :

    {},



    brainResult.response


);



}





// =====================================
// LOCAL ORION CORE RESPONSE
// =====================================


else{


response =

await ORION.process(command);


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




// =====================================
// SAVE ORION RESPONSE
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

Unable to complete command processing.

Error:

${error.message}

Please check system modules.`

        );



        addActivity(

        "System Error Detected"

        );



    }



}





// =====================================
// ENTER KEY SUPPORT
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
// ORION BOOT SEQUENCE
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



const interval =

setInterval(function(){



status.innerHTML =

messages[index];



index++;



if(index >= messages.length){


clearInterval(interval);



setTimeout(function(){


boot.style.opacity = "0";


setTimeout(function(){


boot.remove();


},1000);


},800);



}



},700);



});




// =====================================
// SYSTEM READY
// =====================================


console.log(

"ORION Interface Loaded Successfully."

);
