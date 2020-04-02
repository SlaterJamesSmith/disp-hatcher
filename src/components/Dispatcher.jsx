import React from 'react';
import Member from './Member';
import PropTypes from 'prop-types';
// import Job from './Job';
import JobDisp from './JobDisp';
import Job from './Job';
import SortList from './SortList';




function Dispatcher(props){
  return (
    <div>
      <style jsx>{`
         div {
           font-family: arial;
           display: flex;
           flex-direction: row;
           flex-wrap: wrap;
         }
         h2 {
           background-color: lightgreen;
           padding: 10px;
           color: forestgreen;
           border: 3px solid forestgreen;
           text-align: center;
           width: 100vw;
         }
         h3 {
           padding: 10px;
           background-color: darkgray;
           color: white;
           text-align: center;
           width: 100vw;
           margin-top: 0;
           margin-bottom: 5px;
           padding-top: 0;
         }
         ul {
           padding: 8px;
         }
         li {
           display: block;
           padding: 0;
           margin-bottom: 0;
         }

       `}</style>

     {Object.keys(props.jobDispList).map(function(id) {
         var job = props.jobDispList[id];
         return <JobDisp
           id={job.id}
           jobName={job.jobName}
           jobDispShow={job.jobDispShow} />
       })}

    <h2>Sort Buttons Here</h2>
    <h3>To begin, click 'job builder' to create a job</h3>
    <h3>Create multiple jobs to toggle between them and update workers on specific jobs</h3>
    {Object.keys(props.jobDispList).map(function(id) {
        var job = props.jobDispList[id];
        return <SortList
          jobId={job.id}
          jobName={job.jobName}
          client={job.client}
          jobStart={job.jobStart}
          jobEnd={job.jobEnd}
          jobDispShow={job.jobDispShow}
          jobNotes={job.jobNotes}
          jobMembers={job.jobMembers}
          />
      })}






    </div>
  );
}

export default Dispatcher;
