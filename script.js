// =====================================
// ORION SCRIPT
// Command Interface System
// Build 2.1
// =====================================


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


        output.innerHTML = `

ORION ONLINE

Awaiting your command, Mr. Goodley.

`;

        return;

    }



    try{


        const response =
        ORION.process(command);



        output.innerHTML =
        response;



        input.value = "";



    }
    catch(error){


        console.error(
            "ORION SYSTEM ERROR:",
            error
        );


        output.innerHTML = `

ORION SYSTEM ERROR


Unable to complete command processing.


Error:

${error.message}


Please check system modules.

`;

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
