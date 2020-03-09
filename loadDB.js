// Import sqlite3 module
const sqlite = require('sqlite3').verbose();

// Create database object
let db = new sqlite.Database('./PokemonDB.sqlite', sqlite.OPEN_READONLY, (err) => {
  if (err) {
    return console.error(err.message);
  }
  //console.log('Connected to DB');
});

db.serialize(() => {
  // Extract all rows
  let sql = `
    SELECT *
    FROM dex
  `;

  db.all(sql, [], (err, rows) => {
    if(err) {
      throw err;
    }
    console.log(rows);
  });
});


// Close database object
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  //console.log('Closed the DB')
});
