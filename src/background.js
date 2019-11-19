import browser from 'webextension-polyfill';

browser.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    const url = new URL(details.url);

    for (const header of details.requestHeaders) {
      if (header.name === "Referer") {
        const newValue = `${url.protocol}//${url.hostname}/`;;
        console.log(`${header.value} -> ${newValue}`);

        header.value = newValue;
      }
    }

    return {
      responseHeaders: details.responseHeaders,
    };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);
