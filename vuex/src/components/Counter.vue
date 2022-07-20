<template>
  <div class="container">
    <div class="row">
        <div class="col-md-4 mt-5">
            <div class="card text-start">
              <div class="card-body">
                <p class="h3 display-3">{{counter}}</p>
                <button @click="Increment" class="btn btn-success m-1">Increment</button>
                <button v-on:click="Decrement" class="btn btn-warning m-1">Decrement</button>
                <button @click="IncrementBy(5)" class="btn btn-danger m-1">Increment By</button>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Counter',
    data(){
        return{
            counter: 0
        }
    },
    methods:{
        Increment(){
            this.counter = this.counter + 1
        },
        Decrement(){
            this.counter = this.counter - 1
        },
        IncrementBy(value){
            this.counter = this.counter + value
        }
    }
}
</script>

<style>

</style>