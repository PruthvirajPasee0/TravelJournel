import React from 'react';

export default function Card(props){
    return(
       <div className="card">

        <img id="card--img" src={props.img}/>

        <div id="card--info">
            <img id="location--icon" src="https://w7.pngwing.com/pngs/457/630/png-transparent-location-logo-location-computer-icons-symbol-location-miscellaneous-angle-heart.png"/>

            <span id="city">{props.location}</span>

            <a id="link" href={props.maps}>View on google maps</a>

        <span><br />
        <h1 id="title">{props.name}</h1>

        <h3 id="dates">{props.date}</h3>

        <p>{props.description}</p>

        </span>
        </div>
       </div>
    )
}