import React from 'react';
import PropTypes from 'prop-types';

function Member(props){
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
        <li><h3>{props.firstName} / {props.lastName}</h3></li>
        <li></li>
        <li><p>{props.email}%</p></li>
        <li><p>${props.notesMaster}</p></li>
      </ul>
    </div>
  );
}

Member.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  notesMaster: PropTypes.string.isRequired
};

export default Member;
