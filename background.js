browser = chrome || browser;

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
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);
