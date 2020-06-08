<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Index.aspx.vb" Inherits="JqueryMobiletest.Index" %>
<!DOCTYPE html>
<html>
<head runat="server">
    <title></title>
    <link href="Content/jquery.mobile-1.4.5.css" rel="stylesheet" type="text/css">
    <script src="Scripts/jquery-1.11.1.js" type="text/javascript"></script>
    <script src="Scripts/jquery.mobile-1.4.5.js" type="text/javascript"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <script src="ApiClass.js" type="text/javascript"></script>
    <script src="CameraSupportClass.js" type="text/javascript"></script>
    <script src="LoginHandlerClass.js" type="text/javascript"></script>
    <script src="Index.js" type="text/javascript"></script>
    <link href="CSS/Global.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
        <div data-role="page" id="wfindex">
            <div data-role="header" data-position="fixed">
                <h1>Medusa mobile web</h1>
            </div>
            <div data-role="content" style="height:100%;">
                <div data-role="controlgroup">
                    <div class="FloatingLabel">
                        <label for="txtUrl">Url</label>
                        <input id="txtUrl" value="http://medusa.softpro.se/SEHD" />
                    </div>
                    <div class="FloatingLabel">
                        <label for="txtUserName">User Name</label>
                        <input id="txtUserName" value="swe"/>
                    </div>
                    <div class="FloatingLabel">
                        <label for="txtPassword">Password</label>
                        <input id="txtPassword" value="swe"/>
                    </div>
                    <div id="popupBasic" data-role="popup">
                        <p>This is a completely basic popup, no options set.</p>
                    </div>
                </div>
                <div data-role="controlgroup" data-type="horizontal">
                    <a class="ui-btn ui-icon-camera" href="#wfscan">Scan key</a>
                    <a class="ui-btn" id="btnLogin" href="#">Login</a>
                </div>
            </div>
            <div data-role="footer" data-position="fixed">
                <p>&nbsp;</p>
            </div>
        </div>    
        <div data-role="page" id="wfscan">
            <div data-role="header" data-position="fixed">
                <h1>Scan key</h1>
            </div>
            <div data-role="content" style="height:100%;">
                <video id="video" autoplay></video>
            </div>
            <div data-role="footer" data-position="fixed">
                <p>&nbsp;</p>
            </div>
        </div>    
    </form>
</body>
</html>
