import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import Header from "./component/Header"
import Main from "./component/Main"
import Footer from "./component/Footer"

ReactDOM.render(<div style={{backgroundColor: "#15161a", width: "330px"}}>
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>, document.getElementById("hello"));