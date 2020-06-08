$(document).ready(function window_onload() {
    var wfIndex = new wfIndexClass();
    wfIndex.pageinit();

    $(document).on("pagebeforeshow", "#wfscan", function (event) {
        var wfScan = new wfScanClass();
        wfScan.pageinit();
    });
});
function wfIndexClass() {
    this.pageinit = function () {
        $('#btnLogin').on('click', function () {
            var LoginHandler = new LoginHandlerClass($('#txtUrl').val(), $('#txtUserName').val(), $('#txtPassword').val())
            LoginHandler.Verify(
                function (apiUrl, accessKey, userName, signatureIdentifier) {
                    if ((apiUrl != "") && (accessKey != "")) {
                        //These are used in the APIClass
                        localStorage.apiUrl = apiUrl;
                        localStorage.accessKey = accessKey;
                        localStorage.userName = userName;
                        localStorage.signatureIdentifier = signatureIdentifier;
                        window.location = "Dashboard.aspx";
                    }
                });
        });
    }
}
function wfScanClass() {
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
                        localStorage.signatureIdentifier = signatureIdentifier;
                        window.location = "Dashboard.aspx";
                    }
                });
        }, 2000 /*2 seconds*/);
    }
}






