$(document).ready(function window_onload() {
    var wfindex = new wfindexClass();
    wfindex.pageinit();
});
function wfindexClass() {
    this.pageinit = function () { 
        var CameraSupport = new CameraSupportClass("video", "canvas");
        setInterval(function () {
            CameraSupport.ProcessImage(
                function (apiUrl, accessKey) {
                    if ((apiUrl != "") && (accessKey != "")) {
                        localStorage.apiUrl = apiUrl;
                        localStorage.accessKey = accessKey;
                        window.location = "Dashboard.aspx";
                    }
                });
        }, 2000 /*2 seconds*/);
    }
}






