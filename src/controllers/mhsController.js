const Mahasiswa = require("../models/mhsModel");

exports.getAllMahasiswa = async (req, res) => {
  try {
    const mahasiswas = await Mahasiswa.find();
    res.json(mahasiswas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMahasiswa = async (req, res) => {
  try {
    const mahasiswa = new Mahasiswa(req.body);
    const newMahasiswa = await mahasiswa.save();
    res.status(201).json(newMahasiswa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMahasiswaById = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if (mahasiswa) {
      res.json(mahasiswa);
    } else {
      res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if (mahasiswa) {
      mahasiswa.nama = req.body.nama || mahasiswa.nama;
      mahasiswa.nim = req.body.nim || mahasiswa.nim;
      mahasiswa.kelas = req.body.kelas || mahasiswa.kelas;
      mahasiswa.jenisKelamin = req.body.jenisKelamin || mahasiswa.jenisKelamin;
      const updatedMahasiswa = await mahasiswa.save();
      res.json(updatedMahasiswa);
    } else {
      res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findByIdAndDelete(req.params.id);
    if (mahasiswa) {
      res.json({ message: "Mahasiswa berhasil dihapus" });
    } else {
      res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
