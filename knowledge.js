// =====================================
// ORION KNOWLEDGE ENGINE
// Recovery Build 1.1
// =====================================


function integrateKnowledge(memories){

    if(!memories || memories.length === 0){

        return "";

    }


    let insights = [];


    memories.forEach(memory => {


        let text =
        memory.toLowerCase();


        if(
            text.includes("project") ||
            text.includes("orion")
        ){

            insights.push(
                "The user has an active long-term project related to ORION."
            );

        }


        if(
            text.includes("goal") ||
            text.includes("want")
        ){

            insights.push(
                "The user has identified this as an important personal objective."
            );

        }


        if(
            text.includes("favorite") ||
            text.includes("like") ||
            text.includes("prefer")
        ){

            insights.push(
                "The user has stored personal preferences that may improve personalization."
            );

        }


    });


    if(insights.length === 0){

        return "";

    }


    return `

Knowledge Insights:

• ${[...new Set(insights)].join("\n• ")}

`;

}
