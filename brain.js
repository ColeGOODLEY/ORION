// ORION BRAIN SYSTEM


function analyzeCommand(input){


    let text =
    input.toLowerCase();


    let intent =
    "conversation";


    if(
        text.includes("should") ||
        text.includes("choose") ||
        text.includes("better") ||
        text.includes("decide")
    ){

        intent="decision";

    }



    if(
        text.includes("remember")
    ){

        intent="memory";

    }



    if(
        text.includes("status")
    ){

        intent="status";

    }



    return {

        command: input,

        intent:intent,

        confidence:"high"

    };


}
