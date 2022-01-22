const express = require('express');
const router = express.Router();

const { getCustomer, createCustomer, deleteCustomer, updateCustomer } = require('../controllers/customer.js');

router.get('/get_customer', getCustomer);
router.post('/create_customer', createCustomer);
router.put('/update_customer/:id', updateCustomer);
router.delete('/delete_customer/:id', deleteCustomer);

module.exports = router;
