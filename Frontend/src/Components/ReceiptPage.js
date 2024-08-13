    import React from 'react';
    import { useLocation } from 'react-router-dom';
    import '../CSS/receipt.css';
    import MenuBar from './MenuBar';

    const ReceiptPage = () => {
    const location = useLocation();
    const { order } = location.state || {};

    if (!order) {
        return <p>No order information available.</p>;
    }

    return (
        <div>
        <MenuBar />
        <div className="receipt-page">
            <h2 align="center">Order Receipt</h2>
            <div className="receipt-summary">
            <div className="summary-item">
                <h3>Order ID</h3>
                <p>{order._id}</p>
            </div>
            <div className="summary-item">
                <h3>Total Price</h3>
                <p>${order.totalPrice.toFixed(2)}</p>
            </div>
            <div className="summary-item">
                <h3>Order Items</h3>
                <ul>
                {order.cartItems.map((item, index) => (
                    <li key={index}>
                    {item.productId} x {item.quantity}
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default ReceiptPage;
