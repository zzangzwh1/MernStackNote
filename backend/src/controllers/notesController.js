export function getAllNotes(req, res) {
  res.status(200).send("TEST Success!");
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
