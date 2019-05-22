import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function SortList(props){

  if (props.jobDispShow == true) {

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


     <h2><span>Job:</span> {props.jobName}</h2>



    </div>
  );
} else {
  return (
    <div></div>
  );
}
}

SortList.propTypes = {
  // firstName: PropTypes.string.isRequired,
  // lastName: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // notesMaster: PropTypes.string.isRequired
};

export default connect()(SortList);


// {Object.keys(props.jobDispList).map(function(id) {
//   var job = props.jobDispList[id];
//   if (props.jobDispShow == true) {
//     return <SortList
//       onRemoveJob={props.onRemoveJob}
//       id={job.id}
//       jobName={job.jobName}
//       client={job.client}
//       jobStart={job.jobStart}
//       jobEnd={job.jobEnd}
//       jobNotes={job.jobNotes}
//       />
//   }
// })}
