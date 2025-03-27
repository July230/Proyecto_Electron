const { app, BrowserWindow} = require('electron');
// app, controla el ciclo de vida de la aplicacion
// BrowserWindow, crea y administra ventanas de la app
const { setMainMenu } = require('./public/js/menu');
const path = require('path')

  // cargar una pagina
    // es posible crear mas de un proceso
app.whenReady().then(() => {
    setUpRoutes()

    // macOS apps generally continue running even without any windows open. 
    // Because windows cannot be created before the ready event, 
    // you should only listen for activate events after your app is initialized.
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
}).catch((error) => console.log(error));

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
      app.quit();
  }
});