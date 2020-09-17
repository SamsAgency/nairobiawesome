import React from "react";
import "./cards.css"

const Cards = (props) => {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <img src={props.image} alt=""/>
        </div>
    )
}

export default Cards