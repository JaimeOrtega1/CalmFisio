import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from "./Routes/auth.js"
import userRoute from "./Routes/user.js"
import doctorRoute from "./Routes/doctor.js"
import reviewRoute from "./Routes/review.js"


dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin:true
}

app.get("/", (req, res) => {
    res.send("API is working")
})


// Conexion con base de datos

mongoose.set('strictQuery',false)
const connectDB = async () => {
    try {
        console.log("MONGODB_URL:", process.env.MONGODB_URL); // Verificar la URL
        await mongoose.connect(process.env.MONGODB_URL); // Eliminar las opciones obsoletas
        console.log("MongoDB is connected...")
    } catch (err) {
        console.log("MongoDB connection failed ...", err)
    }
}


// middleware

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/doctores", doctorRoute)
app.use("/api/v1/reviews", reviewRoute)




// Database

app.listen(port, () => {
    connectDB()
    console.log(`Server running on port` + port )
})
    