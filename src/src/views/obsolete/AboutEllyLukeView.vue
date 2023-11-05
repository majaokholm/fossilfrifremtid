<template>
  <div class="view-container container-bg">
    <div>
    <h1>Hvad er Elly-Luke?</h1>
    <br>
    <p>Elly-Luke felterne ligger i Nordsøen og dækker tilsammen 160 km2. 
    Energistyrelsen har vurderet, at Elly-Luke felterne indeholder 5.2 mia. kubikmeter gas. 
    Det svarer til 2.5 gange Danmarks årlige gasforbrug og vil, hvis det bliver brændt, udlede 10.6 mio. ton CO2. 
    Det vil betyde en 50 % øgning af gasproduktionen i Danmark. </p>

    <div class="button-container">
         <RouterLink to="om-elly-luke">
          <a href="/om-elly-luke" class="read-more-link">Læs mere</a>
        </RouterLink>
    </div>

    </div>
  </div>
</template>

<style scoped>
.main-heading {
   /* Styrer afstand mellem h1 header og tekst nedenunder*/
  margin-bottom: 0.5em;
}

h2 {
  margin-bottom: 0.5em;
}

p {
  margin-bottom: 1em;
}

.container-bg {
  background-color: #FFF8D8;
}

.read-more-link {
  text-decoration: underline; /* Underline the text */
  font-weight: bold; /* Make the text bold */
  font-size: 1.25em;
  color: black;
  cursor: pointer;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  display: inline-block; /* Ensure it behaves like a block-level element */
}
</style>