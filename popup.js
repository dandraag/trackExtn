chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {anime:"getanime"}, function(y) {
      document.getElementById("lol1").innerText = y;
  });
});
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {eps:"geteps"}, function(p) {
      document.getElementById("lol2").innerText = p;
  });
});