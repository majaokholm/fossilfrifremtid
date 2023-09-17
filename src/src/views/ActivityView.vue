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
          <button href="" class="read-more-button">BORGER</button>
        </RouterLink>

        <RouterLink to="aktiviteter-virksomhed">
          <button href="" class="read-more-button">VIRKSOMHED</button>
        </RouterLink>

        <RouterLink to="aktiviteter-organisation">
          <button href="" class="read-more-button">ORGANISATION</button>
        </RouterLink>
      </div> 
      <!-- <p>Skriv en mail til <a href = "mailto: fossilfrifremtid@gmail.com">fossilfrifremtid@gmail.com</a> eller send en sms til 31 52 31 21. 
      </p>
      <br>
      <p>Vores styrke er, at vi er mange og at vi kommer med forskellige baggrunde. Der er brug for dig, lige meget om du har deltaget i en kampagne før, eller om du er helt grøn. Om du har lidt eller meget tid. Lige meget hvor du bor, din alder, etnicitet, seksualitet eller politiske overbevisning. </p>
      <br>
      <p>Kampagnen er familievenlig, hvilket betyder at vi tilstræber familievenlige aktiviteter, møder udenfor puttetid og børnepasning til fysiske møder. </p>
      <br>
      <p>Vi organiserer os i selvkørende arbejdsgrupper, som blandt andet tager sig af at lave kreative projekter, flotte videoer og billeder, snakke med politikere og erhvervsliv, sociale medier, holde hyggelige og effektive møder og meget mere. Der er altid plads til flere i arbejdsgrupperne.</p> -->
    </div>
  </div>
</template>


<style scoped>
.container-bg{
      background-color:#FFF8D8;
    }
.button-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width:100%;
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