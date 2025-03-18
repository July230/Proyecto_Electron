const { app, BrowserWindow} = require('electron');
// app, which controls your application's event lifecycle.
// BrowserWindow, which creates and manages app windows.

console.log('Hola mundo desde electron');

// create a window
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
}

  // load a webpage
    // it's possible to create more than one process
app.whenReady().then(() => {
    createWindow()
}).catch((error) => console.log(error));