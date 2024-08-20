import React from "react";
import { Link } from "react-router-dom";
import StarRating from './StarRating';

export default function Startseite({ products }) {
    return (
        <main>
            <h1>Startseite</h1>
            <div className="row">

                {products.map((product, index) => (
                    <div className="col-sm-6" data-index={index} key={index}>
                        <div className="card">
                            <figure>
                                <Link to={{
                                    pathname: "/Produkt",
                                    state: {
                                        category: index
                                    },
                                }}><img alt={product.rating} className="product-picture" src={product.picture} /><figcaption className="product-title">{product.name}</figcaption></Link>
                            </figure>
                            <StarRating stars={product.rating} />
                            <p></p>
                            <h3 className="old-product-price">{product.oldPrice}</h3>
                            <h3 className="product-price">{product.price}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <p></p>
            <div className="card">
                <div className="card-header">
                    Zitat
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>„Will ich die Welt verbessern, dann fang ich am besten bei mir an!“</p>
                        <footer className="blockquote-footer">Phil Bosmans</footer>
                    </blockquote>
                </div>
            </div>
        </main>
    )
}