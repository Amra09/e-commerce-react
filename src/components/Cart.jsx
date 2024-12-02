import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
function Cart() {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
    
    const handleCheckout = () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Cannot proceed to checkout.');
            return;
        }
        // Proceed to checkout logic here
    };

    const handleQuantityChange = (id, change) => {
        updateQuantity(id, change);
    };

    

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Products</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td className="product-thumbnail">
                                        <div className="d-flex align-items-center">
                                            <img 
                                                src={item.image} 
                                                className="img-fluid me-5 rounded-square" 
                                                style={{ width: 80, height: 80 }} 
                                                alt={item.title} 
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">{item.title}</p>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">${item.price.toFixed(2)}</p>
                                    </td>
                                    <td>
                                        <div className="input-group quantity mt-4" style={{ width: 100 }}>
                                            <div className="input-group-btn">
                                                <button 
                                                    className="btn btn-sm btn-minus rounded-circle bg-light border" 
                                                    onClick={() => handleQuantityChange(item.id, -1)}
                                                >
                                                    <i className="fa fa-minus" />
                                                </button>
                                            </div>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm text-center border-0" 
                                                value={item.quantity} 
                                                readOnly 
                                            />
                                            <div className="input-group-btn">
                                                <button 
                                                    className="btn btn-sm btn-plus rounded-circle bg-light border" 
                                                    onClick={() => handleQuantityChange(item.id, 1)}
                                                >
                                                    <i className="fa fa-plus" />
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">${(item.price * item.quantity)}</p>
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-md rounded-circle bg-light border mt-4" 
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <i className="fa fa-times text-danger" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-5">
                    <input 
                        type="text" 
                        className="border-0 border-bottom rounded me-5 py-3 mb-4" 
                        placeholder="Coupon Code" 
                    />
                    {/* <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">Apply Coupon</button> */}
                    <button onClick={handleCheckout} className='btn border-danger  rounded-pill px-4 py-3 text-primary '><Link to='/checkout' >Proceed to Checkout</Link></button>
                    

                </div>
              
            </div>
        </div>
    );
}

export default Cart;