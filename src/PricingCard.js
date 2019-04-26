// JavaScript source code
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { userNumbers, priceList } from "./User";
import  "./PricingCard.css"; 
import UserCard from './UserCard';
import MySwitch from './components/MySwitch';
import PriceCard from './components/PriceCard';


class Pricingcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfUsers: 25,
            numberOfMonths: 1
        };
    }

    onChangingNumberOfUsers = (users) => {
        this.setState({
            numberOfUsers: users
        })
    }

    onChangingNumberOfMonths = (calculateMonthly) => {
        this.setState({
            numberOfMonths: calculateMonthly ? 0.5 : 1
        })
    }

    render() {
        return (
            <div>
                <p className="compare-pricing-today">Compare pricing today!</p>
                <p className="lorem-ipsum-is-simple">Lorem Ipsum is simply dummy text of the printing and <span className="text-link">typesetting</span>.</p>
                <div className="no-of-users">
                    {
                        userNumbers.map((num, i) => {
                            return <UserCard key={i} userNumber={num} changeNumberOfUsers={this.onChangingNumberOfUsers} currentNumberOfUsers={this.state.numberOfUsers} />
                        })
                    }
                    <MySwitch changePricingPeriod={this.onChangingNumberOfMonths} />
                </div>
                <div className="price-list-card">
                    {
                        priceList.map((companyInfo, i) => {
                            return <PriceCard key={i} companyName={companyInfo.companyName} price={companyInfo.price} savingsCard={companyInfo.savingsCard} numberOfUsers={this.state.numberOfUsers} numberOfMonths={this.state.numberOfMonths} />
                        })
                    }
                </div>
            </div>
        );
    }
}
export default Pricingcard;