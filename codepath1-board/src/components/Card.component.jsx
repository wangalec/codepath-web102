import React from "react";

const InfoCard = (props) => {
    return(
        <div className="infocard">
        <img src = {props.image} className = "image"></img>
        <h2> {props.title} </h2>
        <a href = {props.link}>
            <button> Learn More </button>
        </a>
        </div>
    )
}

export default InfoCard;