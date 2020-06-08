var API = new APIClass();
function APIClass() {
    //var _EndPoint = 'http://medusa-dev.softpro.se/Amsterdam';
    //var _Authorization = 'Authorization:Basic ZnJubzprYWxsZWt1bGE=';
    //var _EndPoint = 'http://support.softpro.se/support';
    //var _Authorization = 'Authorization:Basic OTk0NzI3NWItZWY1OC00NDNlLThlYjItMDUxMTg3M2U1ODAy';
    var _EndPoint = localStorage.apiUrl;
    var _AccessKey = localStorage.accessKey;
    //this.SetApiUrl = function (p_ApiUrl) {
    //    _EndPoint = p_ApiUrl;
    //};
    //this.SetAccessKey = function (p_AccessKey) {
    //    _Authorization = 'Authorization:Basic ' + p_AccessKey;
    //}

    this.GET = function (p_Resource, p_Callback) {
        var m_Data = '{'
        m_Data = m_Data + '"p_EndPoint":"' + _EndPoint + '"'
        m_Data = m_Data + ',"p_AccessKey":"' + _AccessKey + '"'
        m_Data = m_Data + ',"p_Resource":"' + escape(p_Resource) + '"'
        m_Data = m_Data + '}'
        $.ajax({
            type: "POST",
            url: "APIRelay.asmx/APIGET",
            data: m_Data,
            async: false,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (p_Result) {
                (p_Callback != 'undefined') ? p_Callback(p_Result.d) : function () { return false; }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
    }
    this.PUT = function (p_Resource, p_Json, p_Callback) {
        p_Json = p_Json.replace('"[object Object]"','{}')
        p_Json = '[' + p_Json + ']'
        var m_Data = '{'
        m_Data = m_Data + '"p_EndPoint":"' + _EndPoint + '"'
        m_Data = m_Data + ',"p_AccessKey":"' + _AccessKey + '"'
        m_Data = m_Data + ',"p_Resource":"' + escape(p_Resource) + '"'
        m_Data = m_Data + ',"p_Data":"' + escape(p_Json) + '"'
        m_Data = m_Data + '}'
        $.ajax({
            type: "POST",
            url: "APIRelay.asmx/APIPUT",
            data: m_Data,
            async: false,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (p_Result) {
                (p_Callback != 'undefined') ? p_Callback(p_Result.d) : function () { return false; }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
    }
    this.POST = function (p_Resource, p_Json, p_Callback) {
        p_Json = p_Json.replace('"[object Object]"', '{}')
        p_Json = '[' + p_Json + ']'
        var m_Data = '{'
        m_Data = m_Data + '"p_EndPoint":"' + _EndPoint + '"'
        m_Data = m_Data + ',"p_AccessKey":"' + _AccessKey + '"'
        m_Data = m_Data + ',"p_Resource":"' + escape(p_Resource) + '"'
        m_Data = m_Data + ',"p_Data":"' + escape(p_Json) + '"'
        m_Data = m_Data + '}'
        $.ajax({
            type: "POST",
            url: "APIRelay.asmx/APIPOST",
            data: m_Data,
            async: false,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (p_Result) {
                (p_Callback != 'undefined') ? p_Callback(p_Result.d) : function () { return false; }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
    }
    this.DELETE = function (p_Resource, p_Callback) {
        var m_Data = '{'
        m_Data = m_Data + '"p_EndPoint":"' + _EndPoint + '"'
        m_Data = m_Data + ',"p_AccessKey":"' + _AccessKey + '"'
        m_Data = m_Data + ',"p_Resource":"' + escape(p_Resource) + '"'
        m_Data = m_Data + '}'
        $.ajax({
            type: "POST",
            url: "APIRelay.asmx/APIDELETE",
            data: m_Data,
            async: false,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (p_Result) {
                (p_Callback != 'undefined') ? p_Callback(p_Result.d) : function () { return false; }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
    }
}