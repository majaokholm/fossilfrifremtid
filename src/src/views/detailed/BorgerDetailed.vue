<script setup lang="ts">
  window.scrollTo(0, 0);
</script>

<template>
    <div class="view-container container-bg">
      <div class="text-side-container">
      <h1>Borger</h1>

      <p>  Vil du være med til at stoppe ny fossil udvinding? Vi har brug for dig! 
      </p>
      <br> 
      <p>Skriv en mail til <a href = "mailto: tagdel@fossilfrifremtid.dk">tagdel@fossilfrifremtid.dk</a> eller send en sms til 31 52 31 21. 
      </p>
      <br>
      <p>Vores styrke er, at vi er mange og at vi kommer med forskellige baggrunde. Der er brug for dig, lige meget om du har deltaget i en kampagne før, eller om du er helt grøn. Om du har lidt eller meget tid. Lige meget hvor du bor, din alder, etnicitet, seksualitet eller politiske overbevisning. </p>
      <br>
      <p>Kampagnen er familievenlig, hvilket betyder at vi tilstræber familievenlige aktiviteter, møder udenfor puttetid og børnepasning til fysiske møder. </p>
      <br>
      <p>Vi organiserer os i selvkørende arbejdsgrupper, som blandt andet tager sig af at lave kreative projekter, flotte videoer og billeder, snakke med politikere og erhvervsliv, sociale medier, holde hyggelige og effektive møder og meget mere. Der er altid plads til flere i arbejdsgrupperne.</p>
      <!-- TODO: Link til borgerforslag (også på forsiden) -->
    
    </div>
    <div class="image-container"></div>
    </div>
  </template>
  
  <style scoped>
  .container-bg{
        background-color:#FFB48E;
      }
  .image-container{
    background-color: rgb(79, 118, 191);
    background-image: url('@/assets/ff_aarhus.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;}
  .text-side-container{
  flex-basis: 75%;
  }
  </style>