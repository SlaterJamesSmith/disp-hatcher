import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function JobSpecificMembers(props){

  console.log(props.jobMembers)



  return (
    <div>
      <style jsx>{`
        div {
          font-family: arial;
          background-color: lightgreen;
          color: green;
        }
        h2 {
          padding: 20px;
        }
        ul {
          padding: 8px;
          border: 3px solid grey;
        }
        li {
          display: block;
          padding: 0;
          margin-top: -10px;
        }
        span {
          color: grey;
        }
       `}</style>


     <h2>Name: {props.firstName}</h2>



    </div>
  );

}

JobSpecificMembers.propTypes = {
  // firstName: PropTypes.string.isRequired,
  // lastName: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // notesMaster: PropTypes.string.isRequired
};

export default connect()(JobSpecificMembers);
