browser.browserAction.onClicked.addListener((tab) => {
    // if (tab.url == "https://web.simple-mmo.com/travel#") {
    //     tab.url = "https://web.simple-mmo.com/travel";
    // } else if (tab.url == "https://web.simple-mmo.com/travel") {
    browser.tabs.executeScript(tab.id, {
        file: "jquery.min.js",
    });

    browser.tabs.executeScript(tab.id, {
        file: "mod.js",
    });
    // }
});

/* https://stackoverflow.com/a/40517636/13524375 */
// browser.storage.get("local", "install_date").then(function (install_date) {
//     if (!install_date) {
//         browser.storage.set("local", {
//             install_date: Date.now(),
//         });

//         browser.notifications.create({
//             type: "basic",
//             iconUrl: browser.extension.getURL("512.png"),
//             title: "SimpleMMO TravelText",
//             message:
//                 "Click the extensiion while you're on the SimpleMMO website to apply the mod.",
//         });
//     }
// });

// browser.notifications.create({
//     type: "basic",
//     iconUrl: browser.extension.getURL("512.png"),
//     title: "SimpleMMO TravelText",
//     message:
//         "Click the extensiion while you're on the SimpleMMO website to apply the mod.",
// });
