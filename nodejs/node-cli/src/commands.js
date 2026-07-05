import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { findNotes, getAllNotes, newNote } from './notes.js';
import { listNotes } from './utils.js';

yargs(hideBin(process.argv))
  .command('new <note>', 'Create a new note', (yargs) => {
    return yargs.positional("note",{
        type:'string',
        description:"The content of the note"
    })
  }, async (argv) => {
    // console.log("Your new note is")
    // console.log(argv.note)
    const tags = argv.tags ? argv.tags.split(",") : [];
    // create a new note
    const note  = await newNote(argv.note, tags);
    console.log("Note added!", note.id)

  })
  .option("tags",{
    alias:'t',
    type:'string',
    description:"tags to add to the note"
  })
  .command('all', 'Get all notes', () => {}, async (argv) => {
    const notes = await getAllNotes();
    listNotes(notes);

  })
  .command('find <filter>', 'Get matching notes', (yargs) => {
    return yargs.positional("filter",{
        type:'string',
        description:"The search text to filter the notes, which will be applied to note.content"
    })
  }, async (argv) => {
    const notes = await findNotes(argv.filter);
    listNotes(notes)


  })
//   commands => clean, remove by id
  .parse()