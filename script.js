// =====================================
// ORION SCRIPT
// Diagnostic Build
// =====================================

function executeORION(){

    const input =
    document.getElementById("command");

    const output =
    document.getElementById("response");


    const command =
    input.value.trim();


    if(command === ""){

        output.innerHTML =
        "Awaiting your command, Mr. Goodley.";

        return;

    }


    try{

        output.innerHTML =
        ORION.process(command);

    }

    catch(error){

        output.innerHTML = `

ORION DIAGNOSTIC ERROR

System failed while processing command.

Error:

${error.message}


Location:

${error.stack}


`;

        console.log(error);

    }


    input.value = "";

}
