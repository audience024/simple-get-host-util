// this is simple get url host method
function getHost(url) {
    var host = "null";
    if(typeof url == "undefined" || null == url) {
        url = window.location.href;
    }
    var regex = /^\w+\:\/\/([^\/]*).*/;
    var match = url.match(regex);
    if(typeof match != "undefined" && null != match) {
        host = match[1];
    }
    return host;
}

module.exports = getHost;
