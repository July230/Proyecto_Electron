const { app, BrowserWindow} = require('electron');
// app, controla el ciclo de vida de la aplicacion
// BrowserWindow, crea y administra ventanas de la app
const { setMainMenu } = require('./menu');
const path = require('path')

console.log('Hola mundo desde electron');

// crear una ventana
const createWindow = () => {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        // precargar un archivo antes de cargar la app
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    mainWindow.loadFile('index.html')

    // al crear la ventana 
    setMainMenu(mainWindow)
}

  // cargar una pagina
    // es posible crear mas de un proceso
app.whenReady().then(() => {
    createWindow()

    // macOS apps generally continue running even without any windows open. 
    // Because windows cannot be created before the ready event, 
    // you should only listen for activate events after your app is initialized.
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

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