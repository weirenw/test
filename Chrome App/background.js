console.log("chrome app background js");
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
  	console.log("in listenr");
	if (request.openUrlInEditor){
		console.log("from "+sender.id+": "+request.openUrlInEditor);
		sendResponse({"password123"});
	}else if(request.myCustomMessage){
		console.log("from "+sender.id+": "+request.myCustomMessage);
		sendResponse({"result":"Ok, got your message"});
	}
	else{
	  sendResponse({"result":"Ops, I don't understand this message"});
	}
});

/*
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width': 400,
    'height': 500
    }
  });
});
*/
