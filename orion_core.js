// =====================================
// ORION CORE
// Adaptive Learning Build 1.9
// Central Processing System
// =====================================


const ORION = {


    process(command){


        const brain =
        analyzeCommand(command);



        const context =
        getContext(command);



        const personalMemories =
        getRelevantMemories(command);



        const knowledge =
        integrateKnowledge(
            personalMemories
        );



        const reasoning =
        processReasoning(
            command,
            brain,
            context,
            personalMemories,
            knowledge
        );



        const comparison =
        compareOptions(command);



        const evaluation =
        evaluateDecision(
            command,
            comparison,
            knowledge
        );



        const decision =
        makeDecision(
            command,
            comparison,
            knowledge,
            reasoning
        );



        // =====================================
        // ORION LEARNING CAPTURE
        // =====================================


        if(
            decision &&
            decision.decision
        ){

            saveLearning(
                "decisions",
                {

                    command:
                    command,


                    decision:
                    decision.decision,


                    reason:
                    decision.reason,


                    timestamp:
                    new Date().toISOString()

                }
            );

        }



        return generateResponse(
            command,
            decision,
            personalMemories,
            knowledge,
            reasoning,
            comparison,
            evaluation
        );


    }


};
