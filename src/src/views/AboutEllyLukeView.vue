<template>
  <div class="view-container container-bg">
    <div>
    <h1>Hvad er Elly-Luke?</h1>
    <br>
    <p>Elly-Luke felterne ligger i Nordsøen og dækker tilsammen 160 km2. 
    Energistyrelsen har vurderet, at Elly-Luke felterne indeholder 5.2 mia. kubikmeter gas. 
    Det svarer til 2.5 gange Danmarks årlige gasforbrug og vil, hvis det bliver brændt, udlede 10.6 mio. ton CO2. 
    Det vil betyde en 50 % øgning af gasproduktionen i Danmark. </p>
    <!-- Beslut om vi vil have "læs mere" eller hele teksten flat -->
    <!-- <br>
    <p>Regeringen kalder Elly-Luke projektet for et “mini-udbud”. Faktum er, at der ikke er noget ”mini” over denne udbudsrunde. Åbningen af dette felt vil få katastrofalt store konsekvenser.</p>
    <br>
    <p>Elly-Luke-feltet er også et kendt risikabelt projekt, i forhold til hvor rentabelt det ville være at udvinde gas og olie. Flere selskaber har opgivet området af økonomiske årsager. 
    Desuden vil den energi, der vil blive brugt på at udvinde gas fra området, udlede 400.000 ton CO2. </p>
    <br>
    <p>Vi har ikke råd til at indvinde ny fossil energi. Hverken økonomisk eller klimamæssigt.
    Fossilfri Fremtid arbejder for at stoppe Elly-Luke projektet fra at blive en realitet og stoppe alle fremtidige fossile projekter i Nordsøen. 
    Læs ministeriets egen tekniske gennemgang af udbudsrunden <a href="https://www.ft.dk/samling/20222/almdel/KEF/bilag/261/2696582.pdf">her</a>.
    </p> -->

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
      background-color:#FFF8D8;
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