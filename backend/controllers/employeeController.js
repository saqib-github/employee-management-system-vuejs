import employeeModel from "../models/employeeModel.js";
export default {
  savaEmpolyee: async function (req, res) {
    console.log(req.body);
    const newEmpolyee = new employeeModel({
      company_id: req.body.company_id,
      name: req.body.name,
      father_name: req.body.father_name,
      age: req.body.age,
      email: req.body.email,
      phone_number: req.body.phone_number,
      city: req.body.city,
      country: req.body.country,
      position: req.body.position,
      role: req.body.role,
      department: req.body.department,
      joining_date: req.body.joining_date,
      leaving_date: req.body.leaving_date,
      salary: req.body.salary,
      bonus: {
        amount: 0,
        date: Date.now(),
        bonus_type: "none",
      },
      internee_status: true,
      employee_status: false,
      contract_signature_date: Date.now(),
      contract_ending_date: Date.now(),
    });
    try {
      const savedData = await newEmpolyee.save();
      res.json(savedData);
    } catch (err) {
      res.json(err);
    }
  },
};
