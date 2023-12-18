
const mongoose = require('mongoose')

const emergencyConstant = mongoose.Schema(
{
        EmergencyContactName : {type: String}, 
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
const Patients = mongoose.Schema(
    {
        PatientID:{type: String,required : [true, "Please enter Patient's name"]},
        Surname:{type: String},
        OtherName:{type: String},
        Gender: {type: String},
        PhoneNumber: {type: String},
        ResidentialAddress : {type: String}, 
        EmergencyContact : {EmergencyContact}, 
        Contact: {type: String},
        relationshipWithPatient: {type: String}
    },
    {
        timestamps: true 
    }
)

const Product = mongoose.model('Product', productschema);