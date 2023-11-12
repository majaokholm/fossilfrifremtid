<template>
    <div class="view-container container-bg">
      <div>
      <h1>Fossiler i Nordsøen</h1>
      <br>
      <p>Den danske del af Nordsøen rummer <a target="_blank" href="https://klimamonitor.dk/nyheder/art9534101/Underskudsforretning-at-suge-Nords%C3%B8ens-sidste-lommer-af-sort-energi-op-sp%C3%A5r-eksperter?shareToken=SbpCtFABDTqQ">139 millioner kubikmeter olie og 77 milliarder kubikmeter gas</a>
         - sorte brændsler, som forværrer den globale opvarmning, hvis vi afbrænder dem. Derfor vedtog et bredt flertal i Folketinget i 2020 Nordsøaftalen. 
        Den sætter et stop for yderligere udvinding efter 2050 og lover også et stop alle fremtidige udbudsrunder i den danske del af Nordsøen. 
        Men i 2023 havde det norske fossilselskab BlueNord nær fået boretilladelse alligevel i Elly-Luke-feltet. De ansøgte nemlig uopfordret, og regeringen kunne 
        derfor udnytte et smuthul i Nordsøaftalen til at oprette et såkaldt "miniudbud". Efter stor offentlig bevågenhed (ikke mindst takket være os) trak BlueNord sin 
        ansøgning, og udbuddet endte uden andre ansøgere. Men smuthullet i Nordsøaftalen findes stadig, og der er allerede andre ekspansionsplaner i Nordsøen. 
    </p>
  
      <div class="button-container">
           <RouterLink to="om-elly-Luke">
            <a href="/om-elly-Luke" class="read-more-link">Læs mere</a>
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