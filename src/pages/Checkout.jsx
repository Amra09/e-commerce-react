import React, { useContext, useRef, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Checkout() {
    const { cart } = useContext(CartContext);
    const paypalRef = useRef();

    // Calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    useEffect(() => {
        // Load the PayPal script
        const script = document.createElement('script');
        script.src = 'https://www.paypal.com/sdk/js?client-id=AVVz1WCG3mLGm4xyyaG2ZUbqYVJGZwq_M0YlmVyRuJX44nfy2HCWZMeHbZel1iRid9JiZx0Qfsquyyj-'; // Replace with your PayPal client ID
        script.async = true;

        script.onload = () => {
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: totalPrice // Use the total price calculated
                            }
                        }]
                    });
                },
                onApprove: async (data, actions) => {
                    try {
                        const order = await actions.order.capture();
                        console.log('Order captured: ', order);
                        alert("Payment successful! Thank you for your purchase.");
                        // Clear the cart or redirect if needed
                    } catch (error) {
                        console.error('Error capturing order: ', error);
                        alert("An error occurred while capturing your payment.");
                    }
                },
                onError: (err) => {
                    console.error('PayPal Checkout onError', err);
                    alert("An error occurred during the payment process.");
                }
            }).render(paypalRef.current); 
        };

        script.onerror = () => {
            console.error('PayPal script failed to load.');
            alert("Failed to load PayPal script. Please try again later.");
        };

        document.body.appendChild(script);

        
        return () => {
            document.body.removeChild(script);
        };
    }, [totalPrice]);

    return (
        <div className="container py-5">
            <h2>Checkout</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty. <Link to="/">Go back to shopping</Link></p>
            ) : (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Products</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <img 
                                            src={item.image} 
                                            style={{ width: 80, height: 80 }} 
                                            alt={item.title} 
                                        />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>Total: ${totalPrice}</h3>
                    <div ref={paypalRef}></div> 
                    <div className="options " >
                        <Link to='/cart' className='option1'>Back To Cart</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Checkout;