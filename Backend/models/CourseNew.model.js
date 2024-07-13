const mongoose = require('mongoose')



const lessonSchema = new mongoose.Schema({
    courseId : {

        type: String,
        required : [true, 'title field required']
    },
    title: {
      type: String,
      required : [true, 'title field required']
    },
    
    description: {
      type: String,
      required : [false, 'description field required']
    },
    
    videos: {
      type: Array,
      required : [true, 'Video field required']
    },
    
}
  )



const CourseNewSchema = mongoose.Schema(

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
           type : [lessonSchema] ,
            required : [false, 'lessons field required']
        },
        
        header:{
            type : String ,
            required : [false, 'header field required']
        },

        videoUrl:{
            type : String ,
            required : [false, 'videoUrl field required']
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
        image :{
            type : String ,
            required : [false, 'image field required']
        },




    }
)


const CourseNew = mongoose.model("newcourse",CourseNewSchema)

module.exports = CourseNew