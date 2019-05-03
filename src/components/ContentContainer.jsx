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
      masterKegList: [
        {
          firstName: 'The Duff Original IPA',
          lastName: 'Duff Beer',
          email: '100',
          notesMaster: '5',
          key: 'mock1'
        },
        {
          firstName: 'Duff Love',
          lastName: 'Duff Beer',
          email: '99',
          notesMaster: '3',
          key: 'mock2'
        },
        {
          firstName: 'Duffy the Vampire Slayer',
          lastName: 'Duff Beer',
          email: '101',
          notesMaster: '6',
          key: 'mock3'
        },
        {
          firstName: 'Duff and Duffer',
          lastName: 'Duff Beer',
          email: '101',
          notesMaster: '6',
          key: 'mock4'
        }
      ]
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
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
          <Route exact path='/' render={()=><Dispatcher kegList={this.state.masterKegList} />} />
          <Route path='/admin' render={()=><Profiles onNewKegCreation={this.handleAddingNewKegToList} removeKegList={this.state.masterKegList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default ContentContainer;
