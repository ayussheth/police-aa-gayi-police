var adultKeywords = ["adult", "porn", "xxx", "sex"];

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url) {
    var url = changeInfo.url.toLowerCase();
    var containsAdult = adultKeywords.some(function(keyword) {
      return url.includes(keyword);
    });
    if (containsAdult) {
      chrome.runtime.sendMessage({action: "alert"});
    }
  }
});
