// =====================================
// ORION LEARNING SYSTEM
// Adaptive Learning Build 1.0
// =====================================


function saveLearning(type, data){


    let learning =
    JSON.parse(
        localStorage.getItem("orion_learning")
    )
    ||
    {};



    if(!learning[type]){

        learning[type] = [];

    }



    learning[type].push(data);



    localStorage.setItem(
        "orion_learning",
        JSON.stringify(learning)
    );


}




function recallLearning(type){


    let learning =
    JSON.parse(
        localStorage.getItem("orion_learning")
    )
    ||
    {};



    return learning[type] || [];


}




function clearLearning(){


    localStorage.removeItem(
        "orion_learning"
    );


}
