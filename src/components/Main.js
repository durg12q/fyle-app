// JavaScript source code
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pricingcard from "../PricingCard"
import Base from "./Base";
import "./Ubody.css";
import BaseFoot from "./BaseFoot";
class Main extends Component {
    render() {
        return (

            <div id="footer">
                <div id="pc">  <Pricingcard /></div>
                <div id="base">
                        <p className="customer-feed-header">Here's what our customers have to say</p> 


                    <Base />
                    <BaseFoot />
                </div>
                
            </div>
        );
    }
}
export default Main;