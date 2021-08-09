/* eslint-disable vue/no-async-in-computed-properties */ /* eslint-disable
vue/no-async-in-computed-properties */
<template>
  <v-container id="regular-tables" fluid tag="section">
    <h2>Manage Employees</h2>
    <v-text-field
      label="Search"
      v-model.trim="searchValue"
      :prepend-inner-icon="mdiMagnify"
    ></v-text-field>

    <v-simple-table :search="searchValue">
      <thead>
        <tr>
          <th class="success--text">Company Id</th>
          <th class="success--text">Name</th>
          <th class="success--text">Country</th>
          <th class="success--text">City</th>
          <th class="success--text">Salary</th>
          <th class="success--text">Options</th>
        </tr>
      </thead>

      <tbody>
        <employee-item
          v-for="employee in getAlldata"
          :key="employee.id"
          :id="employee._id"
          :company_id="employee.company_id"
          :name="employee.name"
          :country="employee.country"
          :city="employee.city"
          :salary="employee.salary"
          @delete-employee="deleteEmployee"
        ></employee-item>
        <!-- <tr v-for="data in getAlldata" :key="data._id">
          <td>{{ data.company_id }}</td>
          <td>{{ !data.name ? "yes" : data.name }}</td>
          <td>{{ data.country }}</td>
          <td>{{ data.city }}</td>
          <td class="">{{ data.salary }}</td>
          <td class="">
            <v-btn icon color="blue">view</v-btn>
            <v-btn icon color="red" @click="deleteEmployee"
              ><v-icon>{{ mdiTrashCan }}</v-icon></v-btn
            >
            <v-btn icon color="green"
              ><v-icon>{{ mdiPencil }}</v-icon></v-btn
            >
          </td>
        </tr> -->
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import Swal from "sweetalert2";
import EmployeeItem from "../components/EmployeeItem.vue";
import Helpers from "../helpers/Helper.js";
export default {
  components: {
    EmployeeItem: EmployeeItem,
  },
  data() {
    return {
      mdiMagnify: mdiMagnify,
      searchValue: "",
      allEmployees: [],
    };
  },
  methods: {
    deleteEmployee(_id) {
      console.log("delete id", _id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          let url = "http://localhost:5000/employee/" + _id;
          console.log(url);
          Helpers.deleteById(url);
          let idx = this.getAlldata.indexOf(_id);
          this.getAlldata.splice(idx, 1);
          console.log("this.getAlldata", this.getAlldata);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
  },
  asyncComputed: {
    getAlldata() {
      console.log("search value", this.searchValue);
      var data = [];
      Helpers.GetAlldata("http://localhost:5000/employee").then((result) => {
        for (let i = 0; i < result.data.length; i++) {
          data.push(result.data[i]);
        }
      });
      console.log(data);
      return data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
