import React from 'react';
// import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

function NewJobForm(props){
  let _jobName = null;
  let _client = null;
  let _jobStart = null;
  let _jobEnd = null;
  let _jobNotes = null;
  let _formVisibleOnPage = true;

  function handleNewJobFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();



    let newJobMembers = Object.keys(props.jobMemberList).map(function(id) {
      const member = props.jobMemberList[id];
      const source = {availability: '', offerSent: false}
      return Object.assign(member, source)
    })





    console.log(props.jobMemberList)
    const action = {
      type: 'ADD_JOB',
      id: v4(),
      jobName: jobName.value,
      client: client.value,
      jobStart: jobStart.value,
      jobEnd: jobEnd.value,
      jobNotes: jobNotes.value,
      jobMembers: newJobMembers
    };
    dispatch(action);
    props.onNewJobForm({formVisibleOnPage: _formVisibleOnPage});
    _jobName.value = '';
    _client.value = '';
    _jobStart.value = '';
    _jobEnd.value = '';
    _jobNotes.value = '';
    _formVisibleOnPage = true;
  }

  function handleCancel(event) {
    event.preventDefault();
    props.onNewJobForm({formVisibleOnPage: _formVisibleOnPage});
    _formVisibleOnPage = false;
  }

  return (
    <div>
    <style jsx>{`
      li {
        display: block;
      }
     `}</style>
   <form onSubmit={handleNewJobFormSubmission}>
        <li><input
          type='text'
          id='jobName'
          placeholder='Job Name'
          ref={(input) => {_jobName = input;}}/></li>
        <li><input
          type='text'
          id='client'
          placeholder='Client Name'
          ref={(input) => {_client = input;}}/></li>
        <li><input
          type='text'
          id='jobStart'
          placeholder='Start Time/Date'
          ref={(input) => {_jobStart = input;}}/></li>
        <li><input
          type='text'
          id='jobEnd'
          placeholder='End Time/Date'
          ref={(input) => {_jobEnd = input;}}/></li>
        <li><input
          type='text'
          id='jobNotes'
          placeholder='Notes'
          ref={(input) => {_jobNotes = input;}}/></li>
        <button type='submit'>Submit</button>
        <button type='submit' onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

// NewJobForm.propTypes = {
//   onNewMemberCreation: PropTypes.func,
//   onNewJobForm: PropTypes.func
// };

// NewJobForm = connect()(NewJobForm);

export default connect()(NewJobForm);
