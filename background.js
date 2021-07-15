console.log("Background script running")

chrome.runtime.onMessage.addListener(receiver);

window.word = "Coding";

function receiver(request,sender,sendResponse)
{
    console.log(request)
    window.word = request.text;
}