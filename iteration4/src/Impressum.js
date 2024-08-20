export default function Impressum() {
    return (
        <main>
            <h1>Impressum</h1>
            <div className="row">
                <div className="card" id="impressumCard">
                    <div className="card-header">
                        <a href="mailto:raphael.sacher@stud.hs-ruhrwest.de"><strong>Raphael Sacher</strong></a>
                    </div>
                    <div className="card-body">
                        <p className="card-text">E-Commerce</p>
                        <p className="card-text">Hochschule Ruhr West</p>
                    </div>
                </div>
                <div className="card" id="impressumCard">
                    <div className="card-header">
                        <a href="mailto:jan-niclas.bracht@stud.hs-ruhrwest.de"><strong>Jan-Niclas Bracht</strong></a>
                    </div>
                    <div className="card-body">
                        <p className="card-text">E-Commerce</p>
                        <p className="card-text">Hochschule Ruhr West</p>
                    </div>
                </div>
            </div>
        </main >
    )
}