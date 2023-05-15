# BlackJackProjekt
 
Blackjack-Spiel
Dieses Projekt ist eine einfache Implementierung des Blackjack-Spiels in JavaScript. Es ermöglicht dem Benutzer, gegen den Computer zu spielen und Blackjack-Karten zu ziehen, um die Summe der Kartenwerte zu erhöhen und den Gegner zu schlagen.

Anleitung
Beim Laden der Seite wird ein Popup-Fenster angezeigt, das den Benutzer über das Spiel informiert. Durch Klicken auf "Schließen" wird das Popup-Fenster geschlossen und das Spiel gestartet.

Zu Beginn des Spiels erhält der Spieler zwei Karten, die auf dem Spielfeld angezeigt werden. Die Summe der Kartenwerte wird ebenfalls angezeigt.

Der Spieler kann eine weitere Karte ziehen, um seine Hand zu verbessern. Dazu klickt er auf die Schaltfläche "Karte ziehen". Die gezogene Karte wird auf dem Spielfeld angezeigt und die Summe der Kartenwerte aktualisiert.

Das Ziel des Spiels ist es, mit der Summe der Kartenwerte möglichst nahe an 21 heranzukommen, ohne sie zu überschreiten. Wenn die Summe 21 erreicht oder überschritten wird, verliert der Spieler das Spiel.

Sobald der Spieler keine weiteren Karten ziehen möchte, kann er auf die Schaltfläche "Bank" klicken, um die Bank (Computer) am Zug zu lassen.

Die Bank zieht automatisch Karten, bis sie entweder die Summe von 17 erreicht oder überschreitet oder die Summe 21 erreicht. Anschließend wird der Gewinner ermittelt.

Wenn die Bank oder der Spieler 21 erreicht, gewinnt die Partei automatisch. Wenn beide Parteien die gleiche Summe haben, endet das Spiel unentschieden.

Nachdem der Gewinner ermittelt wurde, kann das Spiel durch Klicken auf die Schaltfläche "Neu starten" zurückgesetzt und erneut gespielt werden.

Technische Details
Das Spiel verwendet JavaScript für die Spiellogik und das Manipulieren des DOMs (Document Object Model) für die Darstellung der Karten und die Aktualisierung des Spielstands.

Die Kartenwerte sind durch Konstanten definiert, und das Kartendeck wird als Array von Kartenwerten initialisiert. Die dazugehörigen Kartensymbole (Bilder) werden ebenfalls in einem separaten Array gespeichert.

Funktionen werden verwendet, um das Spiel zu starten, Karten zu ziehen, den Spielstand zu berechnen, den Gewinner zu ermitteln und das Spiel zurückzusetzen.

Das HTML-Dokument enthält die Spielfläche, den Spielstand und Schaltflächen für die Interaktion mit dem Spiel.

Loslegen
Um das Spiel zu spielen, öffnen Sie einfach die blackjack.html-Datei in einem Webbrowser Ihrer Wahl.

Genießen Sie das Blackjack-Spiel und viel Spaß beim Spielen!
