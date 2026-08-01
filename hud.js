// =====================================
// ORION HUD CONTROLLER
// System Visualization Layer
// Voice + State Integration Build 1.2
// =====================================

const ORION_HUD = {

    // =====================================
    // UPDATE SYSTEM CARD
    // =====================================

    update(system, status){

        const element = document.getElementById(system + "-status");

        if(!element){
            return;
        }

        element.innerHTML = status;

    },



    // =====================================
    // UPDATE MAIN STATE
    // =====================================

    state(status){

        const element = document.getElementById("orion-state");

        if(!element){
            return;
        }

        element.innerHTML = status;

    },



    // =====================================
    // THINKING
    // =====================================

    processing(){

        this.update("brain","PROCESSING");
        this.update("memory","ACCESSING");
        this.update("learning","ACTIVE");
        this.update("planning","THINKING");

        this.state("THINKING");

    },



    // =====================================
    // READY
    // =====================================

    ready(){

        this.update("brain","READY");
        this.update("memory","ONLINE");
        this.update("learning","ACTIVE");
        this.update("planning","READY");

        this.state("IDLE");

    },



    // =====================================
    // VOICE LISTENING
    // =====================================

    voiceListening(){

        this.update("voice","LISTENING");
        this.state("LISTENING");

    },



    // =====================================
    // VOICE SPEAKING
    // =====================================

    voiceSpeaking(){

        this.update("voice","SPEAKING");
        this.state("SPEAKING");

    },



    // =====================================
    // VOICE IDLE
    // =====================================

    voiceIdle(){

        this.update("voice","IDLE");
        this.state("IDLE");

    }

};

console.log("ORION HUD Controller Online.");
