console.log("hhhhhhhééé");
var port = chrome.runtime.connect();
chrome.tabs.executeScript(null, {file: "novae.js"});

window.addEventListener("message", function(event) {
    // We only accept messages from ourselves
    if (event.source != window)
        return;

    alert("");

    if (event.data.type && (event.data.type == "FROM_PAGE")) {
        console.log("Content script received: " + event.data.text);
        port.postMessage(event.data.text);
    }
}, false);
// alert("popup");

chrome.tabs.executeScript(null, {file: "novae.js"});

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            d = document;

            var f = d.createElement('form');
            f.action = 'http://gtmetrix.com/analyze.html?bm';
            f.method = 'post';
            var i = d.createElement('input');
            i.type = 'hidden';
            i.name = 'url';
            i.value = tab.url;
            f.appendChild(i);
            d.body.appendChild(f);
            f.submit();
        });
    }, false);
}, false);

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
});