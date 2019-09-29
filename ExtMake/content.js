
//console.log(x);
chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
      switch(message.anime) {
          case "getanime":
              var x = document.getElementsByClassName("series-title");
              var y = x[0].innerText;
              sendResponse(y);
              break;
          default:
              console.error("Unrecognised message: ", message);
      }
  }
);

//console.log(p);
//console.log(z);

chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
      switch(message.eps) {
          case "geteps":
              var q = document.getElementsByClassName("series-episode")[0].textContent;
              var p = parseInt(q.substr(8+q.search("Episode"),3));
              var z = parseInt(q.substr(7+q.search("Season"),3));
              sendResponse(p);
              break;
          default:
              console.error("Unrecognised message: ", message);
      }
  }
);
/*var x = document.getElementsByClassName("series-title");
console.log("yo");
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {title:x[0].innerText});
});
var y = document.getElementsByClassName("series-title");
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, y[0].innerText, function() {
    console.log('lol');
  });
});*/