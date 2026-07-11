

// Notes API

// GET /notes
// GET /notes/:id
// POST /notes
// PUT /notes/:id
// DELETE /notes/:id

import express from "express";
import notesRouter from './src/routes/notes.routes.js'
const app = express();

app.use(express.json())

const PORT = 3000;

// Register all note routes

app.use(notesRouter)






app.listen(PORT, () => {
    console.log('Server running on port 3000')
})



