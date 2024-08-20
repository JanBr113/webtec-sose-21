function zumWarenkorbHinzufuegen(produkt) {
    // Hole das Warenkorb-Array aus dem localStorage über den Schlüssel 'warenkorb'
    let warenkorb = holeWarenkorb();

    // Wenn der Warenkorb bereits Produkte enthält ...
    if (warenkorb) {
        // Wenn das Produkt noch nicht im Warenkorb liegt...
        if (!istProduktImWarenkorb(produkt)) {
            // Produkt zum Warenkorb hinzufügen
            warenkorb.push(produkt)
                // Das aktualisierte Warenkorb-Array in localStorage speichern
            localStorage.setItem('warenkorb', JSON.stringify(warenkorb));
        //Wenn die maximale Anzahl noch nicht erreicht ist...
        } else if (!istMaximaleAnzahlErreicht(produkt)){
            // Produktanzahl im Warenkorb-Array anpassen
            warenkorb[holeProduktIndex(produkt)].anzahl = produkt.anzahl;

            // Das aktualisierte Warenkorb-Array in localStorage speichern
            localStorage.setItem('warenkorb', JSON.stringify(warenkorb));
        }
        // Ansonsten, wenn der Warenkorb noch leer ist ...
    } else {
        // Produkt in ein neues Array einfügen und das neue Warenkorb-Array
        // in localStorage unter dem Schlüssel 'warenkorb' speichern
        localStorage.setItem('warenkorb', JSON.stringify([produkt]));
    }
    istMaximaleAnzahlErreicht(produkt);
}

function istMaximaleAnzahlErreicht(produkt) {
    // Warenkorb holen
    let warenkorb = holeWarenkorb();
    // Wenn Warenkorb nicht leer ist
    if (warenkorb != null) {
        if (istProduktImWarenkorb(produkt)) {
            let i = holeProduktIndex(produkt);
            // Prüft ob maximale Anzahl erreicht ist.
            if (warenkorb[i].anzahl == produkt.max_anzahl) {
                // "In den Warenkorb" Button deaktivieren.
                document.getElementById("warenkorb-btn").disabled = true;
                return true;
            } else if (warenkorb[i].anzahl < produkt.max_anzahl) {
                return false;
            } else {
                alert('Fehler! Bitte Code prüfen und Warenkorb zurücksetzen');
            }
        }
        return false;
    }
}

function istProduktImWarenkorb(produkt){
    let warenkorb = holeWarenkorb();
    for (let i = 0; i < warenkorb.length; i++) {
        if (produkt.name == warenkorb[i].name) {
            return true;
        }
    }
    return false;
}

function getAnzahl() {
    return Number(document.getElementById("anzahl").value);
}

function addAnzahl() {
    produkt.anzahl += getAnzahl();
    if (produkt.anzahl > produkt.max_anzahl){
        produkt.anzahl = produkt.max_anzahl;
    }
}




function holeWarenkorb(){
    return JSON.parse(localStorage.getItem('warenkorb'));
}


function holeProduktIndex(produkt){
    let warenkorb = holeWarenkorb();
    if(warenkorb){
        for (let i = 0; i < warenkorb.length; i++) {
            if (produkt.name == warenkorb[i].name) {
                return i;
            }
        }
    }
}