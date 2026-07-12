// mongo db wills tore the data
// mongoose  talsk to the mongo db . its ODM => Object Data Modelling
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    // content: {
    //   type: String,
    //   required: true,
    // },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model('Note', noteSchema);

export default Note;
