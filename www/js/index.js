// Default handlers
var successCallback = function(data) {
    alert("Success!");
}

var errorCallback = function(errMsg) {
    alert("Error! " + errMsg);
}

window.plugins.launcher.launch({
    packageName: "com.termux",
    activityName: "com.termux.app.TermuxActivity"
}, successCallback, errorCallback);