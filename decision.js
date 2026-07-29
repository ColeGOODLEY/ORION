// =====================================
// ORION DECISION ENGINE
// Strategic Decision Build 1.2
// =====================================


function makeDecision(command, comparison, knowledge, reasoning){


    let text =
    command.toLowerCase();



    let strategicContext = "";

    if(knowledge){

        strategicContext =
        knowledge;

    }



    let reasoningContext = "";

    if(reasoning){

        reasoningContext =
        reasoning.analysis;

    }



    let comparisonAnalysis = "";

    if(comparison){

        comparisonAnalysis =
        comparison.comparison;

    }



   if(
    text.includes("memory") ||
    text.includes("internet") ||
    text.includes("search") ||
    text.includes("knowledge") ||
    text.includes("connect") ||
    text.includes("online")
){


        let memoryScore = 0;

        let internetScore = 0;



        // Memory improves personalization and foundation

        if(
            strategicContext.includes("ORION") ||
            strategicContext.includes("personal objective")
        ){

            memoryScore += 10;

        }



        // Internet improves external capability

if(
    text.includes("internet") ||
    text.includes("search") ||
    text.includes("knowledge") ||
    text.includes("connect") ||
    text.includes("online")
){

    internetScore += 5;

}



        if(memoryScore >= internetScore){


            return {

                decision:
                "Improve memory first.",


                reason:
                "Memory provides a stronger personalized foundation before expanding external capabilities.",


                action:
                "Continue improving ORION's memory system, then expand connectivity.",


                context:
                strategicContext,


                reasoning:
                reasoningContext,


                comparison:
                comparisonAnalysis

            };


        }


    }



    return {


        decision:
        "No decision required.",


        reason:
        "The command does not contain a decision request.",


        action:
        "Continue normal operation and await the next instruction.",


        context:
        strategicContext,


        reasoning:
        reasoningContext,


        comparison:
        comparisonAnalysis

    };


}
