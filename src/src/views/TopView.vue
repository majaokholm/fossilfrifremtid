<template>
  <div class="view-container">

    <div class="text-container">
      <h1 class="white-text large-text">Ikke flere olie- og gasfelter i Nordsøen</h1>
      <h1 class="white-text large-text">Stop Hejre-feltet</h1>
      <h1 class="white-text large-text">Hold din del af aftalen, Mette</h1>
    </div>

    <div class="button-container">      
      <v-btn
        class="tall-button"
        color="yellow darken-2"
        dark
        href="/om-hejre"
        rel="noopener noreferrer"
        size="medium"
      >
        <span style="color: black;">Fakta om Hejrefeltet</span>
      </v-btn>
      <v-btn
        class="tall-button"
        color="yellow darken-2"
        dark
        href="https://www.dr.dk/nyheder/viden/klima/danmark-kraever-stop-olie-og-gas-paa-klimatopmoedet-men-vi-slukker-ikke-vores"
        target="_blank"
        rel="noopener noreferrer"
        size="medium"
      >
        <span style="color: black;">ARTIKEL OM HEJREFELTET PÅ DR.DK</span>
      </v-btn>  
      <v-btn
        class="tall-button"
        color="yellow darken-2"
        dark
        href="https://www.dgub.dk/blog/der-er-et-nyt-stort-oliefelt-pa-vej-i-nordsoen-og-det-skal-stoppes"
        target="_blank"
        rel="noopener noreferrer"
        size="medium"
      >
        <span style="color: black;">NYT OLIEFELT PÅ VEJ I NORDSØEN</span>
      </v-btn>  
      <v-btn
        class="tall-button"
        color="yellow darken-2"
        dark
        href="https://www.instagram.com/fossilfrifremtid/"
        target="_blank"
        rel="noopener noreferrer"
        size="medium"
      >
        <span style="color: black;">FOSSILFRI FREMTID PÅ INSTAGRAM</span>
      </v-btn>   
    </div>        
  </div>
</template>

<style scoped>
.view-container{
  background-image: url('@/assets/frontpage_image_web_shade.jpg');
  background-size: cover;
  backdrop-filter: brightness(0.5);
  min-width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-container {  
  margin-top: 50px;
  text-align: center;
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
  display: flex;
  flex-direction: column;
}

.tall-button {
  height: 60px !important;
  margin-bottom: 20px;
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
