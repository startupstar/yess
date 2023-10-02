const path = require('path');

const express = require('express');
const multer = require('multer')
const adminController = require('../controllers/admin');

const router = express.Router();


const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        const originalName = file.originalname;
        const extension = path.extname(originalName);
        const fileName = originalName.replace(extension, '').toLowerCase().split(' ').join('_') + '_' + Date.now() + extension;
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage });





// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);


// /admin/add-product => POST
router.post('/add-product',upload.single('pdf'), adminController.postAddProduct);



router.get('/pending-orders', adminController.pendingOrders);
router.get('/completed-orders', adminController.completedOrders);
router.get('/approved-orders', adminController.approvedOrders);
// router.post('/update-status/:id', adminController.updateStatus);







module.exports = router;
