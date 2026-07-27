// =====================================
// ORION SCRIPT
// Command Interface System
// Build 2.3
// HUD Integration
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


function executeORION(){



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




        const response =
        ORION.process(command);





        // HUD RETURN TO READY

        if(typeof ORION_HUD !== "undefined"){

            ORION_HUD.ready();

        }




        addActivity(
        "Response Generated"
        );




        typeResponse(

        output,

        response

        );




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
// SYSTEM READY
// =====================================


console.log(

"ORION Interface Loaded Successfully."

);
