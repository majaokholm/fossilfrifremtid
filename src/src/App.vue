<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Hjem</RouterLink>
        <RouterLink to="/About">Hved er fossilfri fremtid</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: left;
  align-items: left;
}
a {
  font-family: Sans-serif;
  margin-right: 50px;
}
</style>
