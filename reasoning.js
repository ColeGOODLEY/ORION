// =====================================
// ORION REASONING ENGINE
// Recovery Build 1.1
// =====================================


function processReasoning(command, brain, context, memories, knowledge){


    let analysis =
    "Evaluating the request using logic, context, and available information.";



    if(
        brain.intent === "decision"
    ){

        analysis =

        "Decision analysis detected.\n\n" +

        "ORION is comparing available options based on " +
        "long-term usefulness, strategic value, and alignment with the user's objectives.";


    }



    if(
        knowledge &&
        knowledge.length > 0
    ){

        analysis +=

        "\n\nRelevant knowledge has been considered from memory.";

    }



    return {

        command:
        command,

        intent:
        brain.intent,

        user:
        context.user,

        memory:
        memories,

        knowledge:
        knowledge,

        analysis:
        analysis

    };


}
