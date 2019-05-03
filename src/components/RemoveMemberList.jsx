import React from 'react';
import RemoveMember from './RemoveMember';
import PropTypes from 'prop-types';




function RemoveMemberList(props){
  return (
    <div>
      <style jsx>{`
         div {
           font-family: arial;
         }
         h2 {
           background-color: lightgreen;
           padding: 10px;
           color: forestgreen;
           border: 3px solid forestgreen;
           text-align: center;
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
     <h2>MEMBER SORTING OPTIONS GO HERE</h2>
      {props.memberList.map((member) =>
        <RemoveMember firstName={member.firstName}
          lastName={member.lastName}
          email={member.email}
          notesMaster={member.notesMaster}
          key={member.id} />
      )}

    </div>
  );
}

export default RemoveMemberList;
