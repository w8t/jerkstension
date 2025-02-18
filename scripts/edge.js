console.log("Preparing to edge...")

chrome.storage.sync.get(["edgeDelay", "goonDelay"], (data) => {

    let edgeDelay = data.edgeDelay || 100; 
    let goonDelay = data.goonDelay || 10;

    function loadEdger() {
        let edgeCheck = document.querySelectorAll(".css-fm0s1w-idle-game-UpgradeBoxStyled");

        edgeCheck.forEach(edgeAssister => {
            let edgeText = edgeAssister.querySelector(".name"); // short for category.

            if (edgeText) {
                let edgeLoad = edgeAssister.querySelector(".buttonBuy");
                let edgeCategory = edgeText.innerText.trim();

                if (edgeLoad) {
                    let autoEdge = document.createElement("button");
                    autoEdge.type = 'button';
                    // autoEdge.classList.add(`auto${edgeCategory.replace(/\s+/g, '-')}`); // just incase // wait nvm this is too complicated
                    autoEdge.classList.add('autoEdge');
                    autoEdge.innerHTML = "Enable";
                    edgeLoad.parentNode.insertBefore(autoEdge, edgeLoad.nextSibling);

                    let edgeInterval = {};

                    autoEdge.addEventListener("click", () => {
                        if (autoEdge.innerHTML === "Enable") {
                            autoEdge.innerHTML = "Disable";
                            edgeInterval[edgeCategory] = setInterval(() => {
                                if (!edgeLoad.disabled) {
                                    edgeLoad.click();

                                    if (edgeCategory === "Lube") {
                                        console.log(`Edging with ${edgeCategory} every ${edgeDelay}ms...`);

                                    } else {
                                        console.log(`Edging with a ${edgeCategory} every ${edgeDelay}ms...`);
                                    }
                                }
                            }, data.edgeDelay);
                        } else {
                            autoEdge.innerHTML = "Enable";
                            clearInterval(edgeInterval[edgeCategory]);
                            console.log(`Taking a break with ${edgeCategory}.`)
                        }
                    });
                }
            }
        });
    }

    function loadGooner() {
        let goonPreCheck = document.querySelector(".css-jg52x1-idle-game-VideoPlayerStyled");
        let goonCheck = document.querySelector("video");
        
        if (goonPreCheck) {
            console.log("goonPreCheck found!");
        }
        if (goonCheck) {
            console.log("goonCheck found!");
        }

        if (goonPreCheck && goonCheck) {
            let autoGoon = document.createElement("button");
            autoGoon.type = 'button';
            autoGoon.classList.add('autoEdge', 'autoGoon');
            autoGoon.innerHTML = "Goon";
            goonPreCheck.appendChild(autoGoon);

            let goonInterval = {};

            autoGoon.addEventListener("click", () => {
                if (autoGoon.innerHTML === "Goon") {
                    autoGoon.innerHTML = "Stop";
                    goonInterval = setInterval(() => {
                        goonCheck.click();
                        console.log(`Gooning every ${goonDelay}ms...`);
                    }, data.goonDelay);
                } else {
                    autoGoon.innerHTML = "Goon";
                    clearInterval(goonInterval);
                    console.log("Taking a break to reload shots...")
                }
            });

        } else {
            console.log("No video found... Unable to goon. :(");
        }
    }

    window.addEventListener("load", () => {
        loadEdger();
        loadGooner();
    });
});