const express = require("express");
const path = require("path");
const fs = require('fs');
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(express.json());

const pool = new Pool(
  process.env.NODE_ENV === "production"
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
      }
    : {
        host: "127.0.0.1",
        port: 5432,
        user: "postgres",
        password: "0000", //placeholder
        database: "kafedra",
      }
);

const filesPath = path.join(__dirname, "../public");
app.use("/files", express.static(filesPath));

app.get("/api/gallery", (req, res) => {
  const imagesPath = path.join(filesPath, "/images");

  fs.readdir(imagesPath, (err, files) => {
    if (err) {
      console.error("Failed to read the images folder :", err);
      return res.status(500).json({ error: "Failed to retrieve the list of images" });
    }

    const imageFiles = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => {
        const fullPath = path.join(imagesPath, file);
        const stats = fs.statSync(fullPath);
        return { name: `/files/images/${file}`, mtime: stats.mtime };
      })
      .sort((a, b) => b.mtime - a.mtime)
      .map(file => file.name);

    res.json(imageFiles);
  });
});

app.get("/api/news/len", async (req, res) => {
  try {
    const result = await pool.query("SELECT COUNT(*) FROM news");
    res.json(result.rows[0].count);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.get("/api/news", async (req, res) => {
  const after = parseInt(req.query.after) || 0;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const result = await pool.query(
      "SELECT news.id, news.title, news.date FROM news ORDER BY date DESC LIMIT $1 OFFSET $2",
      [limit, after]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.get("/api/news/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const result = await pool.query(
      "SELECT * FROM news WHERE id = $1",
      [id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

const clientDist = path.join(__dirname, '../client/dist');
app.use(express.static(clientDist))
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер успішно завантажено! Порт: ${PORT}`));
