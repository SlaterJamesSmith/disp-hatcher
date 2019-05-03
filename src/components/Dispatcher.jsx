import React from 'react';
import Member from './Member';
import PropTypes from 'prop-types';




function Dispatcher(props){
  return (
    <div>
      <style jsx>{`
         div {
           font-family: arial;
         }
         h2 {
           background-color: darkblue;
           padding: 10px;
           color: skyblue;
           border: 3px solid skyblue;
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
      <h2>DRINKS ON TAP</h2>
      {props.memberList.map((member) =>
        <Member firstName={member.firstName}
          lastName={member.lastName}
          email={member.email}
          notesMaster={member.notesMaster}
          key={member.id} />
      )}

    </div>
  );
}

export default Dispatcher;
