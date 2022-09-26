const contacts = require('../routes/Contacts')

function initializeRoutes(app) {
    app.use('/', contacts)
}

module.exports = initializeRoutes;