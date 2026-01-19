import mongoose from "mongoose";

const MobileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: String,
    price: { type: Number, required: true },
    stock: Number,
    description: String,
    features: [String],
    images: [String], 
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Mobile || mongoose.model("Mobile", MobileSchema);
