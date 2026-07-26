// =====================================
// ORION EVALUATION ENGINE
// Strategic Evaluation Build 1.1
// =====================================


function evaluateDecision(command, comparison, knowledge){


    let text =
    command.toLowerCase();



    let evaluation = {


        factors:
        [
            "Long-term value",
            "Impact on ORION growth",
            "Difficulty of implementation",
            "Future expansion potential"
        ],


        optionAEvaluation:
        "",


        optionBEvaluation:
        "",


        analysis:
        "Evaluating available options based on strategic value."

    };



    if(
        text.includes("memory") ||
        text.includes("internet")
    ){


        evaluation.optionAEvaluation =

        "Improve Memory:\n" +

        "+ Increases personalization\n" +

        "+ Improves user understanding\n" +

        "+ Creates a stronger foundation for future capabilities\n" +

        "- Requires continued development time";



        evaluation.optionBEvaluation =

        "Add Internet Access:\n" +

        "+ Expands external information access\n" +

        "+ Enables real-time capabilities\n" +

        "- Less valuable without strong personalization";


        evaluation.analysis =

        "Memory scores higher because ORION's current priority is building a personalized intelligence foundation before expanding external capabilities.";


    }



    return evaluation;


}
