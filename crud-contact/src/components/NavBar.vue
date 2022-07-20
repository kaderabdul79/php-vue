<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary mb-2 px-5">
        <router-link class="navbar-brand" to="">UI BRAIN's</router-link>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse me-auto" id="collapsibleNavId">
            <ul class="navbar-nav mt-2 mt-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" to="/contacts">Contact Manager</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contacts/add">Add Contact</router-link>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style>

</style>