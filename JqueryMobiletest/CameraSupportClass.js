function CameraSupportClass() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: "face" //Backside cam
            }
        }).then(function (p_Stream) {
            var m_Video = document.getElementById("video");
            m_Video.src = window.URL.createObjectURL(p_Stream);
            m_Video.play();
        });
    }
    $("#btnClick").on("click", function () {
        var m_Canvas = document.getElementById("canvas");
        var m_Context = m_Canvas.getContext("2d");
        event.preventDefault();
        m_Context.drawImage(m_Video, 0, 0, 640, 480);
    });
}

