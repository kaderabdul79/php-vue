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
  <div class="container" v-if="userState.loading">
    <div class="row">
      <div class="col">
        <Spinner />
      </div>
    </div>
  </div>
    <!-- error message -->
  <div class="container" v-if="!userState.loading && userState.errorMessage">
    <div class="row">
      <div class="col">
        <p class="text-danger">{{userState.errorMessage}}</p>
      </div>
    </div>
  </div>

    <!-- Show Data -->
  <div class="container" v-if="!userState.loading && userState.users.length > 0">
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
              <tr v-for="user in userState.users" :key="user.id">
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
import { mapGetters } from 'vuex'

export default {
    // data() {
    //     return {
    //         loading: false,
    //         users: [],
    //         errorMessage: null
    //     };
    // },
    created() {
        this.$store.dispatch("usersModule/getUsers");
    },
    methods: {},
    computed: {
        ...mapGetters({
        userState: "getUsersState"
    })
    },
    components: { Spinner }
}
</script>

<style>

</style>