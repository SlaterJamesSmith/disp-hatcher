import React from 'react';
import Dispatcher from './Dispatcher';
import { Switch, Route } from 'react-router-dom';
import Profiles from './Profiles';
import Error404 from './Error404';

class ContentContainer extends React.Component{

  constructor(props) {
  super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMemberList: [
        {
          firstName: 'Jack',
          lastName: 'Ofalltrades',
          email: 'BeNimble420@gmail.com',
          notesMaster: '',
          key: 'mock1'
        },
        {
          firstName: 'Jane',
          lastName: 'Jee-eye',
          email: 'hooya@yahoo.com',
          notesMaster: 'likes early shifts',
          key: 'mock2'
        },
        {
          firstName: 'Carl',
          lastName: 'Mell',
          email: 'ilikecandy@hotmail.com',
          notesMaster: '',
          key: 'mock3'
        },
        {
          firstName: 'Sarah',
          lastName: 'Sander',
          email: 'woodshopismyjam@auntiesarahwoodworking.com',
          notesMaster: '',
          key: 'mock4'
        }
      ]
    };
    this.handleAddingNewMemberToList = this.handleAddingNewMemberToList.bind(this);
  }

  handleAddingNewMemberToList(newMember){
    var newMasterMemberList = this.state.masterMemberList.slice();
    newMasterMemberList.push(newMember);
    this.setState({masterMemberList: newMasterMemberList});
  }

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
          <Route exact path='/' render={()=><Dispatcher memberList={this.state.masterMemberList} />} />
          <Route path='/admin' render={()=><Profiles onNewMemberCreation={this.handleAddingNewMemberToList} removeMemberList={this.state.masterMemberList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default ContentContainer;
