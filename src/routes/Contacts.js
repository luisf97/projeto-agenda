const routes = require('express').Router()
const Contacts = require('../controllers/ContactsController')

routes.get('/contact', Contacts().get)

module.exports = routes;