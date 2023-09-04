<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="view-container container-bg">
    <div>
    <h1>Elly-Luke</h1>
    Elly-Luke felterne ligger i Nordsøen og dækker tilsammen 160 km2. 
    Energistyrelsen har vurderet, at Elly-Luke felterne indeholder 5.2 mia. kubikmeter gas. 
    Det svarer til 2.5 gange Danmarks årlige gasforbrug og vil, hvis det bliver brændt, udlede 10.6 mio. ton CO2. 
    Det vil betyde en 50 % øgning af gasproduktionen i Danmark. 
    <!--Indsæt læs-mere-knap her-->
    <div class="button-container">
        <RouterLink to="om-elly-luke">
          <button href="" class="read-more-button">LÆS MERE</button>
        </RouterLink>
    </div> 
    </div>
  </div>
</template>

<style scoped>
.container-bg{
      background-color:#FFB48E;
    }

    .read-more-button{
      border: 2px solid black;
      border-radius: 2em;
      margin-bottom: 0.5em;
      margin-top: 0.5em;
      color: black;
      cursor: pointer;
      font-size: 1.25em;
      font-weight: bold;
      flex-wrap: nowrap;
      padding: 1em;
    }
</style>