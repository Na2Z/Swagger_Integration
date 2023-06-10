const mongoose = require("mongoose");

const mhsSchema = new mongoose.Schema({
  nama: String,
  nim: String,
  kelas: String,
  jenisKelamin: String,
});

const Mahasiswa = mongoose.model("Mahasiswa", mhsSchema);

module.exports = Mahasiswa;
