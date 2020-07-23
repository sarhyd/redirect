const baseURL = "https://www.google.com/search?q=";
const pattern = "https://beta.cliqz.com/*";
function redirect(requestDetails) {
  const urlParams = new URLSearchParams(requestDetails.url);
  return {
    redirectUrl: baseURL + urlParams.get("q"),
  };
}

browser.webRequest.onBeforeRequest.addListener(redirect, { urls: [pattern] }, [
  "blocking",
]);
