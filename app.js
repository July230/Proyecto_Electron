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

/*
On Windows and Linux, closing all windows will generally quit an application entirely. 
To implement this pattern in your Electron app: 
*/

/*
// there are plenty of events
app.on('window-all-closed', () => {
    // darwin -> MacOS
    // win32 -> Windows
    // linux -> Linux

    // exit app if the user is not on macOS (this is for windows and linux)
    // app will continue running on macOS
    if (process.platform != 'darwin') {
        app.quit() 
    }
})
*/

// macOS apps generally continue running even without any windows open. 
// Because windows cannot be created before the ready event, 
// you should only listen for activate events after your app is initialized.
app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
}).catch((error) => console.log(error));