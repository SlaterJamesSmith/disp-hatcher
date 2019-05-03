import React from 'react';
import NewMemberForm from './NewMemberForm';
import PropTypes from 'prop-types';
// import KegList from './KegList';
import RemoveKegList from './RemoveKegList';

class Profiles extends React.Component {

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
    let buttonVisible = <button onClick={this.handleShowingForm}>Add New Keg</button>;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewMemberForm onNewKegCreation={this.props.onNewKegCreation} onNewKegForm={this.handleHidingForm}/>;
      buttonVisible = null;
    }
    return (
      <div>
        <style jsx>{`
           div {
             display: flex;
             font-family: arial;
             flex-direction: column;
             align-items: center;
           }
           h3 {
             color: black;
             margin-top: 2em;
             margin-bottom: 1em;
           }
           h4 {
             color: skyblue;
             padding-bottom: 5px;
             margin: 0;
           }
           ul {
             padding: 8px;
           }
           li {
             display: block;
           }
         `}</style>
        {currentlyVisibleContent}
        {buttonVisible}
        <RemoveKegList kegList={this.props.removeKegList} />
      </div>
    );
  }
}

Profiles.propTypes = {
  formVisibleOnPage: PropTypes.func
};

export default Profiles;
