const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
    const myWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false,
        title: "Hi Galentori",
        // titleBarStyle: "hidden",
        transparent: true,
        icon: "icon.ico"
    });
    myWindow.loadFile('main.html')
})
