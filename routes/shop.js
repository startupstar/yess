const path = require('path');
const express = require('express');
const shopController = require('../controllers/shop');
const router = express.Router();


router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);




router.delete('/product/:id', shopController.deleteProduct)
router.put('/product/:id', shopController.updateStatus)


module.exports = router;
