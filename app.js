const { app, BrowserWindow} = require('electron');
// app, which controls your application's event lifecycle.
// BrowserWindow, which creates and manages app windows.

console.log('Hola mundo desde electron');

app.whenReady().then(() => {

    // create a window
    const myWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // load a webpage
    myWindow.loadFile('index.html');

}).catch((error) => console.log(error));