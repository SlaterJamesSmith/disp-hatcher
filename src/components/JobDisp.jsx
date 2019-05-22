import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function JobDisp(props){




  function handleJobShow(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'SHOW_JOB_DISPATCH',
      id: props.id
    };
    dispatch(action);

  }






  return (
    <div>
      <style jsx>{`
        div {
          font-family: arial;
          background-color: lightgrey;
          color: black;
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
          color: gray;
        }
       `}</style>

     <button onClick={handleJobShow}>{props.jobName}</button>


    </div>
  );
}

JobDisp.propTypes = {
  // firstName: PropTypes.string.isRequired,
  // lastName: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // notesMaster: PropTypes.string.isRequired
};

export default connect()(JobDisp);
