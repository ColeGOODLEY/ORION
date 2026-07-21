// =====================================
// ORION RESPONSE ENGINE TEST
// =====================================

const ORION_RESPONSE = {

process: function(command) {

return {
test: "Response engine is working."
};

},

buildResponse: function(result) {

return result.test;

}

};
