const { contacts } = require('../models/index')

function ContactsController() {
    return {

        async get(req, res) {
            res.json(contacts)
        }
    }
}

module.exports = ContactsController;