// ORION SCRIPT TEST

function executeORION() {

    const input =
    document.getElementById("command");

    const output =
    document.getElementById("response");


    const command =
    input.value.trim();


    output.innerHTML =
    "Step 1: Button works<br>";


    if(command === ""){

        output.innerHTML +=
        "Step 2: Empty command";

        return;

    }


    output.innerHTML +=
    "Step 3: Command received: " + command + "<br>";


    if(typeof ORION === "undefined"){

        output.innerHTML +=
        "Step 4 FAILED: ORION does not exist";

        return;

    }


    output.innerHTML +=
    "Step 4: ORION exists<br>";


    if(typeof ORION.process !== "function"){

        output.innerHTML +=
        "Step 5 FAILED: ORION process missing";

        return;

    }


    output.innerHTML +=
    "Step 5: Calling ORION Core<br>";


    output.innerHTML +=
    ORION.process(command);


}
