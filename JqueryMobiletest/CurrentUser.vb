Imports Newtonsoft.Json

Public Class CurrentUser
    Public Sub New(p_Endpoint As String, p_UserName As String, p_Password As String)
        Dim m_AccessKey = $"{p_UserName}:{p_Password}"
        Me.AccessKey = m_AccessKey
        AuthenticateVersusV1(p_Endpoint)
    End Sub
    Public Sub New(p_Endpoint As String, p_AccessKey As String)
        Me.AccessKey = p_AccessKey
        AuthenticateVersusV2(p_Endpoint)
    End Sub
    Public Sub New()
        'Needed for Deserialization
    End Sub
    Public Property Culture As String = ""
    Public Property Id As Integer = -1
    Public Property LanguageId As Integer = -1
    Public Property Name As String = ""
    Public Property SignatureIdentifier As String = ""
    Public Property SignatureId As Integer = -1
    Public Property Username As String = ""
    Public ReadOnly Property AccessKey As String
    Private Sub AuthenticateVersusV1(p_Endpoint As String)
        Dim m_AccessKey = System.Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(Me.AccessKey))
        Dim m_Authorization As String = $"Authorization:Basic {m_AccessKey}"
        Dim m_CurrentUser As CurrentUser = Nothing
        With New API With {.Authorization = m_Authorization, .EndPoint = p_Endpoint}
            Dim m_JsonReturnValue As String = .GET("/api/v1/equipment/get/-1")
            If m_JsonReturnValue.Contains("(401) Unauthorized.") Then
                Throw New UnauthorizedAccessException(m_JsonReturnValue)
            End If
            m_JsonReturnValue = .GET("/api/v2/CurrentUser")
            m_CurrentUser = JsonConvert.DeserializeObject(m_JsonReturnValue, GetType(CurrentUser))
        End With
        With m_CurrentUser
            Me.Culture = .Culture
            Me.Id = .Id
            Me.LanguageId = .LanguageId
            Me.Name = .Name
            Me.SignatureIdentifier = .SignatureIdentifier
            Me.SignatureId = .SignatureId
            Me.Username = .Username
        End With
    End Sub

    Private Sub AuthenticateVersusV2(p_Endpoint As String)
        Dim m_AccessKey = System.Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(Me.AccessKey))
        Dim m_Authorization As String = $"Authorization:Basic {m_AccessKey}"
        Dim m_CurrentUser As CurrentUser = Nothing
        With New API With {.Authorization = m_Authorization, .EndPoint = p_Endpoint}
            Dim m_JsonReturnValue As String = .GET("/api/v2/CurrentUser")
            m_CurrentUser = JsonConvert.DeserializeObject(m_JsonReturnValue, GetType(CurrentUser))
        End With
        With m_CurrentUser
            Me.Culture = .Culture
            Me.Id = .Id
            Me.LanguageId = .LanguageId
            Me.Name = .Name
            Me.SignatureIdentifier = .SignatureIdentifier
            Me.SignatureId = .SignatureId
            Me.Username = .Username
        End With
    End Sub

End Class
