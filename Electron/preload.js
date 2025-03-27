const { contextBridge, ipcRenderer } = require('electron');
// le vamos a pasar informacion de app.js a la aplicacion
// conectamos el proceso principal con el renderizado.
// app.js es el proceso de node, renderer es el proceso del navegador

// El nombre que tiene el objeto se lo damos nosotros
// los ejemplos mas comunes son electron, electronAPI, api
contextBridge.exposeInMainWorld('electronAPI', {
    // Ejecutamos el callback al actualizar el theme
    // El proceso principal recibe el cambio y envia el evento updateTheme
    onUpdateTheme: (callback) => ipcRenderer.on('updateTheme', callback)
})