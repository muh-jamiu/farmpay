const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema(
  {
    firstname: { type: String, default: null },
    lastname: { type: String, default: null },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, default: null },
    isverified: { type: Boolean, default: false },

    farms: [
      {
        type: schema.Types.ObjectId,
        ref: "Farm",
      },
    ],

    image: { type: String, required: false },
    totalFarms: { type: Number, required: false, default: false },
    totalAmountInvested: { type: Number, required: false, default: 0 },
    revenueEarn: { type: Number, required: false, default: 0 },
    FavouriteFarms: [
      {
        type: schema.Types.ObjectId,
        ref: "Farm",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
