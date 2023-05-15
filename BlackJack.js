// Deklaration und Initialisierung der Konstanten für den Kartenwert
const Bube = 10;
const Dame = 10;
const König = 10;
const Ass = 11;

// Initialisierung des Kartendecks als Array mit den Kartenwerten
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

// Initialisierung des Arrays für die Kartensymbole (Bilder)
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

// Initialisierung der Arrays für Spieler- und Bankkarten
let spieler = [];
let bank = [];

// Initialisierung der Variablen für das Spielfeld (HTML-Elemente)
const spielfeld_pc = document.getElementById("pc");
const spielfeld_spieler = document.getElementById("spieler"); 

// Funktion, die beim Laden der Seite aufgerufen wird
window.onload = function() {
  document.getElementById("popup").style.display = "block";
} 

// Funktion zum Schließen des Popups
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

let summeSpieler = 0;

// Funktion zum Berechnen der Summe der Kartenwerte
function berechne_summe_karten(karten) {
  let summe = 0;
  for (let i = 0; i < karten.length; i++) {
    summe += karten[i];
  }
  return summe;
}

// Funktion zum Starten des Spiels
function spiel_starten() {
  // Zwei Karten für den Spieler ziehen
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

// Funktion zum Ziehen einer Karte durch den Spieler
function karte_ziehen() {
  // Überprüfen, ob der Spieler noch Karten hat
  if(spieler.length <= 0) return;
  // Zufällige Karte aus dem Deck ziehen
  const randomIndex = Math.floor(Math.random() * deck.length);
  spieler.push(deck[randomIndex]);
  spielfeld_spieler.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
  // Summe der Spielerkarten berechnen und Spielstand aktualisieren
  summeSpieler = berechne_summe_karten(spieler);
  Spielstand();
  // Entfernen der gezogenen Karte aus dem Deck
  deck.splice(deck.indexOf(deck[randomIndex]), 1);
  deck_img.splice(deck_img.indexOf(deck_img[randomIndex]), 1);
}

// Funktion zum Aktualisieren des Spielstands
function Spielstand() {
  // Summe der Spielerkarten berechnen
  summeSpieler = berechne_summe_karten(spieler)
  // Überprüfen, ob Spieler gewonnen, verloren oder unentschieden hat
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
  // Spielstand auf der HTML-Seite aktualisieren
  document.getElementById("stand").innerHTML = summeSpieler;
}

// Funktion zum Überprüfen des Spielstands der Bank
function pruefe_bank() {
  let summeBank = berechne_summe_karten(bank);
  let summespieler = berechne_summe_karten(spieler);
  // Überprüfen, ob die Bank gewonnen hat
  if(summeBank > 21){
    alert("Sie haben gewonnen!")
    neu_beginnen()
  }
  // Überprüfen, ob die Bank 21 erreicht hat oder eine Summe von 17 oder mehr hat
  else if (summeBank === 21 || summeBank >= 17) {
    gewinner_ermitteln(summeBank, summespieler);
  } 
  else{
    // Andernfalls Karte für die Bank ziehen
    karte_ziehen_Bank();
  } 
}

// Funktion zum Ziehen einer Karte durch die Bank
function karte_ziehen_Bank() {
  // Überprüfen, ob der Spieler noch Karten hat
  if(spieler.length <= 0) return;
  // Zufällige Karte aus dem Deck ziehen
  const randomIndex = Math.floor(Math.random() * deck.length);
  bank.push(deck[randomIndex]);
  spielfeld_pc.innerHTML += '<img src="cards/' + deck_img[randomIndex] + '">';
  // Verzögerung und anschließendes Überprüfen des Bank-Spielstands
  setTimeout(()=>{
    pruefe_bank();
  }, 1200);
  // Entfernen der gezogenen Karte aus dem Deck
  deck.splice(deck.indexOf(deck[randomIndex]), 1);
  deck_img.splice(deck_img.indexOf(deck_img[randomIndex]), 1);
}

// Funktion zur Ermittlung des Gewinners
function gewinner_ermitteln(summeBank, summeSpieler) {
  if (summeBank > summeSpieler) {
    alert(summeSpieler + " Sie haben verloren..."); // Spieler hat verloren
  } else if (summeBank < summeSpieler) {
    alert(summeSpieler + " Sie haben gewonnen!"); // Spieler hat gewonnen
  } else if (summeBank === summeSpieler) {
    alert(summeSpieler + " Unentschieden"); // Unentschieden
  }
  neu_beginnen() // Spiel neu starten
}

// Funktion zum Neustart des Spiels
function neu_beginnen() {
  spieler = [] // Leeres Array für Spielerkarten
  bank =[] // Leeres Array für Bankkarten
  // Kartendeck
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
  // Bildpfade für Kartendarstellung
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
  spielfeld_spieler.innerHTML = ''; // Leert das HTML-Element für Spielerkarten
  spielfeld_pc.innerHTML = ''; // Leert das HTML-Element für Bankkarten
  summeSpieler = 0; // Setzt die Summe der Spielerkarten auf 0 zurück
  document.getElementById("stand").innerHTML = summeSpieler; // Aktualisiert den Spielstand im HTML-Dokument
}
