<template>
    <!-- <div class="view-container container-bg" style="justify-content: center;"> -->

    <div class="view-container">
      <div class="background-container">
  
          <img src="@/assets/frontpage_image.jpg" alt="Background Image" />
      </div>
      <div class="content-container">
        <div class="text-container">
        <h1  class="white-text large-text">Den danske regering vil åbne for ny olie- og gasudvinding i Elly-Luke-feltet.</h1>
        <h1  class="white-text large-text">Vi kæmper for at stoppe det.</h1>
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
  top: 75px; /* Adjust the top position to start below 150 pixels */
  left: 0;
  width: 100%;
  height: calc(100% - 75px); /* Adjust the height to exclude the top 150 pixels */
  background-color: black; /* Background color for the non-image area */
}
.background-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5); /* Darken the background image */
  object-fit: cover; /* Ensure the image covers the container */
}

.content-container {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  /* pointer-events: none; Prevent clicks on the background image */
  z-index: 1; /* Place it above the background image */
}
/* Manage text position - bit funky padding*/
.text-container {
  padding: 20px;
}

.text-container .white-text {
  color: white; /* Set text color to white */
}
/* Make main text larger */
.large-text {
  font-size: 3rem; /* Adjust the font size as needed */
  margin: 20px 0; /* Add margin to the top and bottom */
}

/* Make borgerforslag button larger (more height) */
.button-container {
  margin-top: 20px;
  z-index: 3; /* Ensure the button is on top of text */
}
/* HACK Use the !important rule to override other styles */
.tall-button {
  height: 60px !important; /* Adjust the height as needed */
}

  </style>