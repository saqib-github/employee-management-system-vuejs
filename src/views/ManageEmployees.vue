<template>
  <v-container id="regular-tables" fluid tag="section">
    <h2>Manage Employees</h2>
    <span class="material-icons-outlined"> work </span>
    <v-text-field
      label="Search"
      v-model.trim="searchValue"
      
      :prepend-inner-icon="mdiMagnify"
    ></v-text-field>

      <v-simple-table>
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
          <tr v-for="i in 10" :key="i">
            <td>1</td>
            <td>Dakota Rice</td>
            <td>Niger</td>
            <td>Oud-Turnhout</td>
            <td class="">$36,738</td>
            <td class="">
              <v-btn icon color="blue">view</v-btn>
              <v-btn icon color="red" @click="deleteEmployee"
                ><v-icon>{{ mdiTrashCan }}</v-icon></v-btn
              >
              <v-btn icon color="green" @click="getAlldata"
                ><v-icon>{{ mdiPencil }}</v-icon></v-btn
              >
            </td>
          </tr>
        </tbody>
      </v-simple-table>

  </v-container>
</template>

<script>
import Swal from "sweetalert2";
import { mdiTrashCan } from "@mdi/js";
import { mdiPencil } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
import Helpers from "../helpers/Helper.js";
export default {
  data() {
    return {
      mdiTrashCan: mdiTrashCan,
      mdiPencil: mdiPencil,
      mdiMagnify: mdiMagnify,
      searchValue: "",
      data: [],
    };
  },
  methods: {
    deleteEmployee() {
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
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    getAlldata() {
      Helpers.GetAlldata("http://localhost:5000/employee").then((result) => {
        console.log(result.data);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
