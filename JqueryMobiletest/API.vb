Imports System.IO
Public Class API
    Public Property EndPoint As String = ""
    Public Property Authorization As String = ""
    Public Function [GET](p_Resource As String) As String
        Dim m_ReturnValue As String = ""
        Dim m_HttpWebRequest As Net.HttpWebRequest
        Try
            m_HttpWebRequest = Net.HttpWebRequest.Create(EndPoint & p_Resource)
            m_HttpWebRequest.Headers.Add(Authorization.Split(":")(0), Authorization.Split(":")(1))

            m_HttpWebRequest.Method = "GET"
            m_HttpWebRequest.Timeout = 60000

            Dim m_HttpWebResponse As Net.HttpWebResponse = m_HttpWebRequest.GetResponse()
            If m_HttpWebResponse.StatusCode = Net.HttpStatusCode.OK Then
                Dim m_StreamReader As IO.StreamReader =
                New IO.StreamReader(m_HttpWebResponse.GetResponseStream())
                m_ReturnValue = m_StreamReader.ReadToEnd()
                Return m_ReturnValue
            End If
            m_HttpWebResponse.Close()
        Catch ex As Exception
            Return ex.Message
        End Try
        Return ""
    End Function
    Public Function [PUT](p_Resource As String, p_Data As String) As String
        Dim m_ReturnValue As String = ""
        Dim m_HttpWebRequest As Net.HttpWebRequest
        Try
            Dim m_Bytes As Byte() = Encoding.UTF8.GetBytes(p_Data)
            m_HttpWebRequest = Net.HttpWebRequest.Create(EndPoint & p_Resource)
            m_HttpWebRequest.Headers.Add(Authorization.Split(":")(0), Authorization.Split(":")(1))

            m_HttpWebRequest.Method = "PUT"
            m_HttpWebRequest.ContentType = "application/json"
            m_HttpWebRequest.ContentLength = m_Bytes.Length
            m_HttpWebRequest.Timeout = 60000

            Dim m_StreamWriter As Stream = m_HttpWebRequest.GetRequestStream
            m_StreamWriter.Write(m_Bytes, 0, m_Bytes.Length)
            m_StreamWriter.Close()

            Dim m_HttpWebResponse As Net.HttpWebResponse = m_HttpWebRequest.GetResponse()
            If m_HttpWebResponse.StatusCode = Net.HttpStatusCode.OK Then
                Dim m_StreamReader As IO.StreamReader =
                New IO.StreamReader(m_HttpWebResponse.GetResponseStream())
                m_ReturnValue = m_StreamReader.ReadToEnd()
                Return m_ReturnValue
            End If
            m_HttpWebResponse.Close()
        Catch ex As Exception
            Return ex.Message
        End Try
        Return ""
    End Function
    Public Function [POST](p_Resource As String, p_Data As String) As String
        Dim m_ReturnValue As String = ""
        Dim m_HttpWebRequest As Net.HttpWebRequest
        Try
            Dim m_Bytes As Byte() = Encoding.UTF8.GetBytes(p_Data)
            m_HttpWebRequest = Net.HttpWebRequest.Create(EndPoint & p_Resource)
            m_HttpWebRequest.Headers.Add(Authorization.Split(":")(0), Authorization.Split(":")(1))

            m_HttpWebRequest.Method = "POST"
            m_HttpWebRequest.ContentType = "application/json"
            m_HttpWebRequest.ContentLength = m_Bytes.Length
            m_HttpWebRequest.Timeout = 60000

            Dim m_StreamWriter As Stream = m_HttpWebRequest.GetRequestStream
            m_StreamWriter.Write(m_Bytes, 0, m_Bytes.Length)
            m_StreamWriter.Close()

            Dim m_HttpWebResponse As Net.HttpWebResponse = m_HttpWebRequest.GetResponse()
            If m_HttpWebResponse.StatusCode = Net.HttpStatusCode.OK Then
                Dim m_StreamReader As IO.StreamReader =
                New IO.StreamReader(m_HttpWebResponse.GetResponseStream())
                m_ReturnValue = m_StreamReader.ReadToEnd()
                Return m_ReturnValue
            End If
            m_HttpWebResponse.Close()
        Catch ex As Exception
            Return ex.Message
        End Try
        Return ""
    End Function
    Public Function [DELETE](p_Resource As String) As String
        Dim m_ReturnValue As String = ""
        Dim m_HttpWebRequest As Net.HttpWebRequest
        Try
            m_HttpWebRequest = Net.HttpWebRequest.Create(EndPoint & p_Resource)
            m_HttpWebRequest.Headers.Add(Authorization.Split(":")(0), Authorization.Split(":")(1))

            m_HttpWebRequest.Method = "DELETE"
            m_HttpWebRequest.Timeout = 60000

            Dim m_HttpWebResponse As Net.HttpWebResponse = m_HttpWebRequest.GetResponse()
            If m_HttpWebResponse.StatusCode = Net.HttpStatusCode.OK Then
                Dim m_StreamReader As IO.StreamReader =
                New IO.StreamReader(m_HttpWebResponse.GetResponseStream())
                m_ReturnValue = m_StreamReader.ReadToEnd()
                Return m_ReturnValue
            End If
            m_HttpWebResponse.Close()
        Catch ex As Exception
            Return ex.Message
        End Try
        Return ""
    End Function
End Class
