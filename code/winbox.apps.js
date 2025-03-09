function terminalApp () {
    new WinBox({
        title: "Terminal",
        icon: "assets/desktop.png",
        x: "center",
        y: "center",
        width: "550px",
        height: "45%",
        minwidth: "400px",
        minheight: "300px",
        url: "https://thief.lerchen.net/thief-os/",
    });
}

function internetApp () {
    new WinBox({
        title: "Internet",
        icon: "assets/internet.png",
        x: "center",
        y: "center",
        width: "55%",
        minwidth: "500px",
        minheight: "300px",
        height: document.body.clientWidth/2.5,
        url: "apps/internet.app.html",
    });
}

function filesApp () {
    new WinBox({
        title: "Files",
        icon: "assets/folder.png",
        x: "center",
        y: "center",
        width: "500px",
        height: "500px",
        maxwidth: "570px",
        maxheight: "550px",
        minwidth: "320px",
        minheight: "330px",
        url: "apps/files.app.html",
    });
}

function trashApp () {
    new WinBox({
        title: "Trash",
        icon: "assets/trashbin.png",
        x: "center",
        y: "center",
        width: "550px",
        height: "55%",
        url: "apps/trash.app.html",
    });
}

function musicApp () {
    new WinBox({
        title: "Music",
        icon: "assets/music.png",
        x: "center",
        y: "center",
        width: "400px",
        height: "300px",
        minwidth: "400px",
        minheight: "300px",
        url: "apps/music.app.html",
    });
}

function aboutApp () {
    new WinBox({
        title: "About",
        icon: "assets/human.png",
        x: "100px",
        y: "150px",
        width: "400px",
        height: "300px",
        maxwidth: "400px",
        maxheight: "300px",
        minwidth: "400px",
        minheight: "300px",
        url: "apps/about.app.html",
        resizable: false,
    });
}