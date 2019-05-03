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
      {props.kegList.map((keg) =>
        <RemoveMember firstName={keg.firstName}
          lastName={keg.lastName}
          email={keg.email}
          notesMaster={keg.notesMaster}
          key={keg.id} />
      )}

    </div>
  );
}

export default RemoveMemberList;
