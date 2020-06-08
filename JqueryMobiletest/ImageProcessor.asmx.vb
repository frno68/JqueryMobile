Imports System.Web.Services
Imports System.Web.Script.Services
Imports ZXing
Imports System.IO
Imports System.Drawing
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
        If p_DataURL.Length = 0 Then Return "///"
        If p_DataURL.IndexOf(",") = -1 Then Return "///"
        p_DataURL = p_DataURL.Substring(p_DataURL.IndexOf(",") + 1)
        p_DataURL = p_DataURL.Trim("\0")
        If p_DataURL.Length = 0 Then Return "///"

        Dim m_Image As Image = CreateImageFromDataURL(p_DataURL)

        Dim m_BarcodeReader As New ZXing.BarcodeReader
        Dim m_Result As Result = m_BarcodeReader.Decode(m_Image)
        If m_Result Is Nothing Then
            Return "///"
        End If
        Dim m_Base64Data As Byte() = Convert.FromBase64String(m_Result.ToString)
        Dim m_DecodedData As String = Encoding.UTF8.GetString(m_Base64Data)

        Dim m_ApiUrl As String = m_DecodedData.Split(New String() {"///"}, StringSplitOptions.None)(1)
        Dim m_AccessKey As String = m_DecodedData.Split(New String() {"///"}, StringSplitOptions.None)(0)

        Dim m_CurrentUser As New CurrentUser(m_ApiUrl, m_AccessKey)
        FormsAuthentication.SetAuthCookie(m_CurrentUser.Username, False)
        Session("UserName") = m_CurrentUser.Username.ToLower
        Session("SignatureIdentifier") = m_CurrentUser.SignatureIdentifier.ToLower
        Return $"{m_ApiUrl}///{m_CurrentUser.AccessKey}///{m_CurrentUser.Username.ToLower}"

    End Function
    Private Function CreateImageFromDataURL(p_DataURL As String) As Image
        Dim m_Bytes As Byte() = Convert.FromBase64String(p_DataURL)
        Dim m_MemoryStream As New MemoryStream(m_Bytes)
        Return Image.FromStream(m_MemoryStream)
    End Function
End Class