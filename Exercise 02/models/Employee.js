import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  eName: { type: String, required: true, default: "Employee" },
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean,
});

export const Employee = mongoose.model("Employee", EmployeeSchema);
