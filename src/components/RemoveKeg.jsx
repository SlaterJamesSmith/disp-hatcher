import React from 'react';
import PropTypes from 'prop-types';

function RemoveKeg(props){
  return (
    <div>
      <style jsx>{`
         div {
           background-color: lightgreen;
           font-family: arial;
           background-color: skyblue;
           color: darkblue;
         }
         ul {
           padding: 8px;
           border: 3px solid darkblue;
         }
         li {
           display: block;
           padding: 0;
           margin-top: -10px;;
         }
       `}</style>
      <ul>
        <li><h3>{props.beer} / {props.brand}</h3></li>
        <li></li>
        <li><p>ABV: {props.percent}%</p></li>
        <li><p>${props.cost}</p></li>
        <button id={props.id}>Remove {props.id}</button>
        <button id={props.id}>Edit {props.id}</button>
      </ul>
    </div>
  );
}

RemoveKeg.propTypes = {
  beer: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default RemoveKeg;
