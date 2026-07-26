// =====================================
// ORION LEARNING SYSTEM
// Adaptive Learning Build 2.0
// =====================================


// Save learning record
function saveLearning(type, data){

    let learning =
    JSON.parse(
        localStorage.getItem("orion_learning")
    ) || {};



    if(!learning[type]){
        learning[type] = [];
    }



    // Prevent duplicate learning records
    const exists =
    learning[type].some(record =>

        record.command === data.command &&
        record.decision === data.decision

    );



    if(!exists){

        learning[type].push(data);

    }



    localStorage.setItem(
        "orion_learning",
        JSON.stringify(learning)
    );

}



// Recall learning records
function recallLearning(type){

    let learning =
    JSON.parse(
        localStorage.getItem("orion_learning")
    ) || {};



    return learning[type] || [];

}



// Clear all learning
function clearLearning(){

    localStorage.removeItem(
        "orion_learning"
    );

}



// Count learning records
function learningCount(type){

    const learning =
    JSON.parse(
        localStorage.getItem("orion_learning")
    ) || {};



    if(!learning[type]){
        return 0;
    }



    return learning[type].length;

}



// Check whether ORION has already learned something
function hasLearned(type, command, decision){

    const learning =
    recallLearning(type);



    return learning.some(record =>

        record.command === command &&
        record.decision === decision

    );

}
