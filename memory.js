// ORION MEMORY SYSTEM v0.1

function saveMemory(key, value){

localStorage.setItem(key, value);

}


function recallMemory(key){

return localStorage.getItem(key);

}


function clearMemory(key){

localStorage.removeItem(key);

}
