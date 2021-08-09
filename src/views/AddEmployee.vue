<template>
  <v-container id="user-profile" fluid tag="section">
    <h2>Add a New Employee</h2>
    <v-row justify="center" class="mt-4">
      <v-col cols="12" md="12">
        <template v-slot:heading>
          <div class="display-2 font-weight-light">Edit Profile</div>

          <div class="subtitle-1 font-weight-light">Complete your profile</div>
        </template>

        <v-form>
          <v-container class="py-0">
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field v-model.trim="name" label="Name" />
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model.trim="father_name"
                  class="purple-input"
                  label="Father Name"
                />
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model.trim="email"
                  label="Email Address"
                  class="purple-input"
                />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="city"
                  label="City"
                  class="purple-input"
                />
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model.trim="country"
                  label="Country"
                  class="purple-input"
                />
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="phone_number"
                  label="Phone Number"
                  class="purple-input"
                />
              </v-col>

              <v-col cols="12" md="2">
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="joining_date"
                      label="Joining Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="joining_date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog.save(joining_date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>

              <v-col cols="12" md="2">
                <v-text-field
                  v-model.trim="position"
                  label="Position"
                  class="purple-input"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  v-model.trim="department"
                  label="Department"
                  class="purple-input"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  v-model="starting_salary"
                  type="number"
                  label="Starting Salary"
                  class="purple-input"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  :items="status"
                  label="Status"
                  v-model.trim="employee_status"
                  @change="changeEmployeeStatus"
                ></v-select>
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  :items="job_types"
                  label="Job Type"
                  v-model.trim="job_type"
                  @change="changeJobType"
                ></v-select>
              </v-col>
              <v-col cols="12" md="4" v-if="contract_status">
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="contract_signed_date"
                      label="Contract Signed Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="contract_signed_date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog.save(contract_signed_date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="12" md="4" v-if="contract_status">
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="contract_ending_date"
                      label="Contract Ending Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="contract_ending_date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog.save(contract_ending_date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>

              <v-col cols="12" class="text-right">
                <v-btn color="success" class="mr-0" @click="AddEmployee">
                  Add
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";
import Helpers from "../helpers/Helper.js";

export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    company_name: "TRC",
    modal: false,
    status: ["Permanent", "Temporary"],
    job_types: ["Internee", "Full Time Hiring", "Part Time Hiring"],
    // v-models for getting form data
    employee_status: "",
    job_type: "",
    name: "",
    father_name: "",
    email: "",
    city: "",
    country: "",
    phone_number: 0,
    joining_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    position: "",
    department: "",
    starting_salary: 0,
    contract_signed_date: new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .substr(0, 10),
    contract_ending_date: new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .substr(0, 10),
    // v-models for getting form data
    contract_status: false,
  }),

  methods: {
    changeEmployeeStatus() {
      if (this.employee_status === "Temporary") {
        this.contract_status = true;
      }
      if (this.employee_status === "Permanent") {
        this.contract_status = false;
      }
    },

    changeJobType() {
      if (
        this.employee_status === "Temporary" &&
        this.job_type === "Internee"
      ) {
        this.contract_status = true;
      }
      if (
        this.employee_status === "Permanent" &&
        this.job_type === "Internee"
      ) {
        Swal.fire({
          title: "Are you sure?",
          text: "You want to hire internee as Permanent Employee!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Sure!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    },
    // save new employee to database function
    AddEmployee() {
      console.log("name", this.name);
      console.log("father_name", this.father_name);
      console.log("email", this.email);
      console.log("city", this.city);
      console.log("country", this.country);
      console.log("phone_number", this.phone_number);
      console.log("joining date", this.joining_date);
      console.log("position", this.position);
      console.log("department", this.department);
      console.log("staring salary", this.starting_salary);
      console.log("employee status", this.employee_status);
      console.log("job type", this.job_type);

      if (
        !this.name ||
        !this.father_name ||
        !this.email ||
        !this.city ||
        !this.country ||
        !this.phone_number ||
        !this.joining_date ||
        !this.position ||
        !this.department ||
        !this.employee_status ||
        !this.job_type
      ) {
        Swal.fire("Opps", "Please Enter all required values", "error");
      } else {
        let n = 10;
        const newEmployee = {
          company_id: this.company_name + n + 1,
          name: this.name,
          father_name: this.father_name,
          email: this.email,
          city: this.city,
          country: this.country,
          phone_number: this.phone_number,
          joining_date: this.joining_date,
          position: this.position,
          department: this.department,
          salary: this.starting_salary,
          employee_status: this.employee_status,
          job_type: this.job_type,
        };
        Helpers.Post("http://localhost:5000/employee", newEmployee);
        Swal.fire(
          "Saved",
          "A new employee details saved successfully",
          "success"
        );
        this.$router.push("/manageemployees");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
