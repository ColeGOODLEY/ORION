// =====================================
// ORION KNOWLEDGE ENGINE
// Adaptive Knowledge Build 2.0
// Memory Intelligence Integration
// =====================================



// =====================================
// ANALYZE STORED KNOWLEDGE
// =====================================

function integrateKnowledge(memories){


    if(
        !memories ||
        Object.keys(memories).length === 0
    ){

        return "";

    }



    let insights = [];



    for(const category in memories){


        if(!Array.isArray(memories[category])){

            continue;

        }



        memories[category].forEach(memory=>{


            if(typeof memory !== "string"){

                return;

            }



            const text =
            memory.toLowerCase();




            // =============================
            // PROJECT KNOWLEDGE
            // =============================

            if(

                text.includes("orion") ||

                text.includes("project") ||

                text.includes("ai")

            ){

                insights.push(
                "The user is actively developing an AI project and values long-term system improvement."
                );

            }




            // =============================
            // GOAL KNOWLEDGE
            // =============================

            if(

                text.includes("goal") ||

                text.includes("want") ||

                text.includes("achieve")

            ){

                insights.push(
                "The user has identified personal objectives that should influence strategic recommendations."
                );

            }




            // =============================
            // PREFERENCE KNOWLEDGE
            // =============================

            if(

                text.includes("favorite") ||

                text.includes("like") ||

                text.includes("prefer")

            ){

                insights.push(
                "The user has stored preferences that can improve personalization."
                );

            }




            // =============================
            // SKILL KNOWLEDGE
            // =============================

            if(

                text.includes("learn") ||

                text.includes("skill") ||

                text.includes("coding")

            ){

                insights.push(
                "The user is focused on learning and capability development."
                );

            }



        });


    }




    if(insights.length === 0){

        return "";

    }



    return `

ORION KNOWLEDGE INSIGHTS:

• ${[...new Set(insights)].join("\n• ")}

`;

}





// =====================================
// BUILD KNOWLEDGE CONTEXT
// =====================================


function buildKnowledgeContext(command){



    if(
        typeof getAllMemories !== "function"
    ){

        return "";

    }




    const memories =
    getAllMemories();




    return integrateKnowledge(memories);



}
