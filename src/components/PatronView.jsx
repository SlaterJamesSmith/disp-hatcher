import React from 'react';
import KegList from './KegList';

function PatronView(){
  return (
    <div>
      <style jsx>{`
        div {
          display: grid;
          grid-gap: 1em;
          grid-template-columns: auto;
        }
       `}</style>
      <KegList/>
    </div>
  );
}

export default PatronView;
