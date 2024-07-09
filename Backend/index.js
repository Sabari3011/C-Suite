
const express = require('express')
const mongoose = require('mongoose')
const connectionString = "mongodb+srv://expressmailprovider:sabari123@cluster0.rtc79oc.mongodb.net/C-Suite?retryWrites=true&w=majority&appName=Cluster0"

const app = express()

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

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/contact', contactRouter)
app.use('/api/courseList', courseListRouter)
app.use('/api/courseDetail', courseDetailsRouter)
app.use('/api/user', userRouter)
app.use('/api/payment', paymentRouter)
app.use('/api/calender', calenderRouter)










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


