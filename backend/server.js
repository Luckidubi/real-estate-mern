import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from "./routes/authRoute.js"
dotenv.config()
const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB is Connected")
}).catch((err)=>{
    console.log(err)
})


app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})
app.use('/api/auth', authRouter)