const express = require('express');
const router = express.Router();

const { csvUpload } = require('../controllers/csv.js');

router.get('/csv-upload', csvUpload);

module.exports = router;