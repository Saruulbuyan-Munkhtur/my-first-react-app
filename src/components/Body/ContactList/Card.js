import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import { createAdd } from 'typescript';



const card = (props) => {

  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='contact' src={"http://robohash.org/${id}?200x200"} />
      <div> 
        <h2>{props.name}</h2>  
        <p>{props.phoneNumber}</p>
      </div> 
    </div>
  );
}

export default card;