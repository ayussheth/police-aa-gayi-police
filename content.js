(function() {
  // array of adult keywords
  const adultKeywords = ["adult", "porn", "sex", "xxx", "nsfw"];

  // listen for page load
  window.addEventListener("load", function() {
    // check if the current URL contains an adult keyword
    if (adultKeywords.some(keyword => window.location.href.includes(keyword))) {
      // send a message to the background script to show the alert
      chrome.runtime.sendMessage({action: "alert"});
    }
  });
})();
