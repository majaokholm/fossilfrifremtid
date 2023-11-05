<script setup lang="ts">
import FossilerINordsoeenView from '../views/FossilerINordsoeenView.vue'
import AboutFossilfriFremtidView from '../views/AboutFossilfriFremtidView.vue'
import HvemStaarBagView from '../views/HvemStaarBag.vue'
import ActivityView from '../views/ActivityView.vue'
import ContactView from '../views/ContactView.vue'
import TopView from '../views/TopView.vue'

</script>

<template>
  <main>
    <TopView id="top"></TopView>
    <AboutFossilfriFremtidView id="om-fossilfri-fremtid"></AboutFossilfriFremtidView>
    <FossilerINordsoeenView id="fossiler-i-nordsoeen"></FossilerINordsoeenView>
    <!-- <HvemStaarBagView id="hvem-staar-bag"></HvemStaarBagView> -->
    <ActivityView id="aktiviteter"></ActivityView>
    <ContactView id="kontakt"></ContactView>
  </main>
</template>

<style scoped>
main {
  padding: 0;
}
</style>
