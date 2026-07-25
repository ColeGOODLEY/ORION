// =====================================
// ORION DECISION ENGINE
// Recovery Build 1.0
// =====================================


function makeDecision(command, comparison){


    if(
        command.toLowerCase().includes("memory") ||
        command.toLowerCase().includes("internet")
    ){

        return {

            decision:
            "Improve memory first.",


            reason:
            "A stronger memory system creates a more personalized foundation for ORION before expanding external capabilities."

        };

    }


    return {

        decision:
        "No decision required.",


        reason:
        "The command does not contain a decision request."

    };


}
