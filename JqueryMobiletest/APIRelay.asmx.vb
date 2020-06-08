Imports System.Web.Services
Imports System.Web.Script.Services
<WebService(Namespace:="http://tempuri.org/")>
<WebServiceBinding(ConformsTo:=WsiProfiles.BasicProfile1_1)>
<System.Web.Script.Services.ScriptService()>
<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Public Class APIRelay
    Inherits System.Web.Services.WebService
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Function APIGET(p_EndPoint As String, p_AccessKey As String, p_Resource As String) As String
        p_Resource = Microsoft.JScript.GlobalObject.unescape(p_Resource)
        With New API With {.Authorization = GetAuthorization(p_AccessKey), .EndPoint = p_EndPoint}
            Return .GET(p_Resource)
        End With
    End Function
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Function APIPUT(p_EndPoint As String, p_AccessKey As String, p_Resource As String, p_Data As String) As String
        p_Resource = Microsoft.JScript.GlobalObject.unescape(p_Resource)
        p_Data = Microsoft.JScript.GlobalObject.unescape(p_Data)
        With New API With {.Authorization = GetAuthorization(p_AccessKey), .EndPoint = p_EndPoint}
            Return .PUT(p_Resource, p_Data)
        End With
    End Function
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Function APIPOST(p_EndPoint As String, p_AccessKey As String, p_Resource As String, p_Data As String) As String
        p_Resource = Microsoft.JScript.GlobalObject.unescape(p_Resource)
        p_Data = Microsoft.JScript.GlobalObject.unescape(p_Data)
        With New API With {.Authorization = GetAuthorization(p_AccessKey), .EndPoint = p_EndPoint}
            Return .POST(p_Resource, p_Data)
        End With
    End Function
    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Function APIDELETE(p_EndPoint As String, p_AccessKey As String, p_Resource As String) As String
        p_Resource = Microsoft.JScript.GlobalObject.unescape(p_Resource)
        With New API With {.Authorization = GetAuthorization(p_AccessKey), .EndPoint = p_EndPoint}
            Return .DELETE(p_Resource)
        End With
    End Function
    Private Function GetAuthorization(p_AccessKey As String) As String
        Return $"Authorization:Basic {System.Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(p_AccessKey))}"
    End Function


End Class

