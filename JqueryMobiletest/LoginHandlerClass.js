function LoginHandlerClass(p_Url, p_UserName, p_Password) {
    var _Url = escape(p_Url);
    var _UserName= escape(p_UserName);
    var _Password = escape(p_Password);

    this.Verify = function (p_Callback) {
        $('#responseText').val('');

        var m_Data = '{'
        m_Data = m_Data + '"p_Url":"' + _Url + '"'
        m_Data = m_Data + ',"p_UserName":"' + _UserName + '"'
        m_Data = m_Data + ',"p_Password":"' + _Password + '"'
        m_Data = m_Data + '}'
        $.ajax({
            type: "POST",
            url: "LoginHandler.asmx/Verify",
            data: m_Data,
            async: false,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (p_Result) {
                var apiUrl = p_Result.d.split('///')[0];
                var accessKey = p_Result.d.split('///')[1];
                var userName = p_Result.d.split('///')[2];
                var signatureIdentifier = p_Result.d.split('///')[3];
                (p_Callback != 'undefined') ? p_Callback(apiUrl, accessKey, userName, signatureIdentifier) : function () { return false; }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                //var responseText = XMLHttpRequest.responseText;
                //$('#responseText').val(responseText);
                $('body').pagecontainer('change', "#popupBasic");
            }
        });

    }
}