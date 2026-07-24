// =====================================
// ORION DECISION ENGINE v1.0
// =====================================
// Purpose:
// Evaluates options, compares choices,
// and recommends the best decision path.
// =====================================

const ORION_DECISION = {

    version: "1.0",

    evaluate: function(objective, options) {

        if (!objective) {
            return {
                decision: "No objective detected.",
                reason: "ORION needs a goal before making a decision.",
                actions: [
                    "Provide the goal.",
                    "Provide available options."
                ]
            };
        }

        if (!options || options.length === 0) {
            return {
                decision: "No options available.",
                reason: "ORION cannot compare without choices.",
                actions: [
                    "Add possible options.",
                    "Request another evaluation."
                ]
            };
        }


        let results = [];

        options.forEach(option => {

            let score = 0;

            let name = option.toLowerCase();


            // Impact evaluation
            if (
                name.includes("improve") ||
                name.includes("upgrade") ||
                name.includes("build") ||
                name.includes("create")
            ) {
                score += 3;
            }


            // Long term value
            if (
                name.includes("memory") ||
                name.includes("learning") ||
                name.includes("intelligence") ||
                name.includes("system")
            ) {
                score += 4;
            }


            // Speed / usefulness
            if (
                name.includes("internet") ||
                name.includes("connection") ||
                name.includes("access")
            ) {
                score += 3;
            }


            // Difficulty penalty
            if (
                name.includes("complex") ||
                name.includes("hard")
            ) {
                score -= 1;
            }


            results.push({
                option: option,
                score: score
            });

        });


        // Sort highest score first
        results.sort(function(a,b){
            return b.score - a.score;
        });


        let winner = results[0];


        return {

            decision: winner.option,

            score: winner.score,

            reason:
            "This option provides the strongest combination of long-term value, system improvement, and strategic advantage.",


            comparison: results,


            actions: [
                "Implement the selected option.",
                "Measure improvement.",
                "Reevaluate future priorities."
            ]

        };

    },


    compare: function(option1, option2) {

        return this.evaluate(
            "Compare options",
            [
                option1,
                option2
            ]
        );

    },


    strategicChoice: function(goal, choices) {

        return this.evaluate(
            goal,
            choices
        );

    }

};


// Make available to ORION brain system

if (typeof module !== "undefined") {
    module.exports = ORION_DECISION;
}
