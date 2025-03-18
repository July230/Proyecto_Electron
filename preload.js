const { constextBridge, ipcRenderer } = require('electron');
// le vamos a pasar informacion de app.ja a la aplicacion

// El nombre que tiene el objeto se lo damos nosotros
// los ejemplos mas comunes son electron, electronAPI, api
constextBridge.exposeInMainWorld('electronAPI', {
    // Ejecutamos el callback al actualizar el theme
    onUpdateTheme: (callback) => ipcRenderer.on('updateTheme', callback)
})