<template>
  <div class="view-container container-bg">
    <div>
      <h1>Hvad er Fossilfri Fremtid?</h1>
      <p>Fossilfri Fremtid består af børn, unge, familier og gamle fra hele Danmark, som arbejder for at stoppe ny olie- og gasproduktion.</p>
      <h2>KAMPAGNENS FORMÅL</h2>
      <h3>Mål 1</h3>
      <p>Fossilfri Fremtid arbejder først for at stoppe det nuværende olie- og gasudbud ved Elly-Luke feltet i Nordsøen.</p>
      <h3>Mål 2</h3>
      <p>Fossilfri Fremtid arbejder dernæst for at partierne bag Nordsøaftalen fra 2020 genåbner aftalen og fjerner muligheden for fremtidig fossil ekspansion.</p>
    
      <div class="button-container">
        <RouterLink to="background">
          <button href="" class="read-more-button">Baggrund</button>
        </RouterLink>
      </div>

    </div>
  </div>
</template>

<style scoped>
  h2{
    margin-bottom: 0.5em;
  }
  p{
    margin-bottom: 1em;
  }
  .container-bg{
      background-color:#FFF8D8;
    }
</style>

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