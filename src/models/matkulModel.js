const mongoose = require("mongoose");

const matkulSchema = new mongoose.Schema({
  kode: String,
  nama: String,
  sks: Number,
  kelas: String,
});

const MataKuliah = mongoose.model("MataKuliah", matkulSchema);

module.exports = MataKuliah;
