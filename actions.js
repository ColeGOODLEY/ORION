// actions.js

function executeAction(decision) {
    switch (decision.action) {

        case "RESPOND":
            return {
                success: true,
                output: decision.message
            };

        case "SAVE_MEMORY":
            // call memory system
            return {
                success: true,
                output: "Memory stored."
            };

        case "SET_GOAL":
            // future goal manager
            return {
                success: true,
                output: "Goal created."
            };

        default:
            return {
                success: false,
                output: "Unknown action."
            };
    }
}

export { executeAction };
