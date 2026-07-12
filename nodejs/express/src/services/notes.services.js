import { notes } from "../data/notes.js";

import * as noteRepository from '../repositories/note.repository.js'

export const getAllNotes = async () => {
    return await noteRepository.getAllNotes();
}


export const getNoteById = async (id) => {
    return await noteRepository.getNoteById(id);
}

export const createNote = async (title) => {
    return await noteRepository.createNote({title})
}