const { Schema, model } = require("mongoose");

const bicycleSchema = new Schema({
  bicycle_name: { type: String, required: true },
  bicycle_type: { type: String, required: true },
  bicycle_rent_price: { type: Number, required: true },
  rent_start_time: Number
});

module.exports = model("bicycleModel", bicycleSchema);
