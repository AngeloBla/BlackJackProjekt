const Bube = 10;
const Dame = 10;
const König = 10;
const Ass = 11;
const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, Bube, Dame, König, Ass];
const deck_img = ["2-C.png", "3-C.png", "4-C.png", "5-C.png", "6-C.png", "7-C.png", "8-C.png", "9-C.png", "10-C.png", "J-C.png", "Q-C.png", "K-C.png", "A-C.png"]

const spieler = [];
const bank = [];

const spielfeld_pc = document.getElementById("pc");
const spielfeld_spieler = document.getElementById("spieler");

window.onload = function() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

let summeSpieler = 0;

function berechne_summe_karten(karten) {
  let summe = 0;
  for (let i = 0; i < karten.length; i++) {
    summe += karten[i];
  }
  return summe;
}


function spiel_starten() {
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    deck.splice(randomIndex, 1);
    spieler.push(deck[randomIndex]);
    spielfeld_spieler.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
  }
  const randomIndex = Math.floor(Math.random() * deck.length);
  deck.splice(randomIndex, 1);
  bank.push(deck[randomIndex]);
  spielfeld_pc.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';  //Möglicher Konflikt mit +?
  summeSpieler = berechne_summe_karten(spieler);
  Spielstand();
}  

function karte_ziehen() {
  const randomIndex = Math.floor(Math.random() * deck.length);
  spieler.push(deck[randomIndex]);
  deck.splice(randomIndex, 1);
  spielfeld_spieler.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
  summeSpieler = berechne_summe_karten(spieler);
  Spielstand();
}


function Spielstand() {
  if (summeSpieler > 21) {
    alert("Sie haben verloren. Ihre Karten haben einen Wert von " + summeSpieler);
  } else if (summeSpieler === 21) {
    alert("Sie haben GEWONNEN! Ihre Karten haben einen Wert von " + summeSpieler);
  } else if (summeSpieler < 21) {
    alert(summeSpieler + " Möchten Sie eine weitere Karte ziehen?");
  }
  document.getElementById("stand").innerHTML = summeSpieler;
}


function passen() {
  pruefe_bank();
}


function pruefe_bank() {
  let summeBank = berechne_summe_karten(bank);
  if(summeBank > 21){
    alert("Sie haben gewonnen!")
  }
  else if (summeBank === 21) {
    gewinner_ermitteln(summeBank, summeSpieler);
  } 
  else if (summeBank < 17) {
    karte_ziehen_Bank();
    pruefe_bank();
  } 
  else if (summeBank > 17) {
    gewinner_ermitteln(summeBank, summeSpieler);
  }
}

function karte_ziehen_Bank() {
  const randomIndex = Math.floor(Math.random() * deck.length);
  bank.push(deck[randomIndex]);
  deck.splice(randomIndex, 1);
  spielfeld_pc.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
  pruefe_bank();
}


function gewinner_ermitteln(summeBank, summeSpieler) {
  if (summeBank > summeSpieler) {
    alert(summeSpieler + " Sie haben verloren...");
  } else if (summeBank < summeSpieler) {
    alert(summeSpieler + " Sie haben gewonnen!");
  } else if (summeBank === summeSpieler) {
    alert(summeSpieler + " Unentschieden");
  }
}

function neu_beginnen() {
  spieler.length = 0; 
  bank.length = 0; 
  deck.length = 13; 
  spielfeld_spieler.innerHTML = ''; 
  spielfeld_pc.innerHTML = ''; 
  summeSpieler = 0; 
  document.getElementById("stand").innerHTML = summeSpieler;
}
