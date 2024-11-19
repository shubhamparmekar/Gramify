chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ points: 0 });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "updatePoints") {
        chrome.storage.sync.get("points", (data) => {
            const updatedPoints = data.points + request.points;
            chrome.storage.sync.set({ points: updatedPoints }, () => {
                sendResponse({ success: true, points: updatedPoints });
            });
        });
        return true;
    }
});