<template>
  <tr>
    <td>{{ company_id }}</td>
    <td>{{ name }}</td>
    <td>{{ country }}</td>
    <td>{{ city }}</td>
    <td class="">{{ salary }}</td>
    <td class="">
      <v-btn icon color="blue" @click="viewDetails(id)">view</v-btn>
      <v-btn icon color="red"
        ><v-icon @click="deleteEmployee(id)">{{ mdiTrashCan }}</v-icon></v-btn
      >
      <v-btn icon color="green"
        ><v-icon>{{ mdiPencil }}</v-icon></v-btn
      >
    </td>
  </tr>
</template>

<script>
import Helpers from "../helpers/Helper.js";
import { mdiTrashCan } from "@mdi/js";
import { mdiPencil } from "@mdi/js";
export default {
  name: "employee-item",

  props: ["company_id", "name", "country", "city", "salary", "id"],
  data() {
    return {
      mdiTrashCan: mdiTrashCan,
      mdiPencil: mdiPencil,
    };
  },
  methods: {
    deleteEmployee(_id) {
      this.$emit("delete-employee", _id);
      // Swal.fire({
      //   title: "Are you sure?",
      //   text: "You won't be able to revert this!",
      //   icon: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#3085d6",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Yes, delete it!",
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     let url = "http://localhost:5000/employee/" + _id;
      //     console.log(url);
      //     Helpers.deleteById(url);
      //     Swal.fire("Deleted!", "Your file has been deleted.", "success");
      //   }
      // });
    },
    viewDetails(id) {
      console.log("View details id", id);
      this.$router.push({
        name: "EmployeedetailsView",
        params: { id: id },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
