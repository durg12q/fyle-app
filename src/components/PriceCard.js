// JavaScript source code
import React from 'react';
import './PriceCard.css';

const PriceCard = ({ companyName, price, savingsCard, numberOfUsers, numberOfMonths }) => {
    if (!savingsCard) {
        return (
            <div className="price-card">
                <p className="company-name">{companyName}</p>
                <p className="company-price">${price * numberOfUsers * numberOfMonths}<span className="price-period"> {numberOfMonths === 1 ? 'Per month' : 'Per Year'} </span></p>
                <p className="company-employee-numbers">For {numberOfUsers} servings</p>
            </div>
        );
    } else {
        return (
            <div className="price-card savings-card">
                <p className="company-name savings-card-info">{companyName}</p>
                <p className="company-price savings-card-info savings-price">${numberOfUsers * numberOfMonths}</p>
                <span className="price-period savings-card-period"> {numberOfMonths === 1 ? 'Per month' : 'Per Year'} </span>
            </div>
        );
    }
}
export default PriceCard;