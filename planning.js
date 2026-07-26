// =====================================
// ORION PLANNING ENGINE
// Build 1.0
// =====================================

function createPlan(command){

    const text =
    command.toLowerCase();


    // ORION Project Plan
    if(
        text.includes("orion") ||
        text.includes("project") ||
        text.includes("build")
    ){

        return {

            objective:
            "Develop ORION into a complete personal AI operating system.",

            currentPhase:
            "Foundation",

            completed:
            [

                "Identity System",
                "Memory System",
                "Knowledge Engine",
                "Reasoning Engine",
                "Comparison Engine",
                "Evaluation Engine",
                "Decision Engine",
                "Learning Engine"

            ],

            nextSteps:
            [

                "Planning Engine",
                "Goal Manager",
                "Confidence Engine",
                "Conversation Engine",
                "Internet Integration"

            ]

        };

    }


    return null;

}
