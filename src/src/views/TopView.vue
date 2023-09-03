<template>
    <div class="view-container container-bg" style="justify-content: center;">

      <div class="content-container">
        <h1>Den danske regering vil åbne for olie- og gasudvinding i Elly-Luke-feltet.</h1>
        <h1>Fossilfri Fremtid kæmper for at stoppe det.</h1>
        <div class="button-container">
          <a href="" class="sign-proposal-button">SKRIV UNDER</a> <!--link til borgerforslag skal indsættes i href-->
          <p class="sign-proposal-button-label">Skriv under på borgerforslaget.</p>
        </div>
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