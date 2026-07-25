// =====================================
// ORION BRAIN SYSTEM
// Recovery Build 1.0
// =====================================


function analyzeCommand(command){


    let text =
    command.toLowerCase();


    let intent =
    "conversation";


    if(
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ){

        intent =
        "greeting";

    }


    if(
        text.includes("should") ||
        text.includes("choose") ||
        text.includes("decide")
    ){

        intent =
        "decision";

    }


    return {

        intent: intent,

        confidence: "high"

    };


}
