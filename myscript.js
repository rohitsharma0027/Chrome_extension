let bgPage = chrome.extension.getBackgroundPage()
let word = bgPage.word;
document.getElementById('myParagraph').innerHTML = word;