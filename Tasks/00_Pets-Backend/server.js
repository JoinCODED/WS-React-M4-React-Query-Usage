const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const samplePets = require("./petsData.js");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//DB
const db = new sqlite3.Database(":memory:");
db.serialize(() => {
  db.run(`
      CREATE TABLE pets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        type TEXT NOT NULL,
        adopted BOOLEAN NOT NULL DEFAULT false,
        image TEXT
      );
      CREATE TABLE rooms (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
      )
    `);
});

//Insert dummy data
const insert =
  "INSERT INTO pets (name, type, image, adopted) VALUES (?, ?, ?, ?)";
samplePets.forEach((pet) => {
  db.run(insert, [pet.name, pet.type, pet.image, pet.adopted]);
});

// Create a pet
app.post("/pets", (req, res) => {
  const { name, type, image, adopted } = req.body;
  const sql =
    "INSERT INTO pets (name, type, image, adopted) VALUES (?, ?, ?, ?)";
  const params = [name, type, image, adopted];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, name, type, image, adopted });
  });
});

// Get all pets
app.get("/pets", (req, res) => {
  const sql = "SELECT * FROM pets";
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Get a pet by id
app.get("/pets/:id", (req, res) => {
  const sql = "SELECT * FROM pets WHERE id = ?";
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(row);
  });
});

// Update a pet by id
app.put("/pets/:id", (req, res) => {
  const { name, type, image, adopted } = req.body;
  const sql =
    "UPDATE pets SET name = ?, type = ?, image = ?, adopted = ? WHERE id = ?";
  const params = [name, type, image, adopted, req.params.id];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ id: req.params.id, name, type, image, adopted });
  });
});

// Delete a pet
app.delete("/pets/:id", (req, res) => {
  const sql = "DELETE FROM pets WHERE id = ?";
  db.run(sql, [req.params.id], function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "Pet deleted successfully", changes: this.changes });
  });
});

// Create a room
app.post("/rooms", (req, res) => {
  const { name, type, image, adopted } = req.body;
  const sql =
    "INSERT INTO rooms (name, type, image, adopted) VALUES (?, ?, ?, ?)";
  const params = [name, type, image, adopted];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, name, type, image, adopted });
  });
});

// Get all rooms
app.get("/rooms", (req, res) => {
  const sql = "SELECT * FROM rooms";
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Get a room by id
app.get("/rooms/:id", (req, res) => {
  const sql = "SELECT * FROM rooms WHERE id = ?";
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(row);
  });
});

// Update a room by id
app.put("/rooms/:id", (req, res) => {
  const { name, type, image, adopted } = req.body;
  const sql =
    "UPDATE rooms SET name = ?, type = ?, image = ?, adopted = ? WHERE id = ?";
  const params = [name, type, image, adopted, req.params.id];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ id: req.params.id, name, type, image, adopted });
  });
});

// Delete a room
app.delete("/rooms/:id", (req, res) => {
  const sql = "DELETE FROM rooms WHERE id = ?";
  db.run(sql, [req.params.id], function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "room deleted successfully", changes: this.changes });
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
