import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import Ubody from "./components/Ubody";
function App() {
    return (
        <div className="App">

            <div id="ap1">
                <div id="headleft">
                    <h1 id="text1">Looking for a lollipop alternative?</h1>
                    <h2 id="text2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.</h2>
                    <button className="button-cta cta-text">Primary CTA</button>
                    <button className="outline-button cta-text">Secondary CTA</button>
                </div>
                <div id="headryt"><Header /></div></div>

            <div>
                <div id="ibody"><p id="p1"> This is a heading in <br /> two lines.</p>
                    <Ubody /></div>
               
                <div id="ubody"><Main /> </div>
            </div>

        </div>
    );
}

export default App;
