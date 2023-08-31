<script setup lang="ts">
import ffflogo from '@/assets/FossilfriFremtid_SoMe_blå_01.jpg'
import altfflogo from '@/assets/logo.png'
import instaLogo from '@/assets/instagram.png'
</script>

<template>
  <main>
    <div>
      <img :src="ffflogo" alt="Forssilfri fremtid Logo" />
      <img :src="altfflogo" alt="Forssilfri fremtid Logo" />
    </div>
    <div>
      <a href="https://www.instagram.com/fossilfrifremtid/">Instagram</a>
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  font-size: smaller;
}
</style>
