import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewMemberForm(props){
  let _firstName = null;
  let _lastName = null;
  let _email = null;
  let _notesMaster = null;
  let _formVisibleOnPage = true;

  function handleNewMemberFormSubmission(event) {
    event.preventDefault();
    props.onNewMemberCreation({firstName: _firstName.value, lastName: _lastName.value, email: _email.value, notesMaster: _notesMaster.value, id: v4()});
    props.onNewMemberForm({formVisibleOnPage: _formVisibleOnPage});
    _firstName.value = '';
    _lastName.value = '';
    _email.value = '';
    _notesMaster.value = '';
    _formVisibleOnPage = true;
  }

  function handleCancel(event) {
    event.preventDefault();
    props.onNewMemberForm({formVisibleOnPage: _formVisibleOnPage});
    _formVisibleOnPage = false;
  }

  return (
    <div>
    <style jsx>{`
      li {
        display: block;
      }
     `}</style>
   <form onSubmit={handleNewMemberFormSubmission}>
        <li><input
          type='text'
          id='firstName'
          placeholder='Beer Name'
          ref={(input) => {_firstName = input;}}/></li>
        <li><input
          type='text'
          id='lastName'
          placeholder='Brand'
          ref={(input) => {_lastName = input;}}/></li>
        <li><input
          type='text'
          id='email'
          placeholder='Percentage'
          ref={(input) => {_email = input;}}/></li>
        <li><input
          type='text'
          id='notesMaster'
          placeholder='Cost'
          ref={(input) => {_notesMaster = input;}}/></li>
        <button type='submit'>Submit</button>
        <button type='submit' onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

NewMemberForm.propTypes = {
  onNewMemberCreation: PropTypes.func,
  onNewMemberForm: PropTypes.func
};

export default NewMemberForm;
