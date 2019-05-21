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
     <h2>Sort Buttons Here</h2>
       {Object.keys(props.memberList).map(function(id) {
         var member = props.memberList[id];
         return <Member
           firstName={member.firstName}
           lastName={member.lastName}
           email={member.email}
           proficiencies={member.proficiencies}
           exclusions={member.exclusions}
           hireDate={member.hireDate}
           listNumber={member.listNumber}
           notesMaster={member.notesMaster}
           key={member.id} />
       })}

    </div>
  );
}

export default Dispatcher;
