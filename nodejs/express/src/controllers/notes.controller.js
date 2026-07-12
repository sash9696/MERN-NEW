import * as notesService from "../services/notes.services.js";
export const getAllNotes = async (req, res) => {
  const notes = await notesService.getAllNotes();
  res.json(notes);
};

export const getNoteById = async (req, res) => {
  
  console.log(req.params);
  const id = Number(req.params.id);

  const note = await notesService.getNoteById(id);

  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }
  res.json(note);
};

export const createNote = async (req, res) => {
    console.log('controller');

  console.log(req.body);

  const note = await notesService.createNote(req.body.title);
  res.status(201).json(note);
};
