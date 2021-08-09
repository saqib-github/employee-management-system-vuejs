<template>
  <v-container class="my-5">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6><h2>Employee Details</h2></v-flex>
      </v-layout>
    </v-container>

    <v-container class="my-10">
      <v-layout row wrap>
        <v-flex xs12 md2
          ><h4>
            <span class="red--text">Company Id:</span> {{ getEmployeeById.company_id }}
          </h4></v-flex
        >
        <v-flex xs12 md2
          ><h4>Name: {{ getEmployeeById.name }}</h4></v-flex
        >
        <v-flex xs12 md2
          ><h4>Father Name: {{ getEmployeeById.father_name }}</h4></v-flex
        >
        <v-flex xs12 md2
          ><h4>City: {{ getEmployeeById.city }}</h4></v-flex
        >
        <v-flex xs12 md2
          ><h4>Country: {{ getEmployeeById.country }}</h4></v-flex
        >
        <v-flex xs12 md2
          ><h4>Email: {{ getEmployeeById.email }}</h4></v-flex
        >
      </v-layout>
    </v-container>
    <v-container class="my-10">
      <v-layout row wrap justify-space-between>
        <v-flex xs12 md4
          ><h4>Phone Number: {{ getEmployeeById.phone_number }}</h4></v-flex
        >
        <v-flex xs12 md2
          ><h4>Salary: {{ getEmployeeById.salary }}</h4></v-flex
        >
        <v-flex xs12 md4 class="d-inline-flex"
          ><h4>Bonus: {{ getEmployeeById.bonus.amount }}</h4>
          <v-btn small dense color="primary" max-height="25">update</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="my-10">
      <v-layout row wrap justify-space-between>
        <v-flex xs12 md6
          ><h4>Position: {{ getEmployeeById.position }}</h4></v-flex
        >
        <v-flex xs12 md6
          ><h4>Department: {{ getEmployeeById.department }}</h4></v-flex
        >
      </v-layout>
    </v-container>
    <v-container class="my-10">
      <v-layout row wrap justify-space-between>
        <v-flex xs12 md4
          ><h4>Joining Date: {{ getEmployeeById.joining_date }}</h4></v-flex
        >
        <v-flex xs12 md4 class="d-inline-flex"
          ><h4>Leaving Date: none</h4>
          <v-btn small dense color="primary" max-height="25">update</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="my-10">
      <v-layout row wrap align-content-space-between>
        <v-flex xs12 md6 class="d-inline-flex align-md-stretch"
          ><h4>Contract Signed Date: none</h4>
          <v-btn small dense color="primary" max-height="25">update</v-btn>
        </v-flex>
        <v-flex xs12 md6 class="d-inline-flex"
          ><h4>Contract Ending Date: none</h4>
          <v-btn small dense color="primary" max-height="25">update</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="my-10">
      <v-layout row wrap align-content-space-between>
        <v-flex xs12 md6 class="d-inline-flex align-md-stretch"
          ><h4>Employee Status: Permanent || Temporarily</h4>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import Helpers from "../helpers/Helper.js";
export default {
  asyncComputed: {
    getEmployeeById() {
      let id = this.$route.params.id;
      let url = "http://localhost:5000/employee/" + id;
      return Helpers.GetById(url).then((result) => {
        return result.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
