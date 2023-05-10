const Bube = 10;
const Dame = 10;
const König = 10;
const Ass = 11;
const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, Bube, Dame, König, Ass];
const deck_img = ["2-C.png", "3-C.png", "4-C.png", "5-C.png", "6-C.png", "7-C.png", "8-C.png", "9-C.png", "10-C.png", "J-C.png", "Q-C.png", "K-C.png", "A-C.png"]


const spielfeld_pc = document.getElementById("pc");
const spielfeld_spieler = document.getElementById("spieler");

ziehenButton.addEventListener("click", function() {
  karte_ziehen();
  pruefe_spielstand();
  pruefe_bank();
});

let spieler = [];
let bank = [];
 
function karten_austeilen() {

    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      spieler.push(deck[randomIndex]);
      deck.splice(randomIndex, 1);
      spielfeld_pc.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
    }
  
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      bank.push(deck[randomIndex]);
      deck.splice(randomIndex, 1);
      spieler.push(deck[randomIndex]);
      spielfeld_spieler.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
    }
  }

function karte_ziehen() {
  const randomIndex = Math.floor(Math.random() * deck.length);
  spieler.push(deck[randomIndex]);
  deck.splice(randomIndex, 1);
  spielfeld_pc.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
}

function pruefe_spielstand() {
    let summeSpieler = 0;
    for (let i = 0; i < spieler.length; i++) {
      summeSpieler += spieler[i];
    }
    if (summeSpieler > 21) {
      console.log("Sie haben verloren. Ihre Karten haben einen Wert von " + summeSpieler);
      alert("Sie haben verloren. Ihre Karten haben einen Wert von " + summeSpieler);
    } else if (summeSpieler === 21) {
      console.log("Sie haben GEWONNEN! Ihre Karten haben einen Wert von " + summeSpieler);
      alert("Sie haben GEWONNEN! Ihre Karten haben einen Wert von " + summeSpieler);
    } else if (summeSpieler < 21) {
      console.log("Unter 21. Möchten Sie eine weitere Karte ziehen?");
      let ziehen = confirm("Ihr aktueller Spielstand ist " + summeSpieler + ". Möchten Sie eine weitere Karte ziehen?");
      if (ziehen) {
        karte_ziehen();
        pruefe_spielstand();
      }
    }
  }

function karte_ziehen_Bank() {
  const randomIndex = Math.floor(Math.random() * deck.length);
  bank.push(deck[randomIndex]);
  deck.splice(randomIndex, 1);
  spielfeld_pc.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
}

function pruefe_bank() {
  let summeBank = 0;
  for (let i = 0; i < bank.length; i++) {
    summeBank += bank[i];
  }
  if (summeBank < 18) {
    karte_ziehen_Bank();
    pruefe_spielstand();
  }
}

function neu_beginnen() {
  spieler = [];
  bank = [];
  karten_austeilen();
}

