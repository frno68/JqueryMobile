$(document).ready(function window_onload() {
    var wfindex = new wfindexClass();
    wfindex.pageinit();
});
function wfindexClass() {
    this.pageinit = function () { 
        var CameraSupport = new CameraSupportClass("video");
        setInterval(function () {
            CameraSupport.ProcessImage(
                function (apiUrl, accessKey, userName, signatureIdentifier) {
                    if ((apiUrl != "") && (accessKey != "")) {
                        //These are used in the APIClass
                        localStorage.apiUrl = apiUrl;
                        localStorage.accessKey = accessKey;
                        localStorage.userName = userName;
                        localStorage.userName = userName;
                        localStorage.signatureIdentifier = signatureIdentifier;
                        window.location = "Dashboard.aspx";
                    }
                });
        }, 2000 /*2 seconds*/);
    }
}






