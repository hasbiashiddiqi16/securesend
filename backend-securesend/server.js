const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors"); // Tambahkan ini

const app = express();
const port = 5001;

// Gunakan CORS
app.use(cors()); // Tambahkan ini

// Konfigurasi penyimpanan multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Tentukan direktori penyimpanan
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // Nama file yang disimpan
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rute untuk upload file
app.post("/upload", upload.single("file"), (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "File uploaded successfully", file: req.file });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error uploading file", error: error.message });
  }
});

// Rute untuk tes GET, hanya untuk memastikan server berjalan
app.get("/upload", (req, res) => {
  res.send("Endpoint /upload tersedia.");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
