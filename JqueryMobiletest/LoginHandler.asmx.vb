Imports System.Web.Services
Imports System.Web.Script.Services

<WebService(Namespace:="http://tempuri.org/")>
<WebServiceBinding(ConformsTo:=WsiProfiles.BasicProfile1_1)>
<System.Web.Script.Services.ScriptService()>
<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Public Class LoginHandler
    Inherits System.Web.Services.WebService

    <WebMethod(True)>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Function Verify(
        p_Url As String,
        p_UserName As String,
        p_Password As String
    ) As String
        p_Url = Microsoft.JScript.GlobalObject.unescape(p_Url)
        p_UserName = Microsoft.JScript.GlobalObject.unescape(p_UserName)
        p_Password = Microsoft.JScript.GlobalObject.unescape(p_Password)

        Dim m_CurrentUser As CurrentUser
        m_CurrentUser = New CurrentUser(p_Url, p_UserName, p_Password)
        FormsAuthentication.SetAuthCookie(m_CurrentUser.Username, False)
        Session("UserName") = m_CurrentUser.Username.ToLower
        Session("SignatureIdentifier") = m_CurrentUser.SignatureIdentifier.ToLower
        Return $"{p_Url}///{m_CurrentUser.AccessKey}///{m_CurrentUser.Username.ToLower}"
    End Function

End Class