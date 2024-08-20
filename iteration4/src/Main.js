import React, { useState } from "react";
import {
    Switch,
    Route
} from "react-router-dom";

import Startseite from "./Startseite";
import Kontakt from "./Kontakt";
import Impressum from "./Impressum";
import Warenkorb from "./Warenkorb";
import Produkt from "./Produkt";

export default function Main(props) {

    const [cart, setCart] = useState([]);


    return (
        //Router verlinkt die Komponenten
        <Switch>
            <Route path="/Startseite">
                <Startseite products={props.products} />
            </Route>
            <Route path="/Kontakt">
                <Kontakt />
            </Route>
            <Route path="/Impressum">
                <Impressum />
            </Route>
            <Route path="/Warenkorb">
                <Warenkorb cart={cart} setCart={setCart} />
            </Route>
            <Route path="/Produkt">
                <Produkt cart={cart} setCart={setCart} products={props.products} />
            </Route>
            <Route path="/">
                <Startseite products={props.products} />
            </Route>
        </Switch>
    );
}