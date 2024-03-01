import React from "react"
import jisoo from "../images/jisoo.jpg"

export default function Header() {
    return (
        <div className="Header">
            <img src={jisoo} alt=""></img>
            <h2>Laura Smith</h2>
            <button className="Header--button_email">Email</button>
            <button className="Header--button_linkedin">Linkdin</button>
        </div>
    )
}