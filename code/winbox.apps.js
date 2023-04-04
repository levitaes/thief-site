function terminalApp () {
    new WinBox({
        title: "Terminal",
        x: "center",
        y: "center",
        width: "500px",
        height: "45%",
        url: "https://thief.lerchen.net/thief-os/",
    });
}

function internetApp () {
    new WinBox({
        title: "Internet",
        x: "center",
        y: "center",
        width: "55%",
        height: document.body.clientWidth/2.5,
        url: "apps/internet.app.html",
    });
}

function filesApp () {
    new WinBox({
        title: "Files",
        x: "center",
        y: "center",
        width: "450px",
        height: "50%",
        url: "apps/files.app.html",
    });
}

function musicApp () {
    new WinBox({
        title: "Music",
        x: "center",
        y: "center",
        width: "450px",
        height: "50%",
        url: "apps/music.app.html",
    });
}
