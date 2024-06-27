// Variables

const container = document.getElementById("container");
const button = document.getElementById("button");
const image = document.getElementById("image-source");
const nouvelleImage = document.getElementById("nouvelle-image");
const containerImg = document.getElementById("container-img");
let resultat = 0;

//fonctions gain pot

const ramasse = () => {
  button.style.opacity = "20%";
  container.style.opacity = "20%";
  document.body.style.background =
    "no-repeat center url('/assets/vague-picsou.gif')";
  document.body.style.backgroundSize = "cover";
  document.getElementById("h1").innerHTML = "RAMASSE LE POT !";
};

const retour = () => {
  button.style.opacity = "50%";
  container.style.opacity = "70%";
  document.body.style.background = "no-repeat center url('/assets/picsou.jpg')";
  document.getElementById("h1").innerHTML = "DÉ SPÉCIAL BONNE PAYE";
};

// fonction dom

const rollDice = () => {
  const result = Math.floor(Math.random() * 6) + 1;
  resultat = result;
  const n = result;
  switch (n) {
    case 1:
      container.innerHTML = `
      <div class="container-un">
        <span class="un"></span>
      <div/>`;
      break;

    case 2:
      container.innerHTML = `
      <div class="container-deux">
          <span class="deux1"></span>
          <span class="deux2"></span>
      </div>`;
      break;

    case 3:
      container.innerHTML = `
      <div class="container-trois">
        <span class="trois1"></span>
        <span class="trois2"></span>
        <span class="trois3"></span>
      </div>`;
      break;

    case 4:
      container.innerHTML = `
        <div class="container-quatre">
          <span class="quatre1"></span>
          <span class="quatre2"></span>
          <span class="quatre3"></span>
          <span class="quatre4"></span>
      </div>`;
      break;

    case 5:
      container.innerHTML = `
        <div class="container-cinq" id="container-cinq">
          <span class="cinq1"></span>
          <span class="cinq2"></span>
          <span class="cinq3"></span>
          <span class="cinq4"></span>
          <span class="cinq5"></span> 
        </div>`;
      break;

    case 6:
      container.innerHTML = `
        <div class="container-six" id="container-six">
          <span class="six1"></span>
          <span class="six2"></span>
          <span class="six3"></span>
          <span class="six4"></span>
          <span class="six5"></span>
          <span class="six6"></span>
        </div>`;
      break;
  }
};

const lancer = () => {
  const interval = setInterval(rollDice, 200);
  setTimeout(() => {
    clearInterval(interval);
    button.disabled = false;
    if (resultat === 6) {
      ramasse();
      setTimeout(() => {
        retour();
      }, 10000);
    }
  }, 1000);
  button.disabled = "true";
};

button.addEventListener("click", (e) => lancer());
