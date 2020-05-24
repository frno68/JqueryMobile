<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Equipments.aspx.vb" Inherits="JqueryMobiletest.Equipments" %>
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
    <script src="HTMLFactoryClass.js" type="text/javascript"></script>
    <script src="Equipments.aspx.js" type="text/javascript"></script>
    <link href="CSS/Global.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <div data-role="page" id="wfequipments">
        <div data-role="header" data-position="fixed">
            <a data-rel="back" data-icon="back" data-iconpos="notext"></a>
            <h1>Equipment</h1>
            <button data-icon="search" data-iconpos="notext"></button>
        </div>
        <div data-role="content">
            <div id="divEquipments"></div>
            <video id="video" width="320" height="240" autoplay></video> 
            <button id="btnClick">Snap Photo</button> 
            <canvas id="canvas" width="640" height="480"></canvas> 
        </div>
        <div data-role="footer" data-position="fixed">
            <div data-role="navbar">
			    <ul>
				    <li><a href="#" data-icon="arrow-l"></a></li>
				    <li><a href="#" data-icon="arrow-r"></a></li>
			    </ul>		
		    </div>        
        </div>
    </div>    
    <div data-role="page" id="wfequipment">
        <div data-role="header" data-position="fixed">
            <a data-rel="back" data-icon="back" data-iconpos="notext"></a>
            <h1>Equipment</h1>
        </div>
        <div data-role="content">
            <div id="divEquipment"></div>
        </div>
        <div data-role="footer" data-position="fixed">
            <p>&nbsp;</p>
        </div>
    </div>    
    </form>
</body>
</html>
