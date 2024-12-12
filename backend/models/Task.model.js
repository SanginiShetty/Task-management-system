import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "in-progress", "completed"], // Limiting to specific statuses
    default: "pending",
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

export const Task = mongoose.model("Task", taskSchema);


