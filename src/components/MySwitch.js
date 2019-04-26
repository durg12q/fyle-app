// JavaScript source code
import React, { Component } from 'react';
import Switch from "react-switch";
import './MySwitch.css';

class MySwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            monthly: true,
            removeCheckedUncheckedIcons: true
        };
    }

    handleChange = (checked) => {
        this.setState({
            checked: !this.state.checked
        })

        this.props.changePricingPeriod(!checked);
    };

    render() {
        return (
            <div className="my-switch">
                 <span className="switch-text">Annual</span>
                <Switch
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    onColor={'#D8D8D8'}
                    onHandleColor={'#0099FF'}
                    offColor={'#D8D8D8'}
                    offHandleColor={'#0099FF'}
                    checkedIcon={!this.state.removeCheckedUncheckedIcons}
                    uncheckedIcon={this.state.removeCheckedUncheckedIcons}
                    handleDiameter={25}
                    height={22}
                    width={50}
                />
                <span className="switch-text"> Monthly</span>
                <div id="alter">50%</div>
            </div>
        );
    }
}


export default MySwitch;