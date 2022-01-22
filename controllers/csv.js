const Csv = require('../models/csv');
const csv = require('csvtojson');
const fs = require('fs');

exports.csvUpload = (req, res) => {
    let filePath = __basedir + '/uploads/' + req.file.filename;

    csv()
        .fromFile(filePath)
        .then((jsonObj) => {
            Csv.insertMany(jsonObj).then(() => {
                res.send({ messege: "Data inserted successfully" })
            }).catch((error) => {
                res.send({ message: error.message })
            });
            fs.unlinkSync(filePath)
        })
};
