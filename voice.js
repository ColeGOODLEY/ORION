// =====================================
// ORION VOICE SYSTEM
// Build 1.3
// Speech Recognition
// Text To Speech
// Push-To-Talk
// HUD Voice Status Integration
// Stark Interface Voice Profile
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


rate:0.88,

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


console.warn(
"Speech Recognition not supported."
);


return;


}



this.recognition =
new SpeechRecognition();



this.recognition.continuous = false;


this.recognition.interimResults = false;


this.recognition.lang = "en-US";





this.loadVoices();







// =====================================
// LISTENING START
// =====================================


this.recognition.onstart = ()=>{


this.listening = true;


console.log(
"ORION Listening..."
);



if(typeof ORION_HUD !== "undefined"){

    ORION_HUD.voiceListening();

}


};







// =====================================
// LISTENING END
// =====================================


this.recognition.onend = ()=>{


this.listening = false;


console.log(
"Listening stopped."
);



};







// =====================================
// ERROR
// =====================================


this.recognition.onerror = (event)=>{


console.error(
event.error
);



if(typeof ORION_HUD !== "undefined"){

    ORION_HUD.voiceIdle();

}


};








// =====================================
// RESULT
// =====================================


this.recognition.onresult = (event)=>{


const text =
event.results[0][0].transcript;



console.log(
"Voice:",
text
);




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
// LOAD VOICES
// =====================================


loadVoices(){


const voices =
window.speechSynthesis.getVoices();



if(!voices.length){

return;

}



// =====================================
// ORION STARK VOICE SELECTION
// =====================================


let preferredVoice =
voices.find(voice =>

voice.name === "Chrome OS US English 8"

);



if(!preferredVoice){

preferredVoice =
voices.find(voice =>

voice.name.includes("Chrome OS US English 5")

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
// LISTEN
// =====================================


listen(){



if(!this.recognition){

return;

}



this.recognition.start();



},







// =====================================
// SPEAK
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

this.settings.voice

?

this.settings.voice.lang

:

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
// VOICE CONTROLS
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
// STOP
// =====================================


stopSpeaking(){


window.speechSynthesis.cancel();


this.queue = [];


this.speaking = false;


if(typeof ORION_HUD !== "undefined"){

    ORION_HUD.voiceIdle();

}


},





// =====================================
// VOICE DIAGNOSTIC
// =====================================


showVoices(){


const voices =
window.speechSynthesis.getVoices();



let output =
"AVAILABLE ORION VOICES:\n\n";



voices.forEach((voice,index)=>{


output +=

index +
": " +
voice.name +
" (" +
voice.lang +
")\n";


});



const response =
document.getElementById("response");



if(response){

response.innerHTML =
output;

}



}



};








window.speechSynthesis.onvoiceschanged = ()=>{


ORION_VOICE.loadVoices();


};







window.addEventListener("load",()=>{


ORION_VOICE.init();


});
