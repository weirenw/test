chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    console.log("Request", request);
    if(request.openUrlInEditor){
    console.log("from "+sender.id+": "+request.openUrlInEditor);
//    sendResponse({"result" : "gtiisp123"});
    send_bluetooth(socketId, request.openUrlInEditor); // From bluetooth.js
    setTimeout(function() {
      response = read_latest_message();
      console.log("Response",response);
      sendResponse( response);
    }, 1000);
    }else{
	sendResponse({"result":"Ops, I don't understand this message"});
    }
    return true;
});
