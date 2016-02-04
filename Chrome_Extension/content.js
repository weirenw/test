// The ID of the extension we want to talk to.
var editorExtensionId = "fdgaobbifkkcaebeghfhnbdaljmnfjnj";
var url = document.location.href;
// Make a simple request:
var passwordField = document.getElementById('Passwd');
console.log("sending  "+url);  
console.log("sending to "+editorExtensionId);
chrome.runtime.sendMessage(editorExtensionId, {openUrlInEditor: url},function(response) {
  console.log("response: "+response.result);
  if(passwordField!=null){
  	passwordField.value = response.result;
}
});

/*
chrome.runtime.onMessageExternal.addListener( function(request, sender, sendResponse) {

  if (request.openUrlInEditor){
    console.log("from "+sender.id+": "+request.openUrlInEditor);
    sendResponse({"result":"Ok, got your message"}); 
  }else if(request.myCustomMessage){
    console.log("from "+sender.id+": "+request.myCustomMessage);
    sendResponse({"result":"Ok, got your message"}); 
  }
  else{
    sendResponse({"result":"Ops, I don't understand this message"});
  }
});
*/
