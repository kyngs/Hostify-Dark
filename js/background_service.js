chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.id === "get_css_file") {
      sendResponse(chrome.runtime.getURL('css/style-override.css'));
  }
});
