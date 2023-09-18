<template>
  <div class="view-container container-bg">
    <div>
      <h1>Bliv en del af kampagnen</h1>
      <br>
      <p>Vi ved, at vi kan lykkes med at stoppe ny fossil udvinding i Danmark. Men vi har brug for dig, for at vi kan vise politikerne, at vi er mange! 
      <br>
      <br>
      Bak op som almindelig borger, virksomhed eller organisation.
      </p>
      <br>

      <div class="button-container">
        <RouterLink to="aktiviteter-borger">
          <button href="" class="read-more-button orange-button">BORGER</button>
        </RouterLink>

        <RouterLink to="aktiviteter-virksomhed">
          <button href="" class="read-more-button orange-button">VIRKSOMHED</button>
        </RouterLink>

        <RouterLink to="aktiviteter-organisation">
          <button href="" class="read-more-button orange-button">ORGANISATION</button>
        </RouterLink>
      </div> 
    </div>
  </div>
</template>

<style scoped>
.container-bg {
  background-color: #FFF8D8;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.read-more-button {
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

/* Define the orange-button class */
.orange-button {
  background-color: #FFB48E; /* Set the background color to orange */
}
</style>