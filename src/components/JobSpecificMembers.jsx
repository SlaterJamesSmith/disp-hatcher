import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//VALUES PASSED TO UI FROM STATE
// id={member.id}
// firstName={member.firstName}
// lastName={member.lastName}
// email={member.email}
// proficiencies={member.proficiencies}
// exclusions={member.exclusions}
// hireDate={member.hireDate}
// listNumber={member.listNumber}
// notesMaster={member.notesMaster}
// availability={member.availability}
// offerSent={member.offerSent}

function JobSpecificMembers(props){
let sentOffer
  console.log(props.offerSent)

  function handleSendOffer(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'SEND_OFFER',
      id: props.jobId,
      jobMembId: props.memberId
    };
    dispatch(action);

    console.log(props.offerSent)

  }

  if (props.offerSent == true) {
    sentOffer = 'yes'
  } else {
    sentOffer = 'no'
  }



  return (
    <div>
      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          font-family: arial;
          background-color: lightgreen;
          color: black;
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
          background-color: lightgrey;
          border-bottom: 1px solid forestgreen;
          padding: 5px;
        }
        span {
          color: grey;
        }
       `}</style>


     <li>{props.firstName} {props.lastName}</li>
     <li>{props.proficiencies}</li>
     <li>{props.jobId}</li>
     <li>{props.memberId}</li>
     <li>{sentOffer}</li>
     <button onClick={handleSendOffer}>Send Offer</button>





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
