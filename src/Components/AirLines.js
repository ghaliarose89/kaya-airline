import '../Utils/airlines.scss'
import React from 'react';


function AirLines(props) {
    const url = "https://www.kayak.com" + props.img_src;
    const alliances = {
        ST: "Sky Team",
        OW: "Oneworld",
        SA: "Star Alliance"
    };


    return (
        <div className="card">
            <div className="card-img">
                <img src={url} alt="" />
            </div>
            <div className="card-desc">
                <span className="card-title">{props.title}</span>
                {props.subtitle !== "none" && props.subtitle !== "" && (
                    <span className="card-subtitle">{alliances[props.subtitle]}</span>
                )}
                {props.phone !== "none" && props.phone !== "" && (
                    <span className="card-phone">{props.phone}</span>
                )}
                {props.website !== "none" && props.website !== "" && (
                    <span className="card-website">{props.website}</span>
                )}
            </div>
        </div>
    )
};

export default AirLines;