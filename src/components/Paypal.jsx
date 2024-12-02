import React, { useRef, useEffect } from 'react';

function Paypal() {
    const paypalRef = useRef();

    useEffect(() => {
        // Load the PayPal script
        const script = document.createElement('script');
        script.src = 'https://www.paypal.com/sdk/js?client-id=AQqg7zVY8nPq_xBh-xUB40GIHcOuyyX7InMraAXKnljzmVRT-OKuEZEudTEpZpFdVwiS9Obxc9cvzDyj'; // Replace 'YOUR_CLIENT_ID' with your actual client ID
        script.async = true;
        script.onload = () => {
            // Render the PayPal button after the script loads
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                currency_code:"CAD",
                                value:650.00
                            }
                        }]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log('Order captured: ', order);
                    // Handle successful payment here
                },
                onError: (err) => {
                    console.error('PayPal Checkout onError', err);
                }
            }).render(paypalRef.current);
        };

        document.body.appendChild(script);

        // Cleanup script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div ref={paypalRef}></div>
        </div>
    );
}

export default Paypal;