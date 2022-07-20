<template>
<div class="container">
    <div class="row">
        <div class="col-md-4 mt-5">
            <div class="card text-start">
                <div class="card-body">
                    <p class="h3 display-3">{{counterState.count}}</p>
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
import { mapGetters } from 'vuex'

export default {
    name: 'VuexCounter',
    data() {
        return {
            
        }
    },
    methods: {
        Increment() {
            this.$store.dispatch("counterModule/incrementCounter")
        },
        Decrement() {
            this.$store.dispatch("counterModule/decrementCounter")
        },
        IncrementBy(value) {
            this.$store.dispatch("counterModule/incrementCounterBy",{value: value})
        }
    },
    computed: {
        ...mapGetters({
            counterState: "getCounterState"
        })
    }
}
</script>

<style>

</style>
