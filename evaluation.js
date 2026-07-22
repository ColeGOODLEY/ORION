// =====================================
// ORION EVALUATION ENGINE v1.0
// =====================================

const ORION_EVALUATION = {

evaluate:function(option){

let score = {

value:5,
foundation:5,
risk:5,
effort:5

};


// Foundation

if(
option.includes("memory") ||
option.includes("reasoning") ||
option.includes("core")
){

score.foundation = 10;
score.value = 9;

}


// Validation

if(
option.includes("user") ||
option.includes("customer") ||
option.includes("feedback")
){

score.value = 9;
score.foundation = 8;

}


// Business

if(
option.includes("business") ||
option.includes("revenue")
){

score.value = 8;

}


// Internet

if(
option.includes("internet") ||
option.includes("tool")
){

score.value = 7;
score.foundation = 5;
score.risk = 6;

}


score.total =
score.value +
score.foundation -
score.risk -
score.effort;

return score;

}

};
