// src/models/User.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // Use in-memory SQLite for demo

// Create users table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE
    )
  `);
});

// Find user by email
const findByEmail = (email, callback) => {
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};

// Save new user
const save = (email, callback) => {
  db.run('INSERT INTO users (email) VALUES (?)', [email], function (err) {
    if (err) {
      return callback(err);
    }
    callback(null, { id: this.lastID, email });
  });
};

module.exports = { findByEmail, save };
