import Note from "../models/note.model.js";

export const createNote = async (noteData) => {
    console.log('createNote')
  return await Note.create(noteData);
};

export const getAllNotes = async () => {

    const notes = await Note.find();
    console.log('notes',notes)
  return notes
};

export const getNoteById = async (id) => {
  return await Note.findById(id);
};
