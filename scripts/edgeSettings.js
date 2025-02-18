document.addEventListener("DOMContentLoaded", () => {
    let edgeDelay = document.getElementById("edgeDelay");
    let goonDelay = document.getElementById("goonDelay");

    let saveStrokes = document.getElementById("saveSettings");

    chrome.storage.sync.get(["edgeDelay", "goonDelay"], (data) => {
        if (data.edgeDelay) {
            edgeDelay.value = data.edgeDelay;
        }
        if (data.goonDelay) {
            goonDelay.value = data.goonDelay;
        }
    });

    saveStrokes.addEventListener("click", () => {
        let edgeDelayValue = parseInt(edgeDelay.value);
        let goonDelayValue = parseInt(goonDelay.value);

        if (isNaN(edgeDelayValue)) {
            alert("You can't edge with that value. Tell me how fast you want to edge (number input).")
            return;
        }

        if (isNaN(goonDelayValue)) {
            alert("You can't goon at that speed. Tell me how fast you want to goon (number input).")
            return;
        }

        chrome.storage.sync.set({
            edgeDelay: edgeDelayValue,
            goonDelay: goonDelayValue
        }, () => {
            console.log(`Edge frequency set to once every ${edgeDelayValue}ms.`);
            console.log(`Goon frequency set to once every ${goonDelayValue}ms.`);
        });
    });
});