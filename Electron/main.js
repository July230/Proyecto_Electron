const { app, BrowserWindow} = require('electron');
// app, controla el ciclo de vida de la aplicacion
// BrowserWindow, crea y administra ventanas de la app
const { setupRoutes } = require('../Backend/routes/routes');
const { setMainMenu } = require('../../Frontend/public/js/menu'); 

// cargar una pagina
// es posible crear mas de un proceso
// crear una ventana
const createMainWindow = () => {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        // precargar un archivo antes de cargar la app
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    mainWindow.loadFile('../Frontend/Views/index.html')
  
    // al crear la ventana 
    setMainMenu(mainWindow)
}

// cargar una pagina
// es posible crear mas de un proceso
app.whenReady().then(() => {
  createMainWindow()

    // macOS apps generally continue running even without any windows open. 
    // Because windows cannot be created before the ready event, 
    // you should only listen for activate events after your app is initialized.
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
    })
}).catch((error) => console.log(error));

/*
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
      app.quit();
  }
});
*/