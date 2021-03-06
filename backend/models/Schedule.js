const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ScheduleSchema = new Schema({
  plateNumber: String,
  departureTime: String,
  departureLocation: String,
  arrivalTime: String,
  arrivalLocation: String
});

module.exports = mongoose.model("Schedule", ScheduleSchema);
