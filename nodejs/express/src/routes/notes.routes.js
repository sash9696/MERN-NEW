import express from "express";
import { getAllNotes,getNoteById,createNote } from "../controllers/notes.controller.js";
import { isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

// SRP
// Single responsibility principle

router.get('/notes', getAllNotes)


// get one note

router.get('/notes/:id',getNoteById)

// create  a new note

router.post('/notes', createNote)

export default router;


