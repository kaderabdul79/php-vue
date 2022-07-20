<template>
  <div class="container">
    <div class="row mx-auto">
      <!-- mx-auto -->
      <div class="col-md-12">
            <!-- check is that id same as url
            {{contactId}} -->
            <!-- {{contact}} -->
            <!-- {{group}} -->
   <!-- show spinnner if loading is false -->
    <div class="" v-if="loading">
      <Spinner />
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
<!-- <div class="row" v-if="!loading && isDone()"> -->
      <div class="row">
        <div class="col-md-8">
          <div class="card text-success">
            <div class="card-body">
              <h4 class="card-title">View Contact</h4>
              <div class="mb-3">
                <b>Name : </b><span>{{contact.name}}</span>
              </div>
              <div class="mb-3">
                <b>mobile : </b><span>{{contact.mobile}}</span>
              </div>
              <div class="mb-3">
                <b>Email : </b><span>{{contact.email}}</span>
              </div>
              <div class="mb-3">
                <b>Company Name : </b><span>{{contact.company}}</span>
              </div>
              <div class="mb-3">
                <b>Title : </b><span>{{contact.title}}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
              <img :src="contact.photo" class="w-100" alt="">
              <div class="mb-3">
                <b>Group : </b><span>{{group.name}}</span>
              </div>

              <div class="mb-3">
                <b>Education : </b><span>{{contact.education}}</span>
              </div>

             <div class="mb-3">
              <b>Gender : </b><span>{{contact.gender}}</span>
             </div>
        </div>
      </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from '../services/ContactService'
import Spinner from '../components/Spinner.vue';
export default {
    data() {
        return {
            contactId: this.$route.params.contactId,
            loading: false,
            contact: {},
            errorMessage: null,
            group: {}
        };
    },
    async created() {
        try {
            this.loading = true;
            let response = await ContactService.getContact(this.contactId);
            let groupResponse = await ContactService.getGroup(response.data);
            // console.log(groupResponse);
            this.contact = response.data;
            this.group = groupResponse.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    // 
    methods: {
        // isDOne() {
        //     return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0;
        // }
    },
    components: { Spinner }
}
</script>

<style>

</style>