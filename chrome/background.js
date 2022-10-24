chrome.action.onClicked.addListener((tab) => {
    // if (tab.url == "https://web.simple-mmo.com/travel#") {
    //     chrome.tabs.update({ url: "https://web.simple-mmo.com/travel" });
    // } else if (tab.url == "https://web.simple-mmo.com/travel") {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["jquery.min.js", "mod.js"],
    });
    // }
});

// chrome.runtime.onInstalled.addListener(function (details) {
//     if (details.reason == "install") {
//         chrome.notifications.create(
//             "simplemmo-traveltext",
//             {
//                 type: "basic",
//                 iconUrl: "512.png",
//                 title: "SimpleMMO TravelText",
//                 message:
//                     "Click the extensiion while you're on the SimpleMMO website to apply the mod.",
//             },

//             function () {}
//         );
//     }
// });
