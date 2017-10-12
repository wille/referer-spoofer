import WebRequestHeadersDetails = chrome.webRequest.WebRequestHeadersDetails;

const listener = (details: WebRequestHeadersDetails) => {
    const headers = details.requestHeaders;

    if (headers) {
        // Loop all referer headers (because why not)
        for (let header of headers) {
            if (header.name === "Referer") {
                // Set the header to protocol + hostname of the current page
                let url = new URL(details.url);
                header.value = url.protocol + "//" + url.hostname;
            }
        }

        // return modified headers
        return { requestHeaders: headers };
    }
};

chrome.webRequest.onBeforeSendHeaders.addListener(listener, { urls: ["<all_urls>"] }, ["blocking", "requestHeaders"]);
