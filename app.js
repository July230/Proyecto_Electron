const { app, BrowserWindow} = require('electron');
// app, controla el ciclo de vida de la aplicacion
// BrowserWindow, crea y administra ventanas de la app

console.log('Hola mundo desde electron');

// crear una ventana
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
}

  // cargar una pagina
    // es posible crear mas de un proceso
app.whenReady().then(() => {
    createWindow()
}).catch((error) => console.log(error));

/*
On Windows and Linux, closing all windows will generally quit an application entirely. 
To implement this pattern in your Electron app: 
*/

/*
// Hay muchos eventos
app.on('window-all-closed', () => {
    // darwin -> MacOS
    // win32 -> Windows
    // linux -> Linux

    // salir de la app si el usuario no es de macOS
    // la app continuara corriendo en macOS
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