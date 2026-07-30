// =====================================
// ORION VOICE SYSTEM
// Build 1.0
// Speech Recognition
// Text To Speech
// Push-To-Talk
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

this.recognition.onstart = () =>{

this.listening = true;

console.log("ORION Listening...");

};

this.recognition.onend = () =>{

this.listening = false;

console.log("Listening stopped.");

};

this.recognition.onerror = (event)=>{

console.error(event.error);

};

this.recognition.onresult = (event)=>{

const text =
event.results[0][0].transcript;

console.log("Voice:",text);

const input =
document.getElementById("commandInput");

if(input){

input.value = text;

}

if(typeof executeORION === "function"){

executeORION();

}

};

},

listen(){

if(!this.recognition){

return;

}

this.recognition.start();

},

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

speech.onend = ()=>{

this.speaking = false;

};

window.speechSynthesis.speak(speech);

},

stopSpeaking(){

window.speechSynthesis.cancel();

this.speaking = false;

}

};

window.addEventListener("load",()=>{

ORION_VOICE.init();

});
