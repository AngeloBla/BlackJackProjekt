const Bube = 10;
const Dame = 10;
const König = 10;
const Ass = 11;
let deck = [
  4,  4,  4,  4,
  5,  5,  5,  5,
  6,  6,  6,  6,
  7,  7,  7,  7,
  8,  8,  8,  8,
  9,  9,  9,  9,
  11,  11,  11,  11,
  10,  10,
  10,   10,  10,
  10,  10,  10,  10,
  10,  10,  10
];
let deck_img = [
  '4-C.png',  '4-D.png',  '4-H.png',  '4-S.png',
  '5-C.png',  '5-D.png',  '5-H.png',  '5-S.png',
  '6-C.png',  '6-D.png',  '6-H.png',  '6-S.png',
  '7-C.png',  '7-D.png',  '7-H.png',  '7-S.png',
  '8-C.png',  '8-D.png',  '8-H.png',  '8-S.png',
  '9-C.png',  '9-D.png',  '9-H.png',  '9-S.png',
  'A-C.png',  'A-D.png',  'A-H.png',  'A-S.png',
  'J-C.png',  'J-D.png',
  'J-H.png',   'J-S.png',  'K-C.png',
  'K-D.png',  'K-H.png',  'K-S.png',  'Q-C.png',
  'Q-D.png',  'Q-H.png',  'Q-S.png'
]

let spieler = [];
let bank = [];

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
    spieler.push(deck[randomIndex]);
    spielfeld_spieler.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
    deck.splice(deck.indexOf(deck[randomIndex]), 1);
    deck_img.splice(deck_img.indexOf(deck_img[randomIndex]), 1);
  }
  
  const randomIndex2 = Math.floor(Math.random() * deck.length);
  bank.push(deck[randomIndex2]);
  spielfeld_pc.innerHTML += '<img src="cards/' + deck_img[randomIndex2] + '">';
  summeSpieler = berechne_summe_karten(spieler);
  Spielstand();
  deck.splice(deck.indexOf(deck[randomIndex2]), 1);
  deck_img.splice(deck_img.indexOf(deck_img[randomIndex2]), 1);
}  

function karte_ziehen() {
  if(spieler.length <= 0) return;
  const randomIndex = Math.floor(Math.random() * deck.length);
  spieler.push(deck[randomIndex]);
  spielfeld_spieler.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
  summeSpieler = berechne_summe_karten(spieler);
  Spielstand();
  deck.splice(deck.indexOf(deck[randomIndex]), 1);
  deck_img.splice(deck_img.indexOf(deck_img[randomIndex]), 1);
}


function Spielstand() {
  summeSpieler = berechne_summe_karten(spieler)
  if (summeSpieler > 21) {
    alert("Sie haben verloren. Ihre Karten haben einen Wert von " + summeSpieler);
    setTimeout(()=>{
      neu_beginnen();
      }, 2200);  
  } else if (summeSpieler === 21) {
    alert("Sie haben GEWONNEN! Ihre Karten haben einen Wert von " + summeSpieler);
    setTimeout(()=>{
      neu_beginnen();
    }, 2200);  
  }

  document.getElementById("stand").innerHTML = summeSpieler;
}


function pruefe_bank() {
  let summeBank = berechne_summe_karten(bank);
  let summespieler = berechne_summe_karten(spieler);
  if(summeBank > 21){
    alert("Sie haben gewonnen!")
    neu_beginnen()
  }
  else if (summeBank === 21 || summeBank >= 17) {
    gewinner_ermitteln(summeBank, summespieler);
  } 
  else{
    karte_ziehen_Bank();
  } 
}

function karte_ziehen_Bank() {
  if(spieler.length <= 0) return;
  const randomIndex = Math.floor(Math.random() * deck.length);
  bank.push(deck[randomIndex]);
  spielfeld_pc.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
  setTimeout(()=>{
    pruefe_bank();
  }, 1200);
  deck.splice(deck.indexOf(deck[randomIndex]), 1);
  deck_img.splice(deck_img.indexOf(deck_img[randomIndex]), 1);
}


function gewinner_ermitteln(summeBank, summeSpieler) {
  if (summeBank > summeSpieler) {
    alert(summeSpieler + " Sie haben verloren...");
  } else if (summeBank < summeSpieler) {
    alert(summeSpieler + " Sie haben gewonnen!");
  } else if (summeBank === summeSpieler) {
    alert(summeSpieler + " Unentschieden");
  }
  neu_beginnen()
}

function neu_beginnen() {
  spieler = []
  bank =[]
  deck = [
    4,  4,  4,  4,
    5,  5,  5,  5,
    6,  6,  6,  6,
    7,  7,  7,  7,
    8,  8,  8,  8,
    9,  9,  9,  9,
    11,  11,  11,  11,
    10,  10,
    10,   10,  10,
    10,  10,  10,  10,
    10,  10,  10
  ];
  deck_img = [
    '4-C.png',  '4-D.png',  '4-H.png',  '4-S.png',
    '5-C.png',  '5-D.png',  '5-H.png',  '5-S.png',
    '6-C.png',  '6-D.png',  '6-H.png',  '6-S.png',
    '7-C.png',  '7-D.png',  '7-H.png',  '7-S.png',
    '8-C.png',  '8-D.png',  '8-H.png',  '8-S.png',
    '9-C.png',  '9-D.png',  '9-H.png',  '9-S.png',
    'A-C.png',  'A-D.png',  'A-H.png',  'A-S.png',
    'J-C.png',  'J-D.png',
    'J-H.png',   'J-S.png',  'K-C.png',
    'K-D.png',  'K-H.png',  'K-S.png',  'Q-C.png',
    'Q-D.png',  'Q-H.png',  'Q-S.png'
  ]
  spielfeld_spieler.innerHTML = ''; 
  spielfeld_pc.innerHTML = ''; 
  summeSpieler = 0; 
  document.getElementById("stand").innerHTML = summeSpieler;
}
