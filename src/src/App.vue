<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BurgerMenu from './components/BurgerMenu.vue'
import fffLogoForskudtBlue from '@/assets/FossilfriFremtid_logo1_blå.png'

import { ref } from 'vue'

const isMenuActive = ref(false);

</script>

<template>
  <!-- header section (only one header should be visible at a time) -->
  <header class="burger-toggled-top-bar">
    <div class="burger-toggled-container">
          <nav class="burger-toggled-nav" v-if="isMenuActive">
            <RouterLink to="/#om-fossilfri-fremtid">Hvad er Fossilfri Fremtid?</RouterLink>
            <RouterLink to="/#om-elly-luke">Hvad er Elly-Luke?</RouterLink>
            <RouterLink to="/#hvem-staar-bag">Hvem står bag?</RouterLink>
            <RouterLink to="/#aktiviteter">Bliv en del af kampagnen</RouterLink>
            <RouterLink to="/#kontakt">Kontakt</RouterLink>
          </nav>
    </div>
    <BurgerMenu @toggle-menu=" isMenuActive = !isMenuActive " :active="isMenuActive"></BurgerMenu>
  </header>

  <header class="top-bar">
    <RouterLink to="/#top">
      <img alt="fossilfri fremtid logo" class="logo" src="@/assets/FossilfriFremtid_logo2_blå_transparent.png" width="125" height="125" />
    </RouterLink>

    <div class="wrapper">
      <nav class="default-nav">
        <RouterLink to="/#om-fossilfri-fremtid">Hvad er Fossilfri Fremtid?</RouterLink>
        <RouterLink to="/#om-elly-luke">Hvad er Elly-Luke?</RouterLink>
        <RouterLink to="/#hvem-staar-bag">Hvem står bag?</RouterLink>
        <RouterLink to="/#aktiviteter">Bliv en del af kampagnen</RouterLink>
        <RouterLink to="/#kontakt">Kontakt</RouterLink>
      </nav>
    </div>
  </header>
  
  <!-- main section -->
  <RouterView></RouterView>

  <!-- footer section -->
  <footer>
    
    <img class="footer-logo" :src="fffLogoForskudtBlue" alt="fossilfri fremtid logo"/>
    
    <div class="wrapper">
      <!-- <RouterLink to="/#om-fossilfri-fremtid">Hvad er Fossilfri Fremtid?</RouterLink>
      <RouterLink to="/#om-elly-luke">Hvad er Elly-Luke?</RouterLink>
      <RouterLink to="/#hvem-staar-bag">Hvem står bag?</RouterLink>
      <RouterLink to="/#aktiviteter">Bliv en del af kampagnen</RouterLink>
      <RouterLink to="/#kontakt">Kontakt</RouterLink> -->

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
      <img class="footer-logo-on-phone" :src="fffLogoForskudtBlue" alt="fossilfri fremtid logo"/>
    </div>
  </footer>
</template>

<style scoped>
main {
  padding: 0;
}

.burger-toggled-top-bar{
  position: fixed;
  width: 100%;
  background-color: steelblue;
  display: flex;
  justify-content: space-between;
}

.burger-toggled-nav {
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 1em 4em 1em 1em;
}

.top-bar{
  background-color: steelblue;
  box-sizing: border-box;
  padding: 1em 2em;
  line-height: 1.5;
  height: 150px;
  position: fixed;
  width: 100%;
  top:0;
  display: none;
}

.logo {
  display: none;
  margin: 0 auto 2rem;
}

footer{
  background-color: #222222;
  width: 100%;
  padding-top: 1em;
  padding-bottom: 3em;
  display: flex;
  justify-content: space-between;
}
.footer-logo{
  display: none;
}

.footer-logo-on-phone{
  display: block;
  margin: 1rem auto 1rem 1rem;
  width: 200px;
  max-width: 60%
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

.default-nav {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
}

nav a.router-link-exact-active {
  color: white;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.default-nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.default-nav a:first-of-type {
  border: 0;
}

.social-media-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

@media (min-width: 1024px) {
  .footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .footer-logo{
    display: block;
    width: 200px;
    margin-left: 2rem;
  }

  .footer-logo-on-phone{
    display: none;
  }

  .social-media-links {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  }

  .top-bar {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    display: block;
    margin: 0 2rem 0 0;
  }

  .burger-toggled-nav{
    display: none;
  }

  .default-nav {
    text-align: left;
    padding: 1rem 0;
    margin-top: 1rem;
    flex-direction: row;
  }

  .default-nav a{
    margin-left: auto;
  }

}
</style>