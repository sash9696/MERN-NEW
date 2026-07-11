import * as notesService from "../services/notes.services.js";
export const getAllNotes = (req, res) => {
  const notes = notesService.getAllNotes();
  res.json(notes);
};

export const getNoteById = (req, res) => {
  console.log(req.params);
  const id = Number(req.params.id);

  const note = notesService.getNoteById(id);

  if (!note) {
    return res.status(404).json({
      message: "Note not foind",
    });
  }
  res.json(note);
};

export const createNote = (req, res) => {
  console.log(req.body);

  const note = notesService.createNote(req.body.title);
  res.status(201).json(note);
};
