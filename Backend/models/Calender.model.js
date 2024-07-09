const mongoose =  require('mongoose')


const CalenderSchema = mongoose.Schema({
    user_id :{
        type : String ,
        required : [false, 'User Id field required']
    },
    event_title : {
        type : String ,
        required : [true, 'Event Title field required']
    },
    event_date : {
        type : Date,
        required : [true, 'Event Date field required']

    }
})


const Calender = mongoose.model('calender',CalenderSchema);


module.exports = Calender   ;