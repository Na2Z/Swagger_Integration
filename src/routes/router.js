const express = require("express");
const router = express.Router();
const mhsController = require("../controllers/mhsController");
const matkulController = require("../controllers/matkulController");

// Mahasiswa routes
router.get("/mahasiswa", mhsController.getAllMahasiswa);
router.post("/mahasiswa", mhsController.createMahasiswa);
router.get("/mahasiswa/:id", mhsController.getMahasiswaById);
router.put("/mahasiswa/:id", mhsController.updateMahasiswa);
router.delete("/mahasiswa/:id", mhsController.deleteMahasiswa);

// Mata Kuliah routes
router.get("/matakuliah", matkulController.getAllMataKuliah);
router.post("/matakuliah", matkulController.createMataKuliah);
router.get("/matakuliah/:id", matkulController.getMataKuliahById);
router.put("/matakuliah/:id", matkulController.updateMataKuliah);
router.delete("/matakuliah/:id", matkulController.deleteMataKuliah);

module.exports = router;
