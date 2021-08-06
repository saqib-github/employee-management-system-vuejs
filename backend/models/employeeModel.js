import pkg from "mongoose";
const { Schema, model } = pkg;

const employee_data = Schema(
  {
    company_id: String,
    name: String,
    father_name: String,
    age: Number,
    email: String,
    phone_number: Number,
    city: String,
    country: String,
    position: String,
    role: String,
    department: String,
    joining_date: Date,
    leaving_date: Date,
    salary: Number,
    bonus: {
      amount: Number,
      date: Date,
      bonus_type: String,
    },
    internee_status: Boolean,
    employee_status: Boolean,
    contract_signature_date: Date,
    contract_ending_date: Date,
  },
  { collection: "employees-data" }
);
export default model("employee_data", employee_data);
