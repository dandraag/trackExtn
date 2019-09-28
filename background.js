chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'twist.moe'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
  });
 /* var x = document.getElementsByClassName("series-title");
console.log(x[0].innerText);
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //chrome.tabs.sendMessage(tabs[0].id, x[0].innerText);
});*/
  /*var x = document.getElementsByClassName("series-title");
  console.log("yo");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {title:x[0].innerText} , function() {
      console.log('lol');
    });
  });
  var y = document.getElementsByClassName("series-title");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, y[0].innerText, function() {
      console.log('lol');
    });
  });*/


  /*{
    "name": "TrackingExtension",
    "version": "1.0",
    "description": "Track streamed movies/anime",
    "manifest_version": 2,
    "content_scripts": [
      {
        "matches": [
          "<all_urls>"
        ],
        "js" : ["content.js"]
      }
    ],
    "page_action": {
      "default_popup": "popup.html"
    },
    "permissions": [
      "activeTab"
    ]
}
*/