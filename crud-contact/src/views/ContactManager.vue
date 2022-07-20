<template>
  <div class="container" v-if="contacts.length > 0">
    <div class="row">
      <div class="col">
        <p class="text-success fw-bold">Contact Manager
          <router-link to="/contacts/add" class="btn btn-success btn-sm"><i class="fas fa-plus"></i>New Contact</router-link>
        </p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. quam? Veritatis eius, distinctio culpa possimus debitis, quam? Veritatis eius, distinctio culpa possimus debitis!, quam? Veritatis eius, distinctio culpa possimus debitis!!</p>
      </div>
    </div>
    <!-- before use data show successfuly data came or error -->
    <!-- <pre>{{contacts}}</pre><span class="bg-warning">{{errorMessage}}</span> -->
    <div class="row">
      <div class="col-md-6">
        <div class="col">
          <input type="text" class="form-control" name="" placeholder="search name..." />
        </div>
        <div class="col mt-1">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>

    <!-- show spinnner if loading is false -->
    <div class="" v-if="loading">
      <spinner />
    </div>

    <!-- if error show errorMessage -->
    <div v-if="!loading && errorMessage">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="text-danger bg-red fw-bold">{{errorMessage.message}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="row">
        <div class="col-md-4" v-for="contact of contacts" :key="contact">
          <div class="card text-start">
            <img class="card-img-top mx-auto" :src="contact.photo"  style="width: 8rem;" alt="avatar">
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item active text-center">{{contact.name}}</li>
                <li class="list-group-item">Email: {{contact.email}}</li>
                <li class="list-group-item">Mobile: {{contact.mobile}}</li>
                <li class="list-group-item">
                  <router-link class="btn btn-success me-4" :to="`/contacts/view/${contact.id}`">
                    <i class="fas fa-eye"></i>
                  </router-link>
                  <router-link class="btn btn-info me-4" :to="`/contacts/edit/${contact.id}`">
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <router-link class="btn btn-danger" :to="`/contacts/delete/${contact.id}`">
                    <i class="fas fa-trash"></i>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from '../services/ContactService';
import Spinner from '../components/Spinner.vue';

export default {
    name: "ContactManager",
    data() {
        return {
            loading: false,
            contacts: [],
            errorMessage: null,
            // avatar: '../asset/avatar.jpg'
        };
    },
    async created() {
        try {
            this.loading = true;
            // let response = await this.getAllContactsData();
            // below line use->Can directly call serviceProvider function instead of above line.then don't need extra methods
            let response = await ContactService.getAllContacts();
            this.contacts = response.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods() {
        // const getAllContactsData = async () => {
        //   return await ContactService.getAllContacts();
        // }
    },
    components: { Spinner }
}
</script>

<style>
.az{
  display: flex !important;
  background-color: green !important;
}
</style>