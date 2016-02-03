// The ID of the extension we want to talk to.
var editorExtensionId = "fdgaobbifkkcaebeghfhnbdaljmnfjnj";
var url = "abc";
// Make a simple request:
chrome.runtime.sendMessage(editorExtensionId, {openUrlInEditor: url},function(response) {
  console.log("send message");
  if (!response.success)
  handleError(url);
});

chrome.runtime.onMessageExternal.addListener( function(request, sender, sendResponse) {
  //request = password fill password into web page

  if(request.type == "autoFill"){
    //autofill function
   }

  if (request.openUrlInEditor)
  	openUrl(request.openUrlInEditor);
});
