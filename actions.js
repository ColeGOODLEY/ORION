// actions.js

const Actions = {

    respond(decision) {
        return {
            success: true,
            message: decision.message
        };
    },

    saveMemory(decision) {
        // Hook into memory.js later

        return {
            success: true,
            message: "Memory saved."
        };
    },

    createGoal(decision) {
        // Hook into goals.js later

        return {
            success: true,
            message: "Goal created."
        };
    },

    unknown() {
        return {
            success: false,
            message: "I don't know how to perform that action yet."
        };
    }

};

export function executeAction(decision) {

    switch (decision.action) {

        case "RESPOND":
            return Actions.respond(decision);

        case "SAVE_MEMORY":
            return Actions.saveMemory(decision);

        case "CREATE_GOAL":
            return Actions.createGoal(decision);

        default:
            return Actions.unknown();

    }

}
