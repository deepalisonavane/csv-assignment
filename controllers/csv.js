const Csv = require('../models/csv');

exports.csvUpload = (req, res) => {
    var csvString = req.file
    //  converter.fromString(csvString, function(err,result){
    //      if(err)return res.send("ERR")
    //      res.send(result);
    //  }); 
    console.log("file ::", res.json(csvString));
    res.json({
        message: 'Initial step Sucessfully'
    });
};