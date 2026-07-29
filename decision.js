// =====================================
// ORION DECISION ENGINE
// Strategic Decision Build 1.3
// Deterministic Decision Logic Fix
// =====================================


function makeDecision(command, comparison, knowledge, reasoning){


    const text =
    command.toLowerCase();



    let strategicContext = "";

    if(knowledge){

        strategicContext = knowledge;

    }



    let reasoningContext = "";

    if(reasoning){

        reasoningContext =
        reasoning.analysis || "";

    }



    let comparisonAnalysis = "";

    if(comparison){

        comparisonAnalysis =
        comparison.comparison || "";

    }




// =====================================
// MEMORY VS INTERNET DECISION
// =====================================


if(

    text.includes("memory") &&

    (

        text.includes("internet") ||

        text.includes("online") ||

        text.includes("connect") ||

        text.includes("search") ||

        text.includes("knowledge")

    )

){



return {


    decision:

    "Improve memory first.",



    reason:

    "ORION's memory system creates the personalized foundation required for better future intelligence. A stronger understanding of the user improves every future capability, including internet-based features.",



    action:

    "Continue improving ORION's memory, learning, and personalization systems before adding external connectivity.",



    context:

    strategicContext,



    reasoning:

    reasoningContext,



    comparison:

    comparisonAnalysis



};



}




// =====================================
// INTERNET PRIORITY
// =====================================


if(

    text.includes("internet") ||

    text.includes("online") ||

    text.includes("connect") ||

    text.includes("search")

){



return {


    decision:

    "Expand ORION's external knowledge capabilities.",



    reason:

    "Internet connectivity would increase ORION's access to external information and enable more advanced capabilities.",



    action:

    "Develop secure internet integration while maintaining existing memory systems.",



    context:

    strategicContext,



    reasoning:

    reasoningContext,



    comparison:

    comparisonAnalysis



};



}




// =====================================
// DEFAULT
// =====================================


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
