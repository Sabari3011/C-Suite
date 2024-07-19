
const express = require('express')
const mongoose = require('mongoose')
const connectionString = "mongodb+srv://expressmailprovider:sabari123@cluster0.rtc79oc.mongodb.net/C-Suite?retryWrites=true&w=majority&appName=Cluster0"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// For cors
const cors = require('cors');
app.use(cors());

//routers used
const contactRouter = require('./routes/Contact.router')
const courseListRouter = require('./routes/CourseList.router')
const courseDetailsRouter = require('./routes/CourseDetails.router')
const userRouter = require('./routes/User.router')
const paymentRouter = require('./routes/Payment.router')
const calenderRouter = require('./routes/Calender.router')
const testRouter = require('./routes/Test.router');
const newcourse = require('./routes/NewCourse.router');
const UploadDriveRouter = require('./routes/UploadToDrive.router')
const UploadVimeoRouter = require('./routes/UploadToVimeo.router')
const CompleteVideo = require('./routes/CompletedVideo.router')

// app.use(bodyParser.json)

app.use('/api/contact', contactRouter)
app.use('/api/courseList', courseListRouter)
app.use('/api/courseDetail', courseDetailsRouter)
app.use('/api/user', userRouter)
app.use('/api/payment', paymentRouter)
app.use('/api/calender', calenderRouter)
app.use('/api/tests', testRouter);
app.use('/api/newcourse', newcourse);
app.use('/api/uploadtodrive', UploadDriveRouter);
app.use('/api/uploadtovimeo', UploadVimeoRouter);
app.use('/api/completevideo', CompleteVideo);










// Db connection
mongoose.connect(connectionString, {})
    .then(
        () => {
            app.listen('5000', () => { console.log("Db connected - Listening port 5000") })
        }
    )
    .catch((e) => {
        console.log(e)
    }
    )


