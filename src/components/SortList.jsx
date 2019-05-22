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

      <ul>
        <li><p><strong>Job Name:</strong> {props.jobName}</p></li>
        <li><p><strong>Client</strong> {props.client}</p></li>
        <li><p><strong>Start Time/Date:</strong> {props.jobStart}</p></li>
        <li><p><strong>End Time/Date:</strong> {props.jobEnd}</p></li>
        <li><p><strong>Notes:</strong> {props.jobNotes}</p></li>
      </ul>


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
