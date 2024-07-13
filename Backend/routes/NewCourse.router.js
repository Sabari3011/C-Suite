const {Router} = require('express')
const courseNewRouter = Router()
const  CourseNew= require('../models/CourseNew.model')

//get courselist
courseNewRouter.get('/',async(req,res)=>{
    
    try{
        data = await CourseNew.find({})
        res.status(200).json({success : true ,courses : data , message : "Get request success"})

    }
    catch(e){
        res.status(500).json({success : false ,message : e.message})

    }

})

// //add a new course 
courseNewRouter.post('/',async(req,res)=>{

    try{
        data = await CourseNew.create(req.body)
        
        res.status(200).json({success : true ,courses : data , message : "Courese added successfully"})

    }
    catch(e){
        res.status(500).json({success : false ,message : e.message})

    }


})

//edit a existing course
courseNewRouter.put('/:id',async(req,res)=>{
    try{
        

        const course = await CourseNew.findByIdAndUpdate(req.params.id , req.body) ;
        if (!course){
            res.status(404).json({success : false ,message:"Courses Not Found"})
        }
        else{
            res.status(200).send({success : true ,course:course,message:"Successfully updated"})
        }
    }
    catch(e){
        res.status(500).json({success : false ,message : e.message})

    }
})

// delete a course
courseNewRouter.delete('/:id',async(req,res)=>{

        try{
            const course = await CourseNew.findByIdAndDelete(req.params.id);
            if(course){
                res.status(200).json({success : true ,course:course})
            }
            else{
                res.status(404).json({success : false ,message:"course Not Found"})
    
            }
    
        }
        catch(e){
            res.status(400).json({success : false ,error:e.message})
    
        }
})

module.exports = courseNewRouter;