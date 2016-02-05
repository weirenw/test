chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    console.log("Request", request);
    if(request.openUrlInEditor){
    console.log("from "+sender.id+": "+request.openUrlInEditor);
    send_bluetooth(socketId, request.openUrlInEditor); // From bluetooth.js
    setTimeout(function() {
      response = read_latest_message();
      console.log("Response",response);
      sendResponse("result" : response);
    }, 1000);
    }else{
	sendResponse({"result":"Ops, I don't understand this message"});
    }
    return true;
});
