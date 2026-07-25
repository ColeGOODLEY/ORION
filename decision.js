// =====================================
// ORION DECISION ENGINE
// Recovery Build 1.1
// =====================================


function makeDecision(command, comparison){


    let text =
    command.toLowerCase();



    if(
        text.includes("memory") ||
        text.includes("internet")
    ){

        return {


            decision:
            "Improve memory first.",



            reason:
            "A stronger memory system creates a more personalized foundation for ORION before expanding external capabilities.",



            action:
            "Prioritize improving ORION's memory system, then expand external connectivity once personalization is stronger."

        };

    }



    return {


        decision:
        "No decision required.",



        reason:
        "The command does not contain a decision request.",



        action:
        "Continue normal operation and await the next instruction."

    };


}
