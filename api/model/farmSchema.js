const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slotSchema = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  slots: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
});

const timelineSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  isDone: { type: Boolean, required: true },
});

const farmSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  otherImages: { type: [String], required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  capacity: { type: Number, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, required: true, default: false },
  investors: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  investorsSlots: [slotSchema],

  totalSlots: { type: Number, required: true },
  availableSlots: { type: Number, required: true },
  slotsTaken: { type: Number, required: false, default: 0 },
  timeLine: [timelineSchema],
});

const Farm = mongoose.model("Farm", farmSchema);
module.exports = Farm;
