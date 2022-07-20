<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">User List</p>
        <p class="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe voluptatibus sint maiores a tempore provident atque commodi fugit eum ex eos eveniet, odio dolores rerum sunt, consectetur repellendus nihil asperiores placeat, repellat voluptatem! Consequatur repudiandae possimus quibusdam architecto optio neque,perspiciatis eveniet cupiditate?</p>
      </div>
    </div>
  </div>
  <!-- loading -->
  <div class="container" v-if="loading">
    <div class="row">
      <div class="col">
        <Spinner />
      </div>
    </div>
  </div>
    <!-- error message -->
  <div class="container" v-if="!loading && errorMessage">
    <div class="row">
      <div class="col">
        <p class="text-danger">{{errorMessage}}</p>
      </div>
    </div>
  </div>

    <!-- Show Data -->
  <div class="container" v-if="!loading && users.length > 0">
    <div class="row">
      <div class="col">
        <table class="table table-striped table-inverse table-responsive">
          <thead class="thead-inverse">
            <tr class="bg-secondary">
              <th>SL.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Website</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td scope="row">{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.address.city}}</td>
                <td>{{user.website}}</td>
              </tr>
            </tbody>
        </table>
        
      </div>
    </div>
  </div>

</template>

<script>
import Spinner from './Spinner.vue';
import axios from 'axios';
export default {
    data() {
        return {
            loading: false,
            users: [],
            errorMessage: null
        };
    },
    async created() {
        try {
            this.loading = true;
            let dataURL = `https://jsonplaceholder.typicode.com/users`;
            let response = await axios.get(dataURL);
            this.users = response.data;
            this.loading = false;
        }
        catch (error) {
            this.loading = false;
            this.errorMessage = error;
        }
    },
    methods: {},
    computed: {},
    components: { Spinner }
}
</script>

<style>

</style>