<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Dashboard.aspx.vb" Inherits="JqueryMobiletest.Dashboard" %>
<!DOCTYPE html>
<html>
<head runat="server">
    <title></title>
    <link href="Content/jquery.mobile-1.4.5.css" rel="stylesheet" type="text/css">
    <script src="Scripts/jquery-1.11.1.js" type="text/javascript"></script>
    <script src="Scripts/jquery.mobile-1.4.5.js" type="text/javascript"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <script src="ApiClass.js" type="text/javascript"></script>
    <script src="Dashboard.aspx.js" type="text/javascript"></script>
    <link href="CSS/Global.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <div data-role="page" id="wfdashboard">
        <div data-role="header" data-position="fixed">
            <a href="#menu1" data-icon="bars" data-iconpos="notext"></a>
            <h1>Dashboard</h1>
        </div>
        <div data-role="content">
            <h2>Servicerequest</h2>
            <div id="servicerequestssummary">
            </div>
            <h2>Workorder</h2>
            <div id="workorderssummary">
            </div>
            <h2>Equipment</h2>
            <div id="equipmentssummary">
            </div>
            <h2>Preventive maintenance</h2>
            <div id="preventivemaintenancessummary">
            </div>
        </div>
        <div data-role="footer" data-position="fixed">
            <p>&nbsp;</p>
        </div>
        <div id="menu1" data-role="panel" data-display="push" data-position-fixed="true">
            <ul data-role="listview">
                <li><a href="servicerequests.aspx">Servicerequest</a></li>
                <li><a href="workorders.aspx">Workorders</a></li>
                <li><a href="equipments.aspx">Equipment</a></li>
                <li><a href="preventivemaintenances.aspx">Preventive maintenance</a></li>
            </ul>
        </div>
    </div>    
    </form>
</body>
</html>
