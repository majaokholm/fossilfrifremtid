<template>
  <div class="view-container container-bg">
    <div class="image-container left-side-image">
     
    </div>
    <div class="text-side-container">
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
          <v-btn
            class="tall-button"
            color="yellow darken-2"
            dark
            href=""
            target="_blank"
            rel="noopener noreferrer"
            size="x-large"
          >
          <span style="color: black;">BORGER</span>
          </v-btn>
        </RouterLink>

        <RouterLink to="aktiviteter-virksomhed">
          <!-- <button href="" class="read-more-button orange-button">VIRKSOMHED</button> -->
          <v-btn
            class="tall-button"
            color="yellow darken-2"
            dark
            href=""
            target="_blank"
            rel="noopener noreferrer"
            size="x-large"
          >
          <span style="color: black;">VIRKSOMHED</span>
          </v-btn>
        </RouterLink>

        <RouterLink to="aktiviteter-organisation">
          <!-- <button href="" class="read-more-button orange-button">ORGANISATION</button> -->
          <v-btn
            class="tall-button"
            color="yellow darken-2"
            dark
            href=""
            target="_blank"
            rel="noopener noreferrer"
            size="x-large"
          >
          <span style="color: black;">ORGANISATION</span>
          </v-btn>
        </RouterLink>
      </div> 
    </div>
  </div>
</template>

<style scoped>
.container-bg {
  background-color: #FFB48E;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
}

.image-container{
  background-image: url('@/assets/frontpage_image_min.jpg');
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

.tall-button {
  height: 60px !important;
}

/* Define the orange-button class */
.orange-button {
  background-color: #FFB48E; /* Set the background color to orange */
}
</style>