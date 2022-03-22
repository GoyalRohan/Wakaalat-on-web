const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LawyerSchema = new Schema({
    Name : String ,
    Image : String , 
    Experience : String , 
    Rating : Number,
    Description : String ,
});

module.exports = mongoose.model('Lawyer' , LawyerSchema);