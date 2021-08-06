import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      emloyees: [
        {
          company_id: "TRC123", // required
          name: "Header", // required
          father_name: "John", // required
          age: 25, // required
          email: "john@email.com", // required
          phone_number: "03410491234", // required
          city: "San Francisco", // required
          country: "US", // required
          position: "Graphic Designer", // required
          role: "gdesigner", // required
          department: "Creative and Arts", // required
          joining_date: Date.now().toString(), // required
          leaving_date: Date.now().toString(), // optional
          salary: 0, // required
          bonus:{
            amount: 0, // optional, default to 0
            date: Date.now().toString(), // optional but if amount added then required
            bonus_type: "", // optional but if amount added then required
          }, // optional default to {}
          internee_status: false, // if true he is internee in the company
          employee_status: false, // if true he is permanent employee in the company
          contract_signature_date: Date.now().toString(), // optional
          contract_ending_date: Date.now().toString(), // optional but when the contract is signed then required
        },
      ],
    };
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};
