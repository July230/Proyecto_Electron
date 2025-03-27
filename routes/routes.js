const { createMainWindow } = require('../controllers/mainController');
const { createAboutWindow } = require('../controllers/aboutController');

function setupRoutes() {
    createMainWindow();
}

module.exports = {
    setupRoutes
};
