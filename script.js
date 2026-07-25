// =====================================
// ORION SCRIPT
// Recovery Build 1.0
// =====================================

function executeORION() {

    const input =
        document.getElementById("command");

    const output =
        document.getElementById("response");

    const command =
        input.value.trim();

    if (command === "") {

        output.innerHTML =
            "Awaiting your command, Mr. Goodley.";

        return;

    }

    output.innerHTML =
        ORION.process(command);

    input.value = "";

}
