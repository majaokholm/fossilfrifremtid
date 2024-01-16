<template>
  <div class="view-container">
    <div class="filter-container">
    <div class="content-container">
      <div class="text-container">
        <h1 class="white-text large-text">Ikke flere olie- og gasfelter i Nordsøen</h1>
        <h1 class="white-text large-text">Stop Hejre-feltet</h1>
        <h1 class="white-text large-text">Hold din del af aftalen, Mette</h1>
      </div>

      <!-- <RouterLink to="om-hejre">
            <a href="/om-hejre" class="read-more-link">Luk oliefeltet Hejre</a>
          </RouterLink><br> -->

    <RouterLink to="om-hejre">
      <div class="button-container">
        <v-btn
          class="tall-button"
          color="yellow darken-2"
          dark
          href="/om-hejre"
          rel="noopener noreferrer"
          size="x-large"
        >
          <span style="color: black;">FAKTA OM HEJREFELTET</span>
        </v-btn>   
      </div>
    </RouterLink>
    <div class="button-container">
        <v-btn
          class="tall-button"
          color="yellow darken-2"
          dark
          href="https://www.dr.dk/nyheder/viden/klima/danmark-kraever-stop-olie-og-gas-paa-klimatopmoedet-men-vi-slukker-ikke-vores"
          target="_blank"
          rel="noopener noreferrer"
          size="x-large"
        >
          <span style="color: black;">ARTIKEL OM HEJREFELTET PÅ DR.DK</span>
        </v-btn>   
      </div>
      <div class="button-container">
        <v-btn
          class="tall-button"
          color="yellow darken-2"
          dark
          href="https://www.dgub.dk/blog/der-er-et-nyt-stort-oliefelt-pa-vej-i-nordsoen-og-det-skal-stoppes"
          target="_blank"
          rel="noopener noreferrer"
          size="x-large"
        >
          <span style="color: black;">DER ER ET NYT STORT OLIEFELT PÅ VEJ I NORDSØEN</span>
        </v-btn>   
      </div>
      <div class="button-container">
        <v-btn
          class="tall-button"
          color="yellow darken-2"
          dark
          href="https://www.instagram.com/fossilfrifremtid/"
          target="_blank"
          rel="noopener noreferrer"
          size="x-large"
        >
          <span style="color: black;">VORES INSTAGRAM</span>
        </v-btn>   
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.view-container{
  background-image: url('@/assets/frontpage_image_web_shade.jpg');
  background-size: cover;
  padding: 0;
  display: block;
  position: relative;
}

.filter-container{
  height: 100%;
  width: 100%;
  backdrop-filter: brightness(0.5);
  display: flex;
  position: absolute;
}

.content-container {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-container {
  padding: 20px;
}

.text-container .white-text {
  color: white;
}

.large-text {
  font-size: 3rem;
  margin: 20px 0;
}

.button-container {
  margin-top: 20px;
}

.tall-button {
  height: 60px !important;
}

/* Responsive CSS */
@media (max-width: 768px) {
  .text-container {
    padding: 10px;
  }

  .large-text {
    font-size: 2rem;
  }

  .tall-button {
    height: 50px !important;
  }
}
</style>
