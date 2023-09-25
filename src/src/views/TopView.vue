<template>
  <div class="view-container">
    <div class="background-container">
      <img src="@/assets/frontpage_image.jpg" alt="Background Image" />
    </div>
    <div class="content-container">
      <div class="text-container">
        <h1 class="white-text large-text">Den danske regering vil åbne for ny olie- og gasudvinding i Elly-Luke-feltet.</h1>
        <h1 class="white-text large-text">Vi kæmper for at stoppe det.</h1>
      </div>

      <div class="button-container">
        <v-btn
          class="tall-button"
          color="yellow darken-2"
          dark
          href="https://www.borgerforslag.dk/se-og-stoet-forslag/?Id=FT-15740"
          target="_blank"
          rel="noopener noreferrer"
          large
        >
          <span style="color: black;">SKRIV UNDER PÅ BORGERFORSLAGET</span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-container {
  position: absolute;
  top: 75px;
  left: 0;
  width: 100%;
  height: calc(100% - 75px);
  background-color: black;
}

.background-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
  object-fit: cover;
}

.content-container {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
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
