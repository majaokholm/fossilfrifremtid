<template>
  <div class="view-container container-bg" id="om-fossilfri-fremtid">
    <div class="text-side-container" >
      <h1 class="main-heading">Hvad er Fossilfri Fremtid?</h1>
      <p>Fossilfri Fremtid er en kampagne og en social bevægelse med en divers gruppe af borgere, der kæmper for en fremtid, hvor fossile brændsler bliver i jorden 
      i overensstemmelse med den gældende klimaforskning og internationale aftaler. Kampagnens styrke er bredden af borgere og aktiviteter, der giver os mange strenge at spille på. 
      Over 200 aktive på tværs af 15+ arbejdsgrupper laver alt fra politisk lobbyarbejde, online kommunikation, familievenlige kreaværksteder til korsang med det formål at aktivere 
      og mobilisere så bred en folkelig base som muligt, skabe opmærksomhed om fossil produktion i Nordsøen og lægge maksimalt pres på regeringen og forligspartierne bag Nordsøaftalen.
    </p>
        
      <p>Fossilfri Fremtid har allerede haft sin første sejr: Civilt pres fik lukket 
      gasfeltet Elly-Luke. Det næste store mål er at få lukket smuthullerne i Nordsøaftalen, der muliggør fossil ekspansion i Nordsøen indtil 2050. Sideløbende vil 
      Fossilfri Fremtid forsøge at blokere allerede planlagt fossil ekspansion i Nordsøen, f.eks. Hejrefeltet, ved at udnytte de erfaringer, vi fik fra arbejdet med 
      at stoppe Elly-Luke.</p>

      <br> 
      <h2>Læs mere om vores målsætninger</h2><br>
        <RouterLink to="om-elly-Luke">
            <a href="/om-elly-luke" class="read-more-link">Luk gasfeltet Elly-Luke <span style="color: green">✔</span></a>
          </RouterLink><br>
          <RouterLink to="om-nordsoeaftalen">
            <a href="/om-nordsoeaftalen" class="read-more-link">Få lukket smuthullerne i Nordsøaftalen</a>
          </RouterLink><br>
          <RouterLink to="om-hejre">
            <a href="/om-hejre" class="read-more-link">Luk oliefeltet Hejre</a>
          </RouterLink><br>
    
      <!-- <div class="button-container">
         <RouterLink to="background">
          <a href="/background" class="read-more-link">Læs mere</a>
        </RouterLink>
      </div> -->

    </div>
    <div class="image-container">
     
    </div>
  </div>
  <div>

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
.container-bg {
  background-color: #FFB48E;
}

.image-container{
  background-color: rgb(79, 118, 191);
  background-image: url('@/assets/FossilfriFremtid_waves.jpg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>