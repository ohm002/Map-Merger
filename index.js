const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
    const w = new BrowserWindow({
        width: 800,
        height: 500,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false,
        title: "Map Merger",
        // titleBarStyle: "hidden",
        transparent: true,
        icon: "icon.ico"
    });
    w.loadFile('main.html')
    // w.setMenu(null)
})
