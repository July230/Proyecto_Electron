const { BrowserWindow } = require('electron');
const path = require('path');

let aboutWindow;

function createAboutWindow() {
    aboutWindow = new BrowserWindow({
        title: 'Acerca de',
        width: 300,
        height: 600
    });

    aboutWindow.loadFile('./views/about.html');
}

module.exports = { createAboutWindow };
