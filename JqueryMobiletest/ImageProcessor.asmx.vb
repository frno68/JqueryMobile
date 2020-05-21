Imports System.Web.Services
Imports System.Web.Script.Services
Imports ZXing
Imports System.IO
Imports System.Drawing
Imports System.Text.RegularExpressions

<WebService(Namespace:="http://tempuri.org/")>
<WebServiceBinding(ConformsTo:=WsiProfiles.BasicProfile1_1)>
<System.Web.Script.Services.ScriptService()>
<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Public Class ImageProcessor
    Inherits System.Web.Services.WebService

    <WebMethod()>
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
        Return $"{m_AccessKey}///{m_ApiUrl}"
    End Function

    Private Function CreateImageFromDataURL(p_DataURL As String) As Image
        p_DataURL = p_DataURL.Substring(p_DataURL.IndexOf(",") + 1)
        p_DataURL = p_DataURL.Trim("\0")
        Dim m_Bytes As Byte() = Convert.FromBase64String(p_DataURL)
        Dim m_MemoryStream As New MemoryStream(m_Bytes)
        Return Image.FromStream(m_MemoryStream)
    End Function

End Class