function CameraSupportClass(p_Video) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        var video = document.getElementById(p_Video);
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");

        const constraints = {
            video: true,
            audio: false
        };
        navigator.mediaDevices.getUserMedia(constraints).then(
            stream => {
                video.stream = stream;
                video.srcObject = stream;
            });

        this.ProcessImage = function (p_Callback) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            var m_DataURL = canvas.toDataURL("image/png");
            if (m_DataURL == '') {
                (p_Callback != 'undefined') ? p_Callback('', '') : function () { return false; }
            }
            var m_Data = '{'
            m_Data = m_Data + '"p_DataURL":"' + m_DataURL + '"'
            m_Data = m_Data + '}'
            $.ajax({
                type: "POST",
                url: "ImageProcessor.asmx/Decode",
                data: m_Data,
                async: false,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (p_Result) {
                    var apiUrl = p_Result.d.split('///')[1];
                    var accessKey = p_Result.d.split('///')[0];
                    (p_Callback != 'undefined') ? p_Callback(apiUrl, accessKey) : function () { return false; }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });
        }
    }
}

