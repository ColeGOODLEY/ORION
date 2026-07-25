function executeORION() {

    const output = document.getElementById("response");

    if (typeof ORION === "undefined") {

        output.innerHTML =
        "ERROR: ORION Core is not loaded.";

        return;

    }


    output.innerHTML =
    "SUCCESS: ORION Core is loaded.";

}
