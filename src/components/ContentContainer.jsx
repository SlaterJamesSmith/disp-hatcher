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
          beer: 'The Duff Original IPA',
          brand: 'Duff Beer',
          percent: '100',
          cost: '5',
          key: 'mock1'
        },
        {
          beer: 'Duff Love',
          brand: 'Duff Beer',
          percent: '99',
          cost: '3',
          key: 'mock2'
        },
        {
          beer: 'Duffy the Vampire Slayer',
          brand: 'Duff Beer',
          percent: '101',
          cost: '6',
          key: 'mock3'
        },
        {
          beer: 'Duff and Duffer',
          brand: 'Duff Beer',
          percent: '101',
          cost: '6',
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
