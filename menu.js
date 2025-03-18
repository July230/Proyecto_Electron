const { app, Menu } = require('electron');


// documentacion de menu https://www.electronjs.org/docs/latest/api/menu#class-menu

const setMainMenu = () => {
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

            label: 'Themes',
            submenu: [
                {
                    label: 'Claro',
                    click: () => {
                        console.log("Seleccionar modo claro");
                    }
                },
                {
                    label: 'Oscuro',
                    click: () => {
                        console.log("Seleccionar modo oscuro");
                    }
                }
            ]
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}
module.exports = {
    setMainMenu
}
