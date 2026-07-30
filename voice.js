// =====================================
// ORION VOICE SYSTEM
// Build 1.1
// Speech Recognition
// Text To Speech
// Push-To-Talk
// HUD Voice Status Integration
// =====================================


const ORION_VOICE = {


recognition: null,

listening: false,

speaking: false,




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



if(!this.speaking){


if(typeof ORION_HUD !== "undefined"){


ORION_HUD.voiceIdle();


}


}



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


executeORION();


}



};




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



window.speechSynthesis.cancel();




const speech =
new SpeechSynthesisUtterance(text);




speech.rate = 1;


speech.pitch = 1;


speech.volume = 1;


speech.lang = "en-US";




this.speaking = true;




if(typeof ORION_HUD !== "undefined"){


ORION_HUD.voiceSpeaking();


}





speech.onend = ()=>{


this.speaking = false;




if(typeof ORION_HUD !== "undefined"){


ORION_HUD.voiceIdle();


}



};





window.speechSynthesis.speak(speech);



},






// =====================================
// STOP SPEAKING
// =====================================


stopSpeaking(){



window.speechSynthesis.cancel();



this.speaking = false;



if(typeof ORION_HUD !== "undefined"){


ORION_HUD.voiceIdle();


}



}



};





window.addEventListener("load",()=>{


ORION_VOICE.init();


});
