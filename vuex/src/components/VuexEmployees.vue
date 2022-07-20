<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Employee</p>
        <p class="fst-itali">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae explicabo culpa, obcaecati error, excepturi facere magni non reiciendis, voluptates quis expedita eos quam dicta dolorem repellendus! Error rerum minus quo.</p>

      </div>
    </div>
  </div>
  <!-- see if state checnge or not -->
  <!-- {{employees}} -->
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <ul>
          <li v-for="employee of employeeState.employees" :key="employee.id">
          <input :checked="employee.isSelected" @change="updateSelected(employee.id)" type="checkbox" name="" id="">
          {{employee.name}}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div v-for="employee of employeeState.employees" :key="employee.id">
          <div class="card text-start mb-2" v-if="employee.isSelected">
            <div class="card-body">
              <ul>
                <li>Id : <span>{{employee.id}}</span></li>
                <li>name : <span>{{employee.name}}</span></li>
                <li>email : <span>{{employee.email}}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EmployeeService } from '../services/EmployeeService';
import { mapGetters } from 'vuex'

export default {
//   data(){
//     return {
//       employees: EmployeeService.getAllEmployees()
//     }
//   },
  methods: {
    updateSelected(empId){
        this.$store.dispatch("employeeModule/changeSelected", {empId: empId});
    }
  },
  computed: {
        ...mapGetters({
            employeeState: "getEmployeeState"
        })
  }
}
</script>

<style>

</style>