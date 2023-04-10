import mongoose, { Schema, model } from "mongoose";

const partySchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    budget: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    services: {
      type: String,
      require: true,
    },
    title: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },
  },
  { timestamps: true }
);

const Party = model("Party", partySchema);

export default Party;
