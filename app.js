// app.js

const notes = require('./note');

// Get the command from command-line arguments
const command = process.argv[2];

if (command === 'add') {
  // Usage: node app.js add "Note Title" "Note Body"
  const title = process.argv[3];
  const body = process.argv[4];
  notes.addNote(title, body);
} else if (command === 'remove') {
  // Usage: node app.js remove "Note Title"
  const title = process.argv[3];
  notes.removeNote(title);
} else if (command === 'list') {
  // Usage: node app.js list
  notes.listNotes();
} else {
  console.log('Command not recognized! Use "add", "remove", or "list".');
}
