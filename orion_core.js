// =====================================
// ORION CORE
// Adaptive Planning Build 2.0
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

        const plan =
        createPlan(command);

        // =====================================
        // ORION LEARNING CAPTURE
        // =====================================

        if(
            decision &&
            decision.decision &&
            decision.decision !== "No decision required."
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
            evaluation,
            plan
        );

    }

};
