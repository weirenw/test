console.log("chrome app background js");
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
  	console.log("listen");
	if (request.openUrlInEditor){
		console.log("from "+sender.id+": "+request.openUrlInEditor)
  		openUrl(request.openUrlInEditor);
	}
});


chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width': 400,
    'height': 500
    }
  });
});
