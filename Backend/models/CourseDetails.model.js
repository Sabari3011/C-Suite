const mongoose = require('mongoose')

const CourseDetailsSchema = mongoose.Schema(

    {
        
        title :{
            type : String ,
            required : [true, 'title field required']
        },


        overviewPoints :{
            type : Array ,
            required : [false, 'overviewPoints field required']
        },
        
        description:{
            type : String ,
            required : [true, 'description field required']
        },
        
        lessons :{
            type : Array ,
            required : [false, 'lessons field required']
        },
        
        header:{
            type : String ,
            required : [false, 'header field required']
        },
        videoUrl:{
            type : String ,
            required : [true, 'videoUrl field required']
        },
        
        whoIsThisFor :{
            type : Array ,
            required : [false, 'whoIsThisFor field required']
        },
        
        whatYouGet :{
            type : Array ,
            required : [false, 'whatYouGet field required']
        },

        syllabus:{
            type : String ,
            required : [false, 'syllabus field required']
        },

        price:{
            type : Number ,
            required : [true, 'price field required']
        },

        courseDetails :{
            type : Array ,
            required : [false, 'courseDetails field required']
        },





    }
)


const CourseDetail = mongoose.model("CourseDetail",CourseDetailsSchema)

module.exports = CourseDetail