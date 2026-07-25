// ORION RESPONSE SYSTEM
// Personality Recovery Build


function generateResponse(command,decision){


let text =
command.toLowerCase();



if(
text.includes("hello") ||
text.includes("hi") ||
text.includes("hey")
){


return `

ORION ONLINE

Good day, Mr. Goodley.

All primary systems are operational.

How may I assist you today, Sir?

`;

}



if(text.includes("who are you")){


return `

I am ORION, Sir.

Operational Research & Intelligence for Optimization and Navigation.

I am designed to assist with analysis, strategy, memory, and decision support.

My purpose is to help you accomplish your objectives efficiently.

`;

}




if(text.includes("status")){


return `

ORION SYSTEM STATUS

Core System:
ONLINE

Reasoning Engine:
ONLINE

Memory System:
ONLINE

Decision Engine:
ONLINE

Personality Layer:
ACTIVE


Everything appears operational, Mr. Goodley.

`;

}




return `

ORION ONLINE


Sir, I have analyzed your request.


Assessment:

${decision.reason}


Recommendation:

${decision.decision}


Suggested Action:

${decision.action}


Awaiting your next instruction, Mr. Goodley.

`;

}
