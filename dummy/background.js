function reddenPage() {
    document.body.style.backgroundColor = 'red';
}

chrome.action.onClicked.addListener((tab) => {
    console.log("dsfoiajsdfoiajs");
    if (tab.url.includes('chrome://')) {
        return;
    }
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: reddenPage
    })
});
