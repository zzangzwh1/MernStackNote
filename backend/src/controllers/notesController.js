import Note from "../models/note.js";

export async function getAllNotes(req, res) {
  // res.status(200).send("TEST Success!");
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching getAllNotes:", error);
    res.status(500).json({ message: error.message });
  }
}

export function createNote(req, res) {
  res.status(201).json({ message: "POST Success!" });
}

export function updateNote(req, res) {
  res.status(200).json({ message: "PUT Success!" });
}
export function deleteNote(req, res) {
  res.status(200).json({ message: "DELETE Success!" });
}
