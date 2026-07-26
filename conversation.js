// =====================================
// ORION CONVERSATION ENGINE
// Build 1.0
// Short-Term Context System
// =====================================


let conversationHistory =
JSON.parse(
localStorage.getItem("orion_conversation")
)
||
[];




// =====================================
// STORE MESSAGE
// =====================================

function saveConversation(role, message){


conversationHistory.push({

    role:
    role,

    message:
    message,

    timestamp:
    new Date().toISOString()

});


localStorage.setItem(
"orion_conversation",
JSON.stringify(conversationHistory)
);


}




// =====================================
// GET RECENT CONTEXT
// =====================================

function getConversationContext(){


return conversationHistory
.slice(-10);


}




// =====================================
// CLEAR CONVERSATION
// =====================================

function clearConversation(){


conversationHistory = [];


localStorage.removeItem(
"orion_conversation"
);


}




// =====================================
// CONVERSATION STATUS
// =====================================

function conversationCount(){


return conversationHistory.length;


}
