chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === 'complete') {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["./script.js"],
      }
    )
    .then(() => console.log('Script injected'))
    .catch(err => console.log(err));
  }
})