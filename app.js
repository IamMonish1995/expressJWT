import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors';
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'
import academyRoutes from './routes/academyRoutes.js'

const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// CORS Policy
app.use(cors())

// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

// Load Routes
app.get("/",(req,res)=>{
  res.send("api running")
})
app.use("/api/user", userRoutes)
app.use("/api/academy", academyRoutes)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
