

// Notes API

// GET /notes
// GET /notes/:id
// POST /notes
// PUT /notes/:id
// DELETE /notes/:id
import dotenv from 'dotenv';
import express from "express";
import notesRouter from './src/routes/notes.routes.js'
import { errorHandler } from "./src/middleware/error.middleware.js";
import { connectDB } from "./src/config/db.js";
import authRoutes from './src/routes/auth.routes.js'
dotenv.config();
const app = express();

app.use(express.json())


// app.use((req, res, next) => {

//     req.user = {
//         id:1,
//         name:'John',
//         role:'Admin'
//     }
//     next();
// })
app.use((req, res, next) => {

    console.log('-----------------');
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Time', new Date().toLocaleTimeString());
    console.log('-----------------');
    next();
})


// Register all note routes
app.use('/auth', authRoutes)
app.use(notesRouter)

// always last
app.use(errorHandler)

console.log('port', process.env.PORT)
const PORT = process.env.PORT || 3000;


const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
    
}
startServer()



