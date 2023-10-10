<template>
  <div class="view-container">
    <div class="filter-container">
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
  </div>
</template>

<style scoped>
.view-container{
  background-image: url('@/assets/frontpage_image.jpg');
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
  padding: 180px 4em 4em;
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
