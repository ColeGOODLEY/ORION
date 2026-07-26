// =====================================
// ORION CONFIDENCE ENGINE
// Build 1.0
// =====================================


function calculateConfidence(command, decision, memories, learning){


    let confidence = 50;


    let reasons = [];



    // Decision exists
    if(
        decision &&
        decision.decision &&
        decision.decision !== "No decision required."
    ){

        confidence += 15;

        reasons.push(
            "A clear decision recommendation was generated."
        );

    }



    // Memory support
    if(
        memories &&
        memories.length > 0
    ){

        confidence += 15;

        reasons.push(
            "Relevant personal memory supports the analysis."
        );

    }



    // Learning support
    if(
        learning &&
        learning.length > 0
    ){

        confidence += 15;

        reasons.push(
            "Previous learning records support the recommendation."
        );

    }



    // Limit confidence

    if(confidence > 100){

        confidence = 100;

    }


    return {


        score:
        confidence,


        reasoning:
        reasons


    };


}
