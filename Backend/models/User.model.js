const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(

    {
        name :{
            type : String ,
            required : [true, 'Name field required']
        },
        
        email:{
            type : String ,
            required : [true, 'Email field required']
        },
        phoneNumber:{
            type : String ,
            required : [false, 'phoneNumber field required']
        },
        password :{
            type : String ,
            required : [false, 'Password field required']
        },
        linkedIn :{
            type : String ,
            required : [false, 'linkedIn field required']
        },
        bio :{
            type : String ,
            required : [false, 'bio field required']
        },
        coursePurchased : {
            type : Array,
            required : [false, 'coursePurchased field required']

        },
        idCard : {
            type : String ,
            required : [false, 'idCard field required']
        },
        address : {
            type : String ,
            required : [false, 'address field required']
        },
        testScore : {
            type : Number ,
            required : [false, 'testScore field required']
        },
        companyname : {
            type : String ,
            required : [false, 'companyname field required']
        },
        
        position : {
            type : String ,
            required : [false, 'position field required']
        },
        relationship : {
            type : String ,
            required : [false, 'relationship field required']
        },
        gender : {
            type : String ,
            required : [false, 'gender field required']
        },
        profilePic : {
            type : String ,
            required : [false, 'profilePic field required']
        },
        
        
        
        
    },
    { timestamps: true } 
)


const User = mongoose.model("User",UserSchema)

module.exports = User