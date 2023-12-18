
const mongoose = require('mongoose')

const emergencyConstant = mongoose.Schema(
{
        EmergencyContactName : {type: String, required : [true, "Please enter Emergency Contact's name"]}, 
        PatientID:{type: String,required : [true, "Please enter Patient's name"]},
        Surname:{type: String},
        OtherName:{type: String},
        Gender: {type: String},
        PhoneNumber: {type: String},
        ResidentialAddress : {type: String}, 
        Contact: {type: String},
        relationshipWithPatient: {type: String}
}
)
const Patients = new Schema({
        PatientID: String,
        Surname: String,
        OtherName: String,
        Gender: String,
        PhoneNumber: String,
        ResidentialAddress : String, 
        EmergencyContact : EmergencyContact, 
        Contact:String,
        relationshipWithPatient: String
    },)
module.EXPORTS = Patients;
const Product = mongoose.model('Product', productschema);