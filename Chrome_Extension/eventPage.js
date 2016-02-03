chrome.runtime.onMessageExternal.addListener(
		function(request, sender, sendResponse) {
			if (request.myCustomMessage) {
				new Notification('Got message from '+sender.id,
					{ body: request.myCustomMessage });
				sendResponse({"result":"Ok, got your message"});
			} else {
				sendResponse({"result":"Ops, I don't understand this message"});
			}
		});

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
		function(tabs){
			alert(tabs[0].url);
		}
		);

(function(context){

	document.getElementById("appid").value=chrome.runtime.id;  
	var logField = document.getElementById("log");
	var sendText=document.getElementById("sendText");
	var sendText=document.getElementById("sendText");
	var sendId=document.getElementById("sendId");
	var send=document.getElementById("send");

	send.addEventListener('click', function() {
		appendLog("sending to "+sendId.value);
		chrome.runtime.sendMessage(
			sendId.value, 
			{myCustomMessage: sendText.value}, 
			function(response) { 
				appendLog("response: "+JSON.stringify(response));
			})
	});

	var appendLog = function(message) {
		logField.innerText+="\n"+message;
	}

	context.appendLog = appendLog;

})(window)
