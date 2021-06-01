const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
    const w = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false,
        title: "osu!Beatmap Merger",
        // titleBarStyle: "hidden",
        transparent: true,
        icon: "icon.ico"
    });
    w.loadFile('main.html')
    w.setMenu(null)
})
