const mongoose = require('mongoose');
var crypto = require('crypto');
var jwtService = require('jsonwebtoken');
var Any = mongoose.Schema.Types.Mixed;
const UsersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    profilePhoto: Any,
    email: String,
    userType: String,
    phone: String,
    address: String,
    accessLevelId: String,
    createdBy: String,
    practiceType: String,
    password : String,
    socialProvider: String,
    socialId: String,
    status : Any,
    forgotLink: String,
    forgotStatus: Any,
    profileVerificationStatus: Any,
    emailVerificationLink: String,
    emailVerificationStatus: Any,
    websiteUrl: Any,
    officeName: String,
    companyName: String,
    skills: Any,
    bio: Any,
    docs:Any,
    licensesDetails: Any,
    positionType: Any,
    milesTravelRadius: Any,
    availableDays: Any,
    resume: Any,
    cprCertification: Any,
    moreCertifications: Any,
    desiredHourlyRate: Any,
    experience: Any,
    paymentDetails: Any,
    expireDate: Any,
    accessLevelId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'accesslevel' }]    
}, {
    timestamps: true
});

UsersSchema.methods.generateAuthToken = function(){
    return jwtService.sign({ _id : this.id }, 'jwtPrimaryKey');
}

module.exports = mongoose.model('users', UsersSchema);