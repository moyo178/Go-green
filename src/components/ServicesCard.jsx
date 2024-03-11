import React from "react";
import "../App.css"; 

const ServicesCard = ({title, text, display }) => {
    return (
   <div className="cards">
    <div className="grid">
     <div id='cards'  className="bg-white rounded overflow-hidden shadow-md hover:shadow-black">
      <div className='circle'>
      <img src={display} alt="" id='clock'/>
      </div>
      <h2 id='cards-h2'>{title}</h2>
      <p className='card-txt'>
        {text}
      </p>
    </div>
    </div>
   </div>     


    );
};

export default ServicesCard;
