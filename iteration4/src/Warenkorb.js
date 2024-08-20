import React from 'react';

export default function Warenkorb({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (

    <section>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col">
                    <h1>Warenkorb</h1>
                    <hr></hr>
                    <div className="products">
                      {cart.map((product, idx) => (
                        <div className="product" key={idx}>
                          <div className="card mb-3">
                            <div className="card-body">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                  <div>
                                    <img src={product.picture} alt={product.name}
                                      className="img-fluid rounded-3" style={{ width: "200px" }}></img>
                                  </div>
                                  <div className="ms-3">
                                    <h5>{product.name}</h5>
                                  </div>

                                  <div className="ms-3">
                                    <input style={{ type: "number", size: "1", min: "1" }}
                                      value={product.quantity}
                                      type={"number"}
                                      size={1}
                                      min={1}
                                      max={999}
                                      onChange={(e) =>
                                        setQuantity(
                                          product,
                                          parseInt(e.target.value)
                                        )
                                      }
                                    />

                                    <button onClick={() => removeFromCart(product)}>
                                      Entfernen
                                    </button>
                                  </div>
                                  <div className="ms-3">
                                    <h5 className="mb-0">{product.price} €</h5>
                                  </div>
                                  <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                      ))}
                    </div>
                    <div className="col">

                      <div className="card rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Bestellübersicht</h5>
                          </div>


                          <hr className="my-4"></hr>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Betrag</p>
                            <p className="mb-2">{getTotalSum().toFixed(2)} €</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Versand</p>
                            <p className="mb-2">KOSTENLOS</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Summe</p>
                            <p className="mb-2">{getTotalSum().toFixed(2)} €</p>
                          </div>

                          <button type="button" id="cart-btn" className="cart-button">
                            <span>JETZT KAUFEN<i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                          </button>

                        </div>
                        {cart.length > 0 && (
                          <button type="button" onClick={clearCart}>Warenkorb leeren</button>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}