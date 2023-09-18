<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AboutEllyLukeView from './views/AboutEllyLukeView.vue'
import AboutFossilfriFremtidView from './views/AboutFossilfriFremtidView.vue'
import ActivityView from './views/ActivityView.vue'
import ContactView from './views/ContactView.vue'
import HvemStaarBagView from './views/HvemStaarBag.vue'
import TopView from './views/TopView.vue'
import BurgerMenu from './components/BurgerMenu.vue'
import fffLogoForskudtBlue from '@/assets/FossilfriFremtid_logo1_blå.png'

import { ref } from 'vue'

const isMenuActive = ref(false);

</script>

<!-- <script lang="ts">
  const isMenuActive: Boolean = false;
  export default {
  props: {isMenuActive: {type: Boolean, default: true}}
  };

  
</script> -->

<template>
    <BurgerMenu @toggle-menu=" isMenuActive = !isMenuActive " :active="isMenuActive"></BurgerMenu>
    <header v-if="isMenuActive">
    <RouterLink to="/#top">
      <img alt="fossilfri fremtid logo" class="logo" src="@/assets/FossilfriFremtid_logo2_blå_transparent.png" width="125" height="125" />
    </RouterLink>

    <div class="wrapper">
      <nav>
        <RouterLink to="/#om-fossilfri-fremtid">Hvad er Fossilfri Fremtid?</RouterLink>
        <RouterLink to="/#om-elly-luke">Hvad er Elly-Luke?</RouterLink>
        <RouterLink to="/#hvem-staar-bag">Hvem står bag?</RouterLink>
        <RouterLink to="/#aktiviteter">Bliv en del af kampagnen</RouterLink>
        <RouterLink to="/#kontakt">Kontakt</RouterLink>
      </nav>
    </div>
  </header>
  
  <RouterView></RouterView>
    <footer>
    <div class="wrapper">
      <img class="footer-logo" :src="fffLogoForskudtBlue" alt="fossilfri fremtid logo"/>
      <RouterLink to="/#om-fossilfri-fremtid">Hvad er Fossilfri Fremtid?</RouterLink>
      <RouterLink to="/#om-elly-luke">Hvad er Elly-Luke?</RouterLink>
      <RouterLink to="/#hvem-staar-bag">Hvem står bag?</RouterLink>
      <RouterLink to="/#aktiviteter">Bliv en del af kampagnen</RouterLink>
      <RouterLink to="/#kontakt">Kontakt</RouterLink>

       <!-- Social media and contact links -->
      <div class="social-media-links">
        <a href="https://www.facebook.com/profile.php?id=61550554145147" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-facebook"></i> Facebook
        </a>
        <a href="https://www.instagram.com/fossilfrifremtid" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-instagram"></i> Instagram
        </a>
        
        <a href="mailto: fossilfrifremtid@gmail.com">
          <i class="fas fa-envelope"></i> fossilfrifremtid@gmail.com
        </a>
        <a href="tel:+45 31 52 31 21">
          <i class="fas fa-phone"></i> Telefon
        </a>
        </div>

    </div>
  </footer>
</template>

<style scoped>
main {
  padding: 0;
}

header {
  background-color: steelblue;
  box-sizing: border-box;
  padding: 1em 2em;
  line-height: 1.5;
  height: 150px;
  position: fixed;
  width: 100%;
  top:0;
}

.logo {
  display: none;
  margin: 0 auto 2rem;
}

footer{
  background-color: #222222;
  width: 100%;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 6em;
}

footer .footer-logo {
  width: 20%;
  height: auto;
  padding-left: 1em;
  float: left;
}

footer a.router-link-exact-active {
  color: white;
}

footer a.router-link-exact-active:hover {
  background-color: transparent;
}

footer a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

footer a:first-of-type {
  border: 0;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: white;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    display: block;
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  nav {
    text-align: left;
    padding: 1rem 0;
    margin-top: 1rem;
    display: flex;
  }

  nav a{
    margin-left: auto;
  }
}
</style>