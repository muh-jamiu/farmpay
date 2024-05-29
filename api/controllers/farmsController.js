const expressAsyncHandler = require("express-async-handler");
const Farm = require("../model/farmSchema");
const farms = require("../model/farms");
const userSchema = require("../model/userSchema");

const createFarms = async (farmsArray) => {
  try {
    // Insert the farms into the database

    // farmsArray.map(async (farm) => {
    //   await Farm.create(farm);
    // });
    // await Farm.deleteMany({});
    const result = await Farm.insertMany(farmsArray);
    console.log("Farms successfully inserted:", result);
  } catch (error) {
    console.error("Error inserting farms:", error);
  }
};

const getFarms = expressAsyncHandler(async (req, res) => {
  try {
    const farms = await Farm.find({});
    res.status(200).json({ message: "farms fetched successfully", farms });
  } catch (error) {
    next(error);
  }
});

const getSingleFarm = expressAsyncHandler(async (req, res, next) => {
  const id = req.params.id;

  try {
    const farm = await Farm.findById(id);

    res.status(200).json({ message: " fetched successfully", farm });
  } catch (error) {
    next(error);
  }
});
const investInFarm = expressAsyncHandler(async (req, res, next) => {
  const { authId } = req;

  const { farmId, slots, totalAmount } = req.body;

  try {
    const farm = await Farm.findById(farmId);
    const user = await userSchema.findById(authId);

    const investorSlot = {
      name: `${user.firstname} ${user.lastname}}`,
      slots: slots,
      totalAmount: totalAmount,
      id: authId,
    };

    const Slot = [...farm.investorsSlots, investorSlot];
    const investsID = [...farm.investors, authId];

    await Farm.updateOne(
      {
        _id: farmId,
      },
      {
        investors: investsID,
        investorsSlots: Slot,
        slotsTaken: Number(slots) + Number(farm.slotsTaken),
        availableSlots:
          Number(farm.totalSlots) - (Number(slots) + Number(farm.slotsTaken)),
        available:
          Number(farm.totalSlots) === Number(slots) + Number(farm.slotsTaken)
            ? false
            : true,
      }
    );

    const farms = [...user.farms, farm.id];

    await userSchema.updateOne(
      {
        _id: authId,
      },
      {
        totalAmountInvested:
          Number(user.totalAmountInvested) + Number(totalAmount),
        totalFarms: Number(user.totalFarms) + 1,
        farms: farms,
      }
    );

    res.status(200).json({ message: "hurrah, investment successful " });
  } catch (error) {
    next(error);
  }
});

module.exports = {
  createFarms,
  getFarms,
  getSingleFarm,
  investInFarm,
};
