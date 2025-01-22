const { Router } = require('express');
const router = Router();

const ContactController = require('./app/controllers/ContactController')
const CategoryController = require('./app/controllers/CategoryController')

router.get('/contacts', ContactController.index)
router.get('/contacts/:id', ContactController.show)
router.delete('/contacts/:id', ContactController.delete)
router.put('/contacts/:id', ContactController.update)
router.post('/contacts', ContactController.store)

router.get('/categories', CategoryController.index)
router.post('/categories', CategoryController.store)
router.delete('/categories/:id', CategoryController.delete)

module.exports = router;
