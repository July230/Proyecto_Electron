const { BrowserWindow } = require('electron')
const path = require('path')
const { setMainMenu } = require('../../Frontend/public/js/menu'); 

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
  
    mainWindow.loadFile('./views/index.html')
  
    // al crear la ventana 
    setMainMenu(mainWindow)
  }

module.exports = {
    createMainWindow
}