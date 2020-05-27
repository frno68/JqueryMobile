Imports System.Web.Services
Imports System.Web.Script.Services
Imports ZXing
Imports System.IO
Imports System.Drawing
Imports System.Text.RegularExpressions
Imports Newtonsoft.Json

<WebService(Namespace:="http://tempuri.org/")>
<WebServiceBinding(ConformsTo:=WsiProfiles.BasicProfile1_1)>
<System.Web.Script.Services.ScriptService()>
<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Public Class ImageProcessor
    Inherits System.Web.Services.WebService

    <WebMethod(True)>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Function Decode(p_DataURL As String) As String
        Dim m_BarcodeReader As New ZXing.BarcodeReader
        Dim m_Result As Result = m_BarcodeReader.Decode(CreateImageFromDataURL(p_DataURL))
        If m_Result Is Nothing Then
            Return "///"
        End If
        Dim m_Base64Data As Byte() = Convert.FromBase64String(m_Result.ToString)
        Dim m_DecodedData As String = Encoding.UTF8.GetString(m_Base64Data)

        Dim m_ApiUrl As String = m_DecodedData.Split(New String() {"///"}, StringSplitOptions.None)(1)
        Dim m_AccessKey As String = m_DecodedData.Split(New String() {"///"}, StringSplitOptions.None)(0)
        'The API expects a base64 representation of the accesskey
        m_AccessKey = System.Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(m_AccessKey))

        AuthenticateUser(m_ApiUrl, m_AccessKey)
        Return $"{m_ApiUrl}///{m_AccessKey}///{Session("UserName")}"
    End Function
    Private Function CreateImageFromDataURL(p_DataURL As String) As Image
        p_DataURL = p_DataURL.Substring(p_DataURL.IndexOf(",") + 1)
        p_DataURL = p_DataURL.Trim("\0")
        Dim m_Bytes As Byte() = Convert.FromBase64String(p_DataURL)
        Dim m_MemoryStream As New MemoryStream(m_Bytes)
        Return Image.FromStream(m_MemoryStream)
    End Function
    Private Class CurrentUser
        Public Sub New()
        End Sub
        Public Property Culture As String = ""
        Public Property Id As Integer = -1
        Public Property LanguageId As Integer = -1
        Public Property Name As String = ""
        Public Property SignatureIdentifier As String = ""
        Public Property SignatureId As Integer = -1
        Public Property Username As String = ""
    End Class

    Private Sub AuthenticateUser(p_Endpoint As String, p_AccessKey As String)
        Dim m_Authorization As String = $"Authorization:Basic {p_AccessKey}"
        Dim m_CurrentUser As CurrentUser = Nothing
        With New API With {.Authorization = m_Authorization, .EndPoint = p_Endpoint}
            Dim m_JsonReturnValue As String = .GET("/api/v2/CurrentUser")
            m_CurrentUser = JsonConvert.DeserializeObject(m_JsonReturnValue, GetType(CurrentUser))
        End With
        FormsAuthentication.SetAuthCookie(m_CurrentUser.Username, False)
        Session("UserName") = m_CurrentUser.Username.ToLower
        Session("SignatureIdentifier") = m_CurrentUser.SignatureIdentifier.ToLower
    End Sub
End Class