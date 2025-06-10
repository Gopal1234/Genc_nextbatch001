

const fs = require('fs');
const notesFile = 'notes.json';


const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(notesFile);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// Save notes to the file
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes, null, 2);
  fs.writeFileSync(notesFile, dataJSON);
};

// Function to add a note
const addNote = (title, body) => {
  const notes = loadNotes();
  // Check for duplicate note titles
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log('Note added!');
  } else {
    console.log('Note title taken!');
  }
};

// Function to remove a note
const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  if (notes.length > filteredNotes.length) {
    saveNotes(filteredNotes);
    console.log('Note removed!');
  } else {
    console.log('No note found with that title');
  }
};

// Function to list all notes
const listNotes = () => {
  const notes = loadNotes();
  console.log('Your notes:');
  notes.forEach((note) => {
    console.log(`- ${note.title}`);
  });
};

// Export the functions so they can be used in another file
module.exports = {
  addNote,
  removeNote,
  listNotes,
};
