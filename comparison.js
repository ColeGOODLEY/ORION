// =====================================
// ORION COMPARISON ENGINE
// Strategic Comparison Build 1.1
// =====================================


function compareOptions(command){


    let text =
    command.toLowerCase();



    if(
        text.includes("memory") ||
        text.includes("internet")
    ){


        return {


            optionA:
            "Improve Memory",


            optionB:
            "Add Internet Access",



            optionAAnalysis:
            "Improves personalization, user understanding, and ORION's ability to provide tailored assistance.",



            optionBAnalysis:
            "Provides external information access and expands ORION's available knowledge sources.",



            comparison:
            "Memory creates a stronger internal foundation, while internet access expands external capability. A personalized foundation improves the value of future external connections."


        };


    }



    return {


        optionA:
        "No option detected",


        optionB:
        "No option detected",


        optionAAnalysis:
        "",


        optionBAnalysis:
        "",


        comparison:
        "No comparison required."

    };


}
