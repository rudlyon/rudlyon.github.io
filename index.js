const container = document.getElementById("container");
const button = document.getElementById("button");
const de = document.getElementById("de");


const rollDice = () => {
  const result = (Math.floor(Math.random() * 6)) + 1;
  console.log(result);
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
}

const lancer = () => {
  button.addEventListener("click", (e) => 
      
      (rollDice()));
  
}

lancer()
