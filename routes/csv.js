const express = require('express');
const router = express.Router();
const multer  = require('multer')

const { csvUpload } = require('../controllers/csv.js');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname);
    }
  })

const upload = multer({ storage: storage }).single('csvfile');

router.post('/csv-upload', upload, csvUpload);

module.exports = router;