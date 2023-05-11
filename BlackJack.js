let spieler = [];
let bank = [];

const Bube = 10;
const Dame = 10;
const König = 10;
const Ass = 11;
const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, Bube, Dame, König, Ass];
const deck_img = ["2-C.png", "3-C.png", "4-C.png", "5-C.png", "6-C.png", "7-C.png", "8-C.png", "9-C.png", "10-C.png", "J-C.png", "Q-C.png", "K-C.png", "A-C.png"]


const spielfeld_pc = document.getElementById("pc");
const spielfeld_spieler = document.getElementById("spieler");

// ziehenButton.addEventListener("click", function() {
//   karte_ziehen();
//   pruefe_spielstand();
//   pruefe_bank();
// });

function karten_austeilen() {
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    spieler.push(deck[randomIndex]); 
    deck.splice(randomIndex, 1);
    spielfeld_spieler.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
  }
  
ziehenButton.addEventListener("click", function() {
    karte_ziehen();
    pruefe_spielstand();
    pruefe_bank();
});


function karten_austeilen() {
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      deck.splice(randomIndex, 1);
      bank.push(deck[randomIndex]);
      spielfeld_pc.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
    }
  }

function karten_spieler(){
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      bank.push(deck[randomIndex]); 
      deck.splice(randomIndex, 1);
      spielfeld_pc.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
    }
}
  

function karte_ziehen() {
  const randomIndex = Math.floor(Math.random() * deck.length);
  spieler.push(deck[randomIndex]);
  deck.splice(randomIndex, 1);
  spielfeld_spieler.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
  pruefe_spielstand();
}

function pruefe_spielstand() {
  let summeSpieler = spieler.reduce((acc, val) => acc + val, 0);
  if (summeSpieler > 21) {
    console.log("Sie haben verloren. Ihre Karten haben einen Wert von " + summeSpieler);
    alert("Sie haben verloren. Ihre Karten haben einen Wert von " + summeSpieler);
    neu_beginnen();
  } else if (summeSpieler === 21) {
    alert("Sie haben GEWONNEN! Ihre Karten haben einen Wert von " + summeSpieler);
    neu_beginnen();
  } else if (summeSpieler < 21) {
    alert("Unter 21");
  }
}


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
    pruefe_bank();
  }
  if (summeBank > 18) {
    werte_vergleichen();
  }
}

function neu_beginnen() {
  spieler = [];
  bank = [];
  summeSpieler = 0;
  summeBank = 0;
  spielfeld_pc.innerHTML = "";
  spielfeld_spieler.innerHTML = "";
  document.getElementById("stand").innerHTML = "Aktueller Spielstand: " + summeSpieler;
}


function Spielstand() {
  const summeSpieler = spieler.reduce((acc, val) => acc + val, 0);
  document.getElementById("stand").innerHTML = "Aktueller Spielstand: " + summeSpieler;
}


function werte_vergleichen() {
  let summeBank = 0;
  for (let i = 0; i < bank.length; i++) {
    summeBank += bank[i];
  }

  let summeSpieler = spieler.reduce((acc, val) => acc + val, 0);

  if (summeBank > 21 || summeSpieler > summeBank) {
    alert("Sie haben gewonnen! Ihre Karten haben einen Wert von " + summeSpieler);
  } else if (summeBank === summeSpieler) {
    alert("Unentschieden! Ihre Karten haben einen Wert von " + summeSpieler);
  } else {
    alert("Sie haben verloren! Ihre Karten haben einen Wert von " + summeSpieler);
  }
}


function passen() {
  const randomIndex = Math.floor(Math.random() * deck.length);
  bank.push(deck[randomIndex]);
  deck.splice(randomIndex, 1);
  spielfeld_pc.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
}