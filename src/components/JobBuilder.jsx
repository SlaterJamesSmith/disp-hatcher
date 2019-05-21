import React from 'react';
import Job from './Job';
import PropTypes from 'prop-types';
import NewJobForm from './NewJobForm';
import EditJobList from './EditJobList';


// {Object.keys(props.memberList).map(function(id) {
//   var member = props.memberList[id];
//   return <Job firstName={member.firstName}
//     lastName={member.lastName}
//     email={member.email}
//     proficiencies={member.proficiencies}
//     exclusions={member.exclusions}
//     hireDate={member.hireDate}
//     listNumber={member.listNumber}
//     notesMaster={member.notesMaster}
//     key={member.id} />
// })}


class JobBuilder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleShowingForm = this.handleShowingForm.bind(this);
    this.handleHidingForm = this.handleHidingForm.bind(this);
  }

  handleShowingForm(){
    this.setState({formVisibleOnPage: true});
  }

  handleHidingForm(handler){
    this.setState({formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleContent = null;
    let buttonVisible = <button onClick={this.handleShowingForm}>Add Job</button>;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewJobForm onNewJobForm={this.handleHidingForm}/>;
      buttonVisible = null;
    }

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
      <h2>List Builder Info Here</h2>
        {currentlyVisibleContent}
        {buttonVisible}



    </div>
  );
}
}

export default JobBuilder;
