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
          <li v-for="employee of employees" :key="employee.id">
          <input @change="updateSelected(employee.id)" type="checkbox" name="" id="">
          {{employee.name}}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div v-for="employee of employees" :key="employee.id">
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
export default {
  data(){
    return {
      employees: [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          isSelected: false
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          isSelected: false
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          isSelected: false
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          isSelected: false
        }
      ]
    }
  },
  methods: {
    updateSelected(empId){
      this.employees = this.employees.map((employee) => {
        if(employee.id === empId){
          return {
            ...employee,
            isSelected: !employee.isSelected
          }
        }
        else{
          return employee;
        }
      }
      )
    }
  }
}
</script>

<style>

</style>