(function() {
  // array of adult keywords
  const adultKeywords = ["adult", "porn", "sex", "xxx", "nsfw"];

  // listen for page load
  window.addEventListener("load", function() {
    // check if the current URL contains an adult keyword
    if (adultKeywords.some(keyword => window.location.href.includes(keyword))) {
      // create a button to unblock adult websites
      const button = document.createElement("button");
      button.innerText = "Unblock Adult Websites";
      button.style.position = "fixed";
      button.style.bottom = "20px";
      button.style.right = "20px";
      button.style.zIndex = "9999";
      button.addEventListener("click", function() {
        // send a message to the background script to unblock adult websites
        chrome.runtime.sendMessage({action: "unblock"});
      });
      document.body.appendChild(button);
    }
  });
})();
