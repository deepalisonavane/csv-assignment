const express = require('express');
const router = express.Router();
const multer  = require('multer')

const { csvUpload } = require('../controllers/csv.js');

global.__basedir = __dirname;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + '/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
  })

const upload = multer({ storage: storage }).single('csvfile');

router.post('/csv_upload', upload, csvUpload);

module.exports = router;
