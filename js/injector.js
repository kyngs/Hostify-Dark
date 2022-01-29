 chrome.runtime.sendMessage({ id: "get_css_file" }, (response) => {
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = response;
    (document.head||document.documentElement).appendChild(style);
});
