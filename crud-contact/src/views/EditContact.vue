<template>
  <div class="container">
    <div class="row mx-auto">
      <!-- mx-auto -->
      <div class="col-md-8">
        <div class="row border">
        <form @submit.prevent="updateContact()">
          <div class="col-md-8">
          <!-- <h2>{{contactId}}</h2> -->
          {{contacts}}
          <div class="card text-success">
            <div class="card-body">
              <h4 class="card-title">Edit Contact</h4>
              <div class="mb-3">
                <input type="text" v-model="contact.name" class="form-control" name="" id="" placeholder="name">
              </div>
              <div class="mb-3">
                <input type="text" v-model="contact.photo" class="form-control" name="" id="" placeholder="Photo URL">
              </div>
              <div class="mb-3">
                <input type="email" v-model="contact.email" class="form-control" name="" id="" placeholder="email">
              </div>
              <div class="mb-3">
                <input type="number" v-model="contact.mobile" class="form-control" name="" id="" placeholder="mobile">
              </div>
              <div class="mb-3">
                <input type="text" v-model="contact.company" class="form-control" name="" id="" placeholder="company name">
              </div>
              <div class="mb-3">
                <input type="text" v-model="contact.title" class="form-control" name="" id="" placeholder="title">
              </div>

  
              <!-- <button type="submit" class="btn btn-primary me-4">Update</button> -->
              <!-- <button type="submit" class="btn btn-success me-4">Preview</button>
              <button type="submit" class="btn btn-danger  me-4">Reset</button> -->
            </div>
          </div>
          </div>
          <div class="col-md-4">
              <div class="mb-3">
                <input type="text" v-model="contact.photo" class="form-control" name="" id="" placeholder="title">
              </div>

              <div class="mb-3">
                <select class="form-control" v-model="contact.groupId" v-if="groups.length > 0">
                  <option value="">Select Group</option>
                  <option :value="group.id" v-for="group of groups" :key="group.id">{{group.name}}</option>
                </select>
              </div>

              Education
              <div class="form-check">
                SSC<input v-model="contact.education" class="form-check-input" type="checkbox" value="SSC" id="">
              </div>
              <div class="form-check">
                HSC<input v-model="contact.education" class="form-check-input" type="checkbox" value="HSC" id="">
              </div>
              <div class="form-check">
                BSC<input v-model="contact.education" class="form-check-input" type="checkbox" value="BSC" id="">
              </div>

              Gender<div class="form-check">
                Male<input class="form-check-input" v-model="contact.gender" type="radio" value="male" id="male" />
              </div>
              <div class="form-check">
                Female<input class="form-check-input" v-model="contact.gender" type="radio" value="female" id="female" />
              </div>
          </div>
          <button type="submit" class="btn btn-primary me-4">Update</button>
        </form>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-warning">
          <h4 class="card-title text-center">Preview</h4>
          <img class="w-50" v-bind:src="contact.photo" alt="avatar">
          <div class="card-body">
            <p class="card-text">Name: {{contact.name}}</p>
            <p class="card-text">email: {{contact.email}}</p>
            <p class="card-text">company: {{contact.company}}</p>
            <p class="card-text">title: {{contact.title}}</p>
            <p class="card-text">mobile: {{contact.mobile}}</p> 
            <p class="card-text">gender: {{contact.gender}}</p>
            <p class="card-text">education: {{contact.education}}</p>
            <!-- <p class="card-text">group: {{groups.name}}</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from '../services/ContactService'
export default {
  data(){
    return {
      contactId: this.$route.params.contactId,
      loading: false,
      contact: {
        name:"",
        email:"",
        mobile:"",
        title:"",
        company:"",
        photo:"",
        groupId:"",
        gender:"",
        education:[]
      },
      errorMessage: null,
      groups: [],
    }
  },
  async created(){
    try{
      this.loading = true;
      let response = await ContactService.getContact(this.contactId);
      let groupResponse = await ContactService.getAllGroups();
      this.contact = response.data;
      this.groups = groupResponse.data;
      this.loading = false;
    }
    catch(error){
      this.errorMessage = error
      this.loading = false;
    }
  },
  methods:{
    async updateContact(){
        try{
        let response = await ContactService.updateContact(this.contact,this.contactId);
        if(response){
          return this.$router.push('/')
        }
        else{
          return this.$router.push('/contacts/add')
        }
      }
      catch(error){
        this.errorMessage = error
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>