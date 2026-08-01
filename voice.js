// =====================================
// ORION VOICE SYSTEM
// Build 1.2
// Speech Recognition
// Text To Speech
// Push-To-Talk
// HUD Voice Status Integration
// Voice Configuration Layer
// =====================================


const ORION_VOICE = {


recognition: null,

listening: false,

speaking: false,


queue: [],






// =====================================
// VOICE SETTINGS
// =====================================


settings:{

rate:0.90,

pitch:0.80,

volume:1,

voice:null,

profile:"STARK_INTERFACE"

},







// =====================================
// INITIALIZE
// =====================================


init(){



const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;



if(!SpeechRecognition){


console.warn("Speech Recognition not supported.");

return;


}



this.recognition = new SpeechRecognition();



this.recognition.continuous = false;


this.recognition.interimResults = false;


this.recognition.lang = "en-US";





this.loadVoices();






// =====================================
// LISTENING START
// =====================================


this.recognition.onstart = ()=>{


this.listening = true;


console.log("ORION Listening...");



if(typeof ORION_HUD !== "undefined"){

    ORION_HUD.voiceListening();

}


};




// =====================================
// LISTENING END
// =====================================


this.recognition.onend = ()=>{

    this.listening = false;

    console.log("Listening stopped.");

};





// =====================================
// ERROR HANDLING
// =====================================


this.recognition.onerror = (event)=>{


console.error(event.error);



if(typeof ORION_HUD !== "undefined"){


ORION_HUD.voiceIdle();


}



};








// =====================================
// VOICE RESULT
// =====================================


this.recognition.onresult = (event)=>{


const text =
event.results[0][0].transcript;



console.log("Voice:",text);




const input =
document.getElementById("command");



if(input){


input.value = text;


}




if(typeof executeORION === "function"){

    this.listening = false;

    if(typeof ORION_HUD !== "undefined"){

        ORION_HUD.processing();

    }

    executeORION();

}



};




},








// =====================================
// LOAD AVAILABLE VOICES
// =====================================

loadVoices(){


const voices =
window.speechSynthesis.getVoices();



if(!voices.length){

return;

}




// =====================================
// ORION STARK INTERFACE VOICE SEARCH
// =====================================


let preferredVoice = voices.find(voice =>

voice.name.includes("Google UK English Male")

);



if(!preferredVoice){


preferredVoice = voices.find(voice =>

voice.lang === "en-GB"

);


}



if(!preferredVoice){


preferredVoice = voices.find(voice =>

voice.lang === "en-US"

);


}




this.settings.voice =
preferredVoice || voices[0];



console.log(

"ORION Voice Selected:",

this.settings.voice.name

);



},




// =====================================
// START LISTENING
// =====================================



listen(){


if(!this.recognition){

    return;

}


this.recognition.start();


},




// =====================================
// TEXT TO SPEECH
// =====================================


speak(text){



if(!text){


return;


}




this.queue.push(text);



if(!this.speaking){


this.processQueue();


}



},








// =====================================
// SPEECH QUEUE
// =====================================


processQueue(){



if(this.queue.length === 0){


this.speaking = false;



if(typeof ORION_HUD !== "undefined"){


ORION_HUD.voiceIdle();


}


return;


}



const text =
this.queue.shift();




window.speechSynthesis.cancel();




const speech =
new SpeechSynthesisUtterance(text);




speech.rate =
this.settings.rate;


speech.pitch =
this.settings.pitch;


speech.volume =
this.settings.volume;


speech.lang =
"en-US";



if(this.settings.voice){


speech.voice =
this.settings.voice;


}






this.speaking = true;




if(typeof ORION_HUD !== "undefined"){


ORION_HUD.voiceSpeaking();


}





speech.onend = ()=>{


this.speaking = false;



this.processQueue();



};





window.speechSynthesis.speak(speech);



},







// =====================================
// VOICE CONTROL
// =====================================


setVoice(voice){


this.settings.voice = voice;


},





setRate(rate){


this.settings.rate = rate;


},





setPitch(pitch){


this.settings.pitch = pitch;


},






// =====================================
// STOP SPEAKING
// =====================================


stopSpeaking(){



window.speechSynthesis.cancel();



this.queue = [];



this.speaking = false;



if(typeof ORION_HUD !== "undefined"){


ORION_HUD.voiceIdle();


}



}



};







window.speechSynthesis.onvoiceschanged = ()=>{


ORION_VOICE.loadVoices();


};







window.addEventListener("load",()=>{


ORION_VOICE.init();


});
