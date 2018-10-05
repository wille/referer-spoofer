chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        for (var i = 0; i < details.requestHeaders.length; ++i) {
			if (details.requestHeaders[i].name === "Referer") {
				var url = new URL(details.url);
				
				details.requestHeaders[i].value = url.protocol + "//" + url.hostname;
				break;
			}
		}
		
		return { requestHeaders: details.requestHeaders };
	},
	{ urls: ["<all_urls>"] },
	[ "blocking", "requestHeaders" ]
);