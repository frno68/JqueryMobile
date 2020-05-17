<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Servicerequests.aspx.vb" Inherits="JqueryMobiletest.Servicerequests" %>
<!DOCTYPE html>
<html>
<head runat="server">
    <title></title>
    <link href="Content/jquery.mobile-1.4.5.css" rel="stylesheet" type="text/css">
    <script src="Scripts/jquery-1.11.1.js" type="text/javascript"></script>
    <script src="Scripts/jquery.mobile-1.4.5.js" type="text/javascript"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <script src="ApiClass.js" type="text/javascript"></script>
    <script src="HTMLFactoryClass.js" type="text/javascript"></script>
    <script src="Servicerequests.aspx.js" type="text/javascript"></script>
    <link href="CSS/FloatingLabel.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <div data-role="page" id="wfservicerequests">
        <div data-role="header" data-position="fixed">
            <a data-rel="back" data-icon="back" data-iconpos="notext"></a>
            <h1>Servicerequest</h1>
        </div>
        <div data-role="content">
            <div id="divServicerequests"></div>
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
    <div data-role="page" id="wfservicerequest">
        <div data-role="header" data-position="fixed">
            <a data-rel="back" data-icon="back" data-iconpos="notext"></a>
            <h1>Service Request</h1>
            <a href="#" data-icon="check">Save</a>
       </div>
        <div data-role="content">
            <div id="divServicerequest"></div>
        </div>
        <div data-role="footer">
            <p>&nbsp;</p>
        </div>
    </div>    
    </form>
</body>
</html>
