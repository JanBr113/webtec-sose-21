import React, { useState } from 'react';
import StarRating from './StarRating';
import { useLocation } from 'react-router';

export default function Products({ setCart, cart, products }) {
  let location = useLocation();

  //Zähler für Kommentarsektion
  const [value, setValue] = useState("");
  const counter = ((event) => {
    let length = event.target.value.length;
    setValue(length + "/800");
  });

  // Fügt Produkt zum Einkaufswagen und berechnet Menge
  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };


  const [category] = useState(location.state.category);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <main>
      <section className="product-page">
        <h1>Produktdetails</h1>
        <div className="card">
          {getProductsInCategory().map((product, idx) => (
            <div className="product" key={idx}>

              <figure>
                <img
                  alt={product.name}
                  className="product-picture"
                  src={product.picture}
                />
              </figure>

              <div className="product-content">
                <h2>{product.name}</h2>
                {<StarRating stars={product.rating} />}
                <p></p>
                <h3 className="old-product-price">{product.oldPrice} €</h3>
                <h3 className="product-price">{product.price} €</h3>
                <hr />
                <div className="product-detail">
                  <p>{product.description}</p>
                  <ul>
                    <li>
                      Hersteller: <strong>{product.manufacturer}</strong>
                    </li>
                    <li>
                      Marke: <strong>{product.brand}</strong>
                    </li>
                    <li>
                      Lieferdienst: <strong>{product.delivery_service}</strong>
                    </li>
                    <li>
                      Lieferung: <strong>{product.delivery_time} Werktage</strong>
                    </li>
                    <li>
                      Verfügbarkeit: <strong>{product.availability}</strong>
                    </li>
                  </ul>
                  <div className="alert alert-success" role="alert">
                    Mit dem Kauf dieses Produktes sparen Sie 2kg CO2!
                  </div>
                </div>

                <button
                  type="button"
                  id="cart-btn"
                  className="cart-button"

                  onClick={() => addToCart(product)}
                >
                  In den Warenkorb
                </button>
                <hr />

                <form className="was-validated">
                  <div className="col">
                    <label htmlFor="textareaRezension" className="form-label">
                      <StarRating clickHandler={rating => console.log("RATING--", rating)} />
                    </label>
                    <textarea
                      className="form-control"
                      id="textareaRezension"
                      rows="8"
                      maxLength="800"
                      placeholder="Schreiben Sie eine Rezension um Bonuspunkte zu erhalten..."
                      onChange={counter}
                      required
                    ></textarea>
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-success" disabled>
                        Rezension abschicken
                      </button>{" "}
                      {value}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
