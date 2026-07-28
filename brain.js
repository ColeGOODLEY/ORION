// =====================================
// ORION BRAIN SYSTEM
// Adaptive Intelligence Build 3.3
// Local Routing + AI Integration Fix
// =====================================



function analyzeCommand(command){


    const text =
    command.toLowerCase().trim();


    let intent = "conversation";

    let confidence = "medium";

    let category = "general";



    // =====================================
    // MEMORY
    // =====================================

    if(

        text.startsWith("remember ") ||

        text.includes("what do you remember") ||

        text.includes("what do you know about me") ||

        text.includes("memory")

    ){

        intent = "memory";
        category = "memory";
        confidence = "high";

    }



    // =====================================
    // LEARNING
    // =====================================

    else if(

        text.includes("learning") ||

        text.includes("what have you learned") ||

        text.includes("show learning") ||

        text.includes("clear learning")

    ){

        intent = "learning";
        category = "learning";
        confidence = "high";

    }



    // =====================================
    // PERSONALITY
    // =====================================

    else if(

        text.includes("who are you") ||

        text.includes("personality") ||

        text.includes("describe yourself") ||

        text.includes("what are you like")

    ){

        intent = "personality";
        category = "identity";
        confidence = "high";

    }



    // =====================================
    // STATUS
    // =====================================

    else if(

        text === "status" ||

        text.includes("system status") ||

        text.includes("diagnostic") ||

        text.includes("systems online")

    ){

        intent = "status";
        category = "system";
        confidence = "high";

    }



    // =====================================
    // CONFIDENCE
    // =====================================

    else if(

        text.includes("confidence") ||

        text.includes("certainty")

    ){

        intent = "confidence";
        category = "analysis";
        confidence = "high";

    }



    // =====================================
    // GOALS
    // =====================================

    else if(

        text.includes("goal") ||

        text.includes("objective") ||

        text.includes("progress")

    ){

        intent = "goal";
        category = "planning";
        confidence = "high";

    }



    // =====================================
    // PLANNING
    // =====================================

    else if(

        text.includes("plan") ||

        text.includes("roadmap") ||

        text.includes("next step") ||

        text.includes("mission")

    ){

        intent = "planning";
        category = "planning";
        confidence = "high";

    }



    // =====================================
    // ENGINEERING
    // =====================================

    else if(

        text.includes("bug") ||

        text.includes("fix") ||

        text.includes("javascript") ||

        text.includes("js") ||

        text.includes("html") ||

        text.includes("css") ||

        text.includes("code") ||

        text.includes("coding") ||

        text.includes("program") ||

        text.includes("error")

    ){

        intent = "engineering";
        category = "technical";
        confidence = "high";

    }



    // =====================================
    // DECISION
    // =====================================

    else if(

        text.includes("should") ||

        text.includes("choose") ||

        text.includes("decide") ||

        text.includes("which") ||

        text.includes("best option")

    ){

        intent = "decision";
        category = "analysis";
        confidence = "high";

    }



    // =====================================
    // GREETING
    // =====================================

    else if(

        text === "hello" ||

        text === "hi" ||

        text === "hey" ||

        text === "good morning" ||

        text === "good afternoon" ||

        text === "good evening"

    ){

        intent = "greeting";
        category = "conversation";
        confidence = "high";

    }



    // =====================================
    // IDENTITY
    // =====================================

    else if(

        text.includes("your name")

    ){

        intent = "identity";
        category = "identity";
        confidence = "high";

    }



    return {


        intent:intent,

        category:category,

        confidence:confidence,

        command:command


    };


}




// =====================================
// ORION AI BRAIN ROUTER
// =====================================


async function processBrain(command){



    const analysis =
    analyzeCommand(command);




    // =====================================
    // LOCAL SYSTEM ROUTING
    // =====================================


   const localIntents = [

    "memory",

    "learning",

    "personality",

    "status",

    "greeting",

    "identity",

    "confidence",

    "goal"

];



    if(localIntents.includes(analysis.intent)){



        return {


            source:"ORION_CORE",


            analysis:analysis,


            reasoning:

            typeof buildReasoningSummary === "function"

            ?

            buildReasoningSummary(

                command,

                analysis

            )

            :

            "",



            knowledge:

            typeof integrateKnowledge === "function"

            ?

            integrateKnowledge(

                searchRelevantMemories(command)

            )

            :

            "",



            response:null


        };


    }





    // =====================================
    // AI BRAIN CONNECTION
    // =====================================


    let aiResponse;



    if(typeof ORION_BRAIN !== "undefined"){



        aiResponse =

        await ORION_BRAIN.think(


            command,


            {


                identity:

                typeof ORION_IDENTITY !== "undefined"

                ?

                ORION_IDENTITY

                :

                {},



                personality:

                typeof ORION_PERSONALITY !== "undefined"

                ?

                ORION_PERSONALITY

                :

                {},



                memory:

                typeof searchRelevantMemories === "function"

                ?

                searchRelevantMemories(command)

                :

                [],



                knowledge:

                typeof integrateKnowledge === "function"

                ?

                integrateKnowledge(

                    searchRelevantMemories(command)

                )

                :

                "",



                conversation:

                typeof ORION_CONTEXT !== "undefined"

                &&

                typeof ORION_CONTEXT.getRecent === "function"

                ?

                ORION_CONTEXT.getRecent()

                :

                [],



                analysis:analysis,



                reasoning:

                typeof buildReasoningSummary === "function"

                ?

                buildReasoningSummary(

                    command,

                    analysis

                )

                :

                ""


            }


        );


    }

    else{


        aiResponse =

        "AI Brain connection unavailable.";


    }




    return {


        source:"AI_BRAIN",


        analysis:analysis,



        reasoning:

        typeof buildReasoningSummary === "function"

        ?

        buildReasoningSummary(

            command,

            analysis

        )

        :

        "",



        knowledge:

        typeof integrateKnowledge === "function"

        ?

        integrateKnowledge(

            searchRelevantMemories(command)

        )

        :

        "",



        response:aiResponse


    };


}
