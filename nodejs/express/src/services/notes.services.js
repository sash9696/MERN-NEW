import { notes } from "../data/notes.js";


export const getAllNotes = () => {
    return notes
}


export const getNoteById = (id) => {
    return notes.find((note) => note.id === id)
}

export const createNote = (title) => {
    const newNote = {
        id: notes.length + 1,
        title
    }
    notes.push(newNote)
    return newNote
}