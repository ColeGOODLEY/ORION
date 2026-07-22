// =====================================
// ORION COMPARISON ENGINE v1.0
// =====================================

const ORION_COMPARISON = {

extract:function(objective){

let result = {

comparison:false,
options:[]

};

let text =
objective.toLowerCase().trim();

if(
text.includes(" or ")
){

result.comparison = true;

result.options =
text
.replace("should i","")
.split(" or ")
.map(function(option){

return option.trim();

});

}

return result;

},


compare:function(objective){

let comparison =
this.extract(objective);

if(
comparison.comparison === false
){

return null;

}

let bestOption = null;

let bestScore = -9999;

comparison.options.forEach(function(option){

let score =
ORION_EVALUATION.evaluate(option);

if(
score.total > bestScore
){

bestScore = score.total;

bestOption = {

option:option,

score:score

};

}

});

return {

options:comparison.options,

winner:bestOption

};

}

};
