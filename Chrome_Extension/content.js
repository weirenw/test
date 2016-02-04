// The ID of the extension we want to talk to.
var editorExtensionId = "fdgaobbifkkcaebeghfhnbdaljmnfjnj";
var url = "abc";
// Make a simple request:

appendLog("sending to "+editorExtensionId);
chrome.runtime.sendMessage(editorExtensionId, {openUrlInEditor: url},function(response) {
  console.log("response: "+JSON.stringify(response));
});

chrome.runtime.onMessageExternal.addListener( function(request, sender, sendResponse) {

  if (request.openUrlInEditor){
    console.log("from "+sender.id+": "+request.myCustomMessage);
    sendResponse({"result":"Ok, got your message"}); 
  }else{
    sendResponse({"result":"Ops, I don't understand this message"});
  }
});
