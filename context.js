// =====================================
// ORION CONTEXT ENGINE
// Adaptive Context Build 3.0
// Conversation Awareness System
// =====================================



const ORION_CONTEXT = {


    history: [],


    maxHistory: 10,


    maxMessageLength: 300,



    // =====================================
    // SANITIZE MESSAGE
    // =====================================

    sanitizeMessage(message){


        if(!message){

            return "";

        }


        message = String(message).trim();


        if(message.length <= this.maxMessageLength){

            return message;

        }


        return message.substring(0, this.maxMessageLength) + "...";


    },



    // =====================================
    // ADD MESSAGE
    // =====================================

    addMessage(role, message){


        this.history.push({

            role: role,

            message: this.sanitizeMessage(message),

            timestamp:
            new Date().toISOString()

        });



        while(this.history.length > this.maxHistory){

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


        return this.history

        .slice(-this.maxHistory)

        .map(item => {


            return {

                role:item.role,

                message:item.message

            };


        });


    },




    // =====================================
    // GET RELEVANT CONTEXT
    // =====================================

    getRelevant(command){


        if(!command){

            return this.getRecent();

        }


        const keywords =

        command

        .toLowerCase()

        .split(/\s+/)

        .filter(word => word.length > 2);


        const relevant = this.history.filter(item=>{


            const text =

            item.message.toLowerCase();


            return keywords.some(

                word=>text.includes(word)

            );


        });


        if(relevant.length === 0){

            return this.getRecent();

        }


        return relevant.slice(-this.maxHistory).map(item=>{


            return{

                role:item.role,

                message:item.message

            };


        });


    },




    // =====================================
    // CONTEXT SUMMARY
    // =====================================

    getSummary(){


        if(this.history.length === 0){

            return "";

        }


        const recent =

        this.history

        .slice(-3)

        .map(item=>item.message);


        return recent.join(" ");


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



        conversationSummary:

        ORION_CONTEXT.getSummary(),



        conversationHistory:

        ORION_CONTEXT.getRelevant(command)



    };


}




// =====================================
// INITIALIZE CONTEXT
// =====================================

ORION_CONTEXT.load();
