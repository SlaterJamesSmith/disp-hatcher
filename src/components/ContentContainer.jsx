import React from 'react';
import Dispatcher from './Dispatcher';
import JobBuilder from './JobBuilder';
import { Switch, Route, withRouter } from 'react-router-dom';
import Profiles from './Profiles';
import Error404 from './Error404';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ContentContainer extends React.Component{

  constructor(props) {
  super(props);
  console.log(props);
    this.state = {
      formVisibleOnPage: false,
      masterMemberList: [
        {
          firstName: 'Jack',
          lastName: 'Ofalltrades',
          email: 'BeNimble420@gmail.com',
          notesMaster: '',
          id: 'mock1'
        },
        {
          firstName: 'Jane',
          lastName: 'Jee-eye',
          email: 'hooya@yahoo.com',
          notesMaster: 'likes early shifts',
          id: 'mock2'
        },
        {
          firstName: 'Carl',
          lastName: 'Mell',
          email: 'ilikecandy@hotmail.com',
          notesMaster: '',
          id: 'mock3'
        },
        {
          firstName: 'Sarah',
          lastName: 'Sander',
          email: 'woodshopismyjam@auntiesarahwoodworking.com',
          notesMaster: '',
          id: 'mock4'
        }
      ]
    };
    this.handleRemoveMemberFromList = this.handleRemoveMemberFromList.bind(this);
    // this.handleAddingNewMemberToList = this.handleAddingNewMemberToList.bind(this);
  }

  // handleAddingNewMemberToList(newMember){
  //   var newMasterMemberList = this.state.masterMemberList.slice();
  //   newMasterMemberList.push(newMember);
  //   this.setState({masterMemberList: newMasterMemberList});
  // }

  handleRemoveMemberFromList(removeMemberId){

    var newMasterMemberList = this.state.masterMemberList.slice();
    newMasterMemberList.forEach((masterMember, index) => {
      if (masterMember.id === removeMemberId) {
        newMasterMemberList.splice(index, 1)
        }
      })
    this.setState({masterMemberList: newMasterMemberList});
  }


// The following code should be implemented once I figure out how to store mock data in redux this.state
  // <Switch>
  //   <Route exact path='/' render={()=><Dispatcher memberList={this.state.masterMemberList} />} />
  //   <Route path='/admin' render={()=><Profiles removeMemberList={this.state.masterMemberList} onRemoveMember={this.handleRemoveMemberFromList} />} />
  //   <Route component={Error404} />
  // </Switch>

  render(){
    return (
      <div>
        <style jsx>{`
          div {
            width: 1440px;
            margin-left: auto;
            margin-right: auto;
          }

          @media only screen and (max-width: 1500px)  {
            div {
              width: 95vw;
            }
            img {
              margin-top: -20vw;
            }
          }
          @media only screen and (max-width: 1000px)  {
            img {
              opacity: 0;
            }
          }
         `}</style>
        <Switch>
          <Route exact path='/' render={()=><Dispatcher memberList={this.props.masterMemberList} />} />
          <Route exact path='/job-builder' render={()=><JobBuilder memberList={this.props.masterMemberList} />} />
          <Route path='/admin' render={()=><Profiles removeMemberList={this.props.masterMemberList} onRemoveMember={this.handleRemoveMemberFromList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


ContentContainer.propTypes = {
  masterMemberList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterMemberList: state
  }
};

export default withRouter(connect(mapStateToProps)(ContentContainer));
