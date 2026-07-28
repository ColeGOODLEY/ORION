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

// =====================================
// BUILD REASONING SUMMARY
// =====================================

function buildReasoningSummary(command, analysis){

    let summary = "";

    summary += "Intent: " + analysis.intent + "\n";
    summary += "Category: " + analysis.category + "\n";
    summary += "Confidence: " + analysis.confidence + "\n\n";

    if(typeof searchRelevantMemories === "function"){

        const memories = searchRelevantMemories(command);

        if(memories.length > 0){

            summary += "Relevant Memories:\n";

            memories.forEach(function(memory){

                summary += "- " + memory + "\n";

            });

            summary += "\n";

        }

    }

    if(
        typeof ORION_CONTEXT !== "undefined"
        &&
        typeof ORION_CONTEXT.getRecent === "function"
    ){

        const conversation =
        ORION_CONTEXT.getRecent();

        if(conversation.length > 0){

            summary +=
            "Recent Conversation:\n";

            conversation.forEach(function(entry){

                summary +=
                entry.role +
                ": " +
                entry.message +
                "\n";

            });

        }

    }
summary += "\nCurrent Command:\n";
summary += command;
    return summary;

}
