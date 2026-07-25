// ORION CORE CONTROLLER
// Recovery Build v1.0

function executeORION() {

    const input =
        document.getElementById("command").value.trim();

    const output =
        document.getElementById("response");

    if (input === "") {

        output.innerHTML =
            "Awaiting your command, Mr. Goodley.";

        return;

    }

    let response = ORION(input);

    output.innerHTML = response;

    document.getElementById("command").value = "";

}

function ORION(command) {

    let brain =
        analyzeCommand(command);

    let context =
        getContext(command);

    let memories =
        searchMemory(command);

    let reasoning =
        processReasoning(
            command,
            brain,
            context,
            memories
        );

    let decision =
        makeDecision(reasoning);

    return generateResponse(
        command,
        decision
    );

}
