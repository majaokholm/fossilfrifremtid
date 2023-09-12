<template>
    <div class="view-container container-bg" style="justify-content: center;">

      <div class="content-container">
        <h1>Den danske regering vil åbne for ny olie- og gasudvinding i Elly-Luke-feltet.</h1>
        <h1>Fossilfri Fremtid kæmper for at stoppe det.</h1>
        <br>
        <p>Hvis vi vil sikre et beboeligt klima i fremtiden, kan vi ikke tillade nye olie og gas projekter. </p>
        <br>

        <p>Her på siden kan du læse mere om Elly-Luke-feltet, Fossilfri Fremtid, og hvad du kan gøre for at være med.</p>

        <!-- TODO: Indsæt borgerforslag i href -->
        <div class="button-container">
          <a href="" class="sign-proposal-button">SKRIV UNDER</a>
          <p class="sign-proposal-button-label">Skriv under på borgerforslaget.</p>
        </div>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

        <p>Instagram: <a href = "https://www.instagram.com/fossilfrifremtid/">fossilfrifremtid IG</a></p>
        <p>Facebook: <a href = "https://www.facebook.com/profile.php?id=61550554145147">fossilfrifremtid FB</a></p>
        <p>Telefon: 31 52 31 21</p>
        <p>E-mail: <a href = "mailto: fossilfrifremtid@gmail.com">fossilfrifremtid@gmail.com</a></p>

      </div>


  
    </div>
  </template>
  
  <style scoped>
    .button-container{
      display: none; /* udkommentér, når borgerforslaget er oppe og link er indsat */
      margin-top: 4em;
    }
    .content-container{
      text-align: center;
    }
    .sign-proposal-button{
      -webkit-appearance: button;
      -moz-appearance: button;
      appearance: button;
      border: 2px solid black;
      border-radius: 2em;
      margin-bottom: 2em;
      color: black;
      cursor: pointer;
      font-size: 2em;
      font-weight: bold;
      flex-wrap: nowrap;
      padding: 1em;
    }
    .sign-proposal-button-label{
      margin-top: 2em;
    }
    .container-bg{
      background-color:lightblue;
    }
  </style>