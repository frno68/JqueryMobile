function CameraSupportClass() {
    var m_Video;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const constraints = {
            video: true,
            audio: false
        };
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia(constraints)
            .then(
                stream => {
                    window.stream = stream;
                    m_Video = document.getElementById("video");
                    m_Video.srcObject = stream;

                });
    }
    $("#btnClick").on("click", function () {
        var m_Canvas = document.getElementById("canvas");
        m_Canvas.width = m_Video.videoWidth;
        m_Canvas.height = m_Video.videoHeight;
        var m_Context = m_Canvas.getContext("2d");
        event.preventDefault();
        var imageWidth = m_Video.videoWidth;
        var imageHeight = m_Video.videoHeight;
        m_Context.drawImage(m_Video, 0, 0, imageWidth, imageHeight);
    });
}

