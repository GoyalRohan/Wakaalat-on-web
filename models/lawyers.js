const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LawyerSchema = new Schema({
    FirstName : String ,
    LasstName : String ,
    Email : String,
    Image : String , 
    Address : String ,
    State : String , 
    PinCode : Number ,
    PhoneNumber : Number , 
    Experience : String , 
    Rating : Number,
    Description : String ,
    Specialization : String
});

module.exports = mongoose.model('Lawyer' , LawyerSchema);