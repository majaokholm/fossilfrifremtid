<script setup lang="ts">
  window.scrollTo(0, 0);
</script>

<template>
  <div class="view-container container-bg">
    <div class="outer-content">
      <div class="inner-content">
        <!-- Text on the left -->
      <div class="text">
        <h1>Hvad er Elly-Luke?</h1>
        <br>
        <p>Elly-Luke felterne ligger i Nordsøen og dækker tilsammen 160 km2. 
        Energistyrelsen har vurderet, at Elly-Luke felterne indeholder 5.2 mia. kubikmeter gas. 
        Det svarer til 2.5 gange Danmarks årlige gasforbrug og vil, hvis det bliver brændt, udlede 10.6 mio. ton CO2. 
        Det vil betyde en 50 % øgning af gasproduktionen i Danmark.</p>
        <br>
        <p>Regeringen kalder Elly-Luke projektet for et “mini-udbud”. Faktum er, at der ikke er noget ”mini” over denne udbudsrunde. Åbningen af dette felt vil få katastrofalt store konsekvenser.</p>
        <br>
        <p>Elly-Luke-feltet er også et kendt risikabelt projekt, i forhold til hvor rentabelt det ville være at udvinde gas og olie. Flere selskaber har opgivet området af økonomiske årsager. 
        Desuden vil den energi, der vil blive brugt på at udvinde gas fra området, udlede 400.000 ton CO2.</p>
        <br>
        <p>Vi har ikke råd til at indvinde ny fossil energi. Hverken økonomisk eller klimamæssigt.
        Fossilfri Fremtid arbejder for at stoppe Elly-Luke projektet fra at blive en realitet og stoppe alle fremtidige fossile projekter i Nordsøen. 
        Læs ministeriets egen tekniske gennemgang af udbudsrunden <a href="https://www.ft.dk/samling/20222/almdel/KEF/bilag/261/2696582.pdf">her</a>.
        </p>
      </div>
      <!-- Image on the right -->
      <div class="image">
        <img src="@/assets/ellyluke.png" alt="Image Alt Text">
        <!-- Image Description Text -->
        <p class="image-description">Eksisterende olie- og gasfelter (blå) og Elly-Luke (rød). Kilde: <a href = "https://ens.dk/presse/miniudbud-til-efterforskning-og-indvinding-i-et-afgraenset-omraade-i-nordsoeen">ens.dk</a> </p>
      </div>
      </div>
      <div class="image-container"></div>
    </div>
  </div>
</template>

<style scoped>
.container-bg {
  background-color: #FFF8D8;
}

.outer-content {
  display: flex;
  flex-direction: column; /* Keep the order of text and image */
}

.inner-content {
  display: flex;
  flex-direction: row; /* Keep the order of text and image */
  flex-wrap: wrap;
  align-items: center; /* Vertically center content */
}

.text {
  flex: 1; /* Allow the text to take up remaining space */
  min-width: 40%;
  padding: 100px 2em 2em;
}

.image {
  margin-left: 20px; /* Adjust the margin to create space between text and image */
  display: flex; /* Enable flex layout for the image and description */
  flex-direction: column; /* Stack image and description vertically */
  align-items: center; /* Center items horizontally */
}

.image img {
  max-width: 100%; /* Ensure the image doesn't exceed its container width */
}

.image-container{
  background-color: rgb(79, 118, 191);
  background-image: url('@/assets/banner_stop_Elly_Luke.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
}

.image-description {
  font-size: 14px; /* Adjust the font size as needed */
  margin-top: 10px; /* Add top margin for spacing */
  text-align: center; /* Align the text in the center */
}

/* Additional styling for responsiveness if needed */
@media (max-width: 768px) {
  .content {
    flex-direction: column; /* Change to a vertical layout on smaller screens */
  }

  .image {
    margin-left: 0; /* Reset the margin for vertical layout */
    margin-top: 20px; /* Add top margin for spacing */
  }

  .image-container{
    margin-top: 50px;
  }

  .inner-content{
    flex-direction: column;
  }
}
</style>