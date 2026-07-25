// =====================================
// ORION BRAIN SYSTEM
// =====================================


function analyzeCommand(command){


    let text =
    command.toLowerCase();



    let intent =
    "conversation";



    if(
        text.includes("should") ||
        text.includes("choose") ||
        text.includes("decide")
    ){

        intent =
        "decision";

    }



    if(
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ){

        intent =
        "greeting";

    }



    return {

        intent:
        intent,


        confidence:
        "high"

    };


}
