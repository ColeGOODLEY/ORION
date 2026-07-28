// =====================================
// ORION CONTEXT ENGINE
// Adaptive Context Build 2.0
// Conversation Awareness System
// =====================================



const ORION_CONTEXT = {


    history: [],


    maxHistory: 10,



    // =====================================
    // ADD MESSAGE
    // =====================================

    addMessage(role, message){


        this.history.push({

            role: role,

            message: message,

            timestamp:
            new Date().toISOString()

        });



        if(this.history.length > this.maxHistory){

            this.history.shift();

        }


        this.save();


    },




    // =====================================
    // SAVE CONTEXT
    // =====================================

    save(){


        localStorage.setItem(

            "orion_context",

            JSON.stringify(this.history)

        );


    },




    // =====================================
    // LOAD CONTEXT
    // =====================================

    load(){


        this.history =

        JSON.parse(

            localStorage.getItem(
                "orion_context"
            )

        ) || [];


        return this.history;


    },




    // =====================================
    // GET RECENT CONTEXT
    // =====================================

    getRecent(){


        return this.history.slice(

            -this.maxHistory

        );


    },




    // =====================================
    // CLEAR CONTEXT
    // =====================================

    clear(){


        this.history = [];


        localStorage.removeItem(

            "orion_context"

        );


    }


};




// =====================================
// CONTEXT BUILDER
// =====================================


function getContext(command){



    return {


        user:

        "Mr. Goodley",



        assistant:

        "ORION",



        objective:

        "Provide strategic assistance and guidance.",



        currentCommand:

        command,



        conversationHistory:

        ORION_CONTEXT.getRecent()



    };


}

// =====================================
// INITIALIZE CONTEXT
// =====================================

ORION_CONTEXT.load();
