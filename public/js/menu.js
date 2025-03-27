const { app, Menu, dialog } = require('electron');


// documentacion de menu https://www.electronjs.org/docs/latest/api/menu#class-menu

const setMainMenu = (mainWindow) => {
    // Un arreglo que tiene lo que queremos que se muestre
    // En el caso de mac, es el menu superior, a nivel de la manzanita
    const template = [
        {
            label: 'MyApp', // En modo desarrollo, sale electron
            // Hay templates para distintas plataformas, esto es para macOS
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                {
                    label: 'Abrir archivo',
                    click: () => {
                        // con dialog desplegamos el buscador de archivos nativo del sistema para abrir y guardar archivos, alertas, etc.
                        dialog.showOpenDialog(mainWindow, {
                            // especificamos los tipos de extensiones que son mostradas o seleccionables
                            filters: [
                                {
                                    name: 'Markdown',
                                    extensions: ['md'],
                                }
                            ],
                            title: 'Selecciona tu archivo markdown',
                            defaultPath: '~/Desktop', // va a ir al escritorio
                            // openFile permite seleccionar archivos
                            // openDirectory permite seleccionar carpetas
                            properties: ['openFile', 'openDirectory']
                        }).then(result => { // devuelve una promersa
                            console.log(result.canceled)
                            console.log(result.filePaths)
                          }).catch(err => {
                            console.log(err)
                          })
                    }

                }
            ]
        },
        {

            label: 'Themes',
            submenu: [
                {
                    label: 'Claro',
                    click: () => {
                        console.log("Seleccionar modo claro");
                        // a la ventana principal le enviamos el evento llamado updateTheme y el valor light
                        mainWindow.webContents.send('updateTheme', 'light')
                    }
                },
                {
                    label: 'Oscuro',
                    click: () => {
                        console.log("Seleccionar modo oscuro");
                        mainWindow.webContents.send('updateTheme', 'dark')
                    }
                }
            ]
        },
        // { role: 'viewMenu' }
        {
            label: 'View',
            submenu: [
            { role: 'reload' },
            { role: 'forceReload' },
            { role: 'toggleDevTools' },
            { type: 'separator' },
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            { role: 'zoomOut' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
            ]
        },
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}
module.exports = {
    setMainMenu
}
