
import express from 'express';
import cors from "cors"
import cookieParser from "cookie-parser"
//Routes import
import userRouter from './routes/user.routes.js'

const app = express();



app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
// body parsers
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
// static files
app.use(express.static("public"))
app.use(cookieParser())




//routes declaration
app.use("/api/v1/users", userRouter)

export { app };