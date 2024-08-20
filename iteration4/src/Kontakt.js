export default function Kontakt() {
    return (
        <main>

            <h1>Kontakt</h1>

            <form className="row g-3 was-validated">
                <div className="col-md-4">
                    <label htmlFor="inputVorname" className="form-label">Vorname</label>
                    <input type="text" className="form-control" id="inputVorname" size="40" maxLength="40" pattern="[a-zA-Z][a-zA-Z]+" required></input>
                    <div className="invalid-feedback">Bitte geben Sie ihren Vornamen an.</div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputNachname" className="form-label">Nachname</label>
                    <input type="text" className="form-control" id="inputNachname" size="40" maxLength="40" pattern="[a-zA-Z][a-zA-Z]+" required></input>
                    <div className="invalid-feedback">Bitte geben Sie ihren Nachnamen an.</div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" required></input>
                    <div className="invalid-feedback">Bitte geben Sie eine gültige E-Mail Adresse ein.</div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputBetreff" className="form-label">Betreff</label>
                    <input type="text" className="form-control" id="inputBetreff" size="40" maxLength="40" required></input>
                    <div className="invalid-feedback">Bitte geben Sie einen Betreff an.</div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputKategorie" className="form-label">Kategorie</label>
                    <select className="form-select" id="inputKategorie" required>
                        <option value="">-- Bitte wählen --</option>
                        <option value="Versand">Wann kommt mein Paket?</option>
                        <option value="Retoure">Retoure</option>
                        <option value="Verkauf">Fragen vor dem Kauf</option>
                        <option value="Sonstiges">Sonstige Fragen</option>
                    </select>
                    <div className="invalid-feedback">Bitte wählen Sie eine Kategorie.</div>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputKdNr" className="form-label">Kundennummer</label>
                    <input type="text" className="form-control" id="inputKdNr" placeholder="Noch kein Kunde" size="40" maxLength="40" pattern="[0-9]{7}(p|[0-9])"></input>
                </div>
                <div className="col-12">
                    <label htmlFor="textareaBeschreibung" className="form-label">Beschreibung</label>
                    <textarea className="form-control" id="textareaBeschreibung" rows="10" maxLength="400" required></textarea>
                    <div className="invalid-feedback">Bitte geben Sie eine Beschreibung an.</div>
                </div>
                <div className="col-auto">
                    <button type="reset" className="btn btn-danger">Eingaben löschen</button>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-success" >Abschicken</button>
                </div>
            </form>

        </main>
    )
}