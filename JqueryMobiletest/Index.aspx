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
    <script src="Index.js" type="text/javascript"></script>
    <link href="CSS/Global.css" rel="stylesheet" type="text/css" />
    <style>
        video {
            position:relative;
            height:33%;
        }
        canvas {
            display:none;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div data-role="page" id="wfindex">
            <div data-role="header" data-position="fixed">
                <h1>Welcome</h1>
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
