import React from 'react';
//import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ personaje }) => {
  const { char_id, name, nickname, status, occupation, img } = personaje;
  return (

    <div className="card my-3">
      <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <span className={`btn btn-sm float-end ${status.toLowerCase().includes('alive') 
          ? 'btn-info' 
          : 'btn-danger'}`}>  
          {status}        
          </span>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{nickname}</p>
          <div className='row text-left'>
          <hr />
            <p className='text-muted'>
              <strong>Occupation:</strong> 
            </p>
            
            {occupation.map((item, index)=>{
              return (
                <h6 key={index}>&bull; {item}</h6>
              )
            })}
          </div>

        </div>
    </div>

  )
};


export default Card;
