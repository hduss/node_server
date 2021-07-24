const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/book')


router.get('/', bookCtrl.getAllBooks)
router.get('/:id', bookCtrl.getBook)
router.post('/add', bookCtrl.addBook)
router.put('/:id', bookCtrl.modifyBook)
router.delete('/delete/:id', bookCtrl.deleteBook)


module.exports = router;