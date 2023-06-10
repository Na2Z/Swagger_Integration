const MataKuliah = require("../models/matkulModel");

exports.getAllMataKuliah = async (req, res) => {
  try {
    const matakuliahs = await MataKuliah.find();
    res.json(matakuliahs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMataKuliah = async (req, res) => {
  try {
    const matakuliah = new MataKuliah(req.body);
    const newMataKuliah = await matakuliah.save();
    res.status(201).json(newMataKuliah);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMataKuliahById = async (req, res) => {
  try {
    const matakuliah = await MataKuliah.findById(req.params.id);
    if (matakuliah) {
      res.json(matakuliah);
    } else {
      res.status(404).json({ message: "Mata kuliah tidak ditemukan" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMataKuliah = async (req, res) => {
  try {
    const matakuliah = await MataKuliah.findById(req.params.id);
    if (matakuliah) {
      matakuliah.kode = req.body.kode || matakuliah.kode;
      matakuliah.nama = req.body.nama || matakuliah.nama;
      matakuliah.sks = req.body.sks || matakuliah.sks;
      matakuliah.kelas = req.body.kelas || matakuliah.kelas;
      const updatedMataKuliah = await matakuliah.save();
      res.json(updatedMataKuliah);
    } else {
      res.status(404).json({ message: "Mata kuliah tidak ditemukan" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMataKuliah = async (req, res) => {
  try {
    const matakuliah = await MataKuliah.findByIdAndDelete(req.params.id);
    if (matakuliah) {
      res.json({ message: "Mata kuliah berhasil dihapus" });
    } else {
      res.status(404).json({ message: "Mata kuliah tidak ditemukan" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
