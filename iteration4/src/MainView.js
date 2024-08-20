import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Keyboard from './img/bambookeys_keyboard.png';
import Mouse from './img/bambookeys_mouse.png';

export default function MainView() {

    // In dem products Array werden alle Produkte mit jeweiligen Produktdetails gespeichert.
    var products = [
        {
            category: 0,
            name: "BambooKeys Tastatur",
            oldPrice: 119.99,
            price: 98.99,
            picture: Keyboard,
            description: "Die kabellose BambooKeys Tastatur überzeugt mit einem einzigartigen Design. Alle Teile - außer die Elektronik - sind aus Bambus gefertigt. Die integrierten Solarzellen laden einen Akku auf und sorgen für eine nachhaltige Stromversorgung.",
            rating: 5,
            amount: 0,
            max_amount: Infinity,
            manufacturer: 'BambooKeys',
            brand: 'BambooKeys',
            delivery_time: 2,
            delivery_service: 'DHL & DPD',
            availability: 'Auf Lager'

        },
        {
            category: 1,
            name: 'BambooKeys Maus',
            oldPrice: 49.99,
            price: 44.99,
            picture: Mouse,
            description: 'Die kabellose BambooKeys Maus überwältigt mit seinem innovativen Design. Alle Teile - außer die Elektronik - sind aus Bambus gefertigt.',
            rating: 4,
            amount: 0,
            max_amount: 1,
            manufacturer: 'BambooKeys',
            brand: 'BambooKeys',
            delivery_time: 3,
            delivery_service: 'DHL',
            availability: 'Auf Lager'
        },
    ];

    return (
        <Router>
            <div className="container">
                <div className="MainView">
                    <Header />
                    <Main products={products}
                    />
                    <Footer />
                </div>
            </div>
        </Router >
    );
}