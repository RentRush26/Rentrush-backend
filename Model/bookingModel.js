import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users_data",
      required: true,
    },
    carId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cars",
      required: true,
    },
    showroomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users_data",
      required: true,
    },
    rentalStartDate: {
      type: String,
      required: true,
    },
    rentalStartTime: {
      type: String,
      required: true,
    },
    rentalEndDate: {
      type: String,
      required: true,
    },
    rentalEndTime: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "pending",
        "return initiated",
        "approved",
        "returned",
        "pending payment",
      ],
      default: "pending",
    },
    repairDescriptions: {
      type: Object,
      default: {},
    },
    invoiceUrls: [],
    currentInvoiceUrl: {
      type: String,
      default: "",
    },
    overdueHours: {
      type: Number,
      default: 0,
    },
    overdueCharge: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
