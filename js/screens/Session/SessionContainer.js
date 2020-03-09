import React, {Component} from 'react';
import Session from './Session';
import {FavesContext} from '../../context/FavesContext';

class SessionContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {item => (
          <Session
            navigation={this.props.navigation}
            item={this.props.route.params.item}
            faveIds={item.faveIds}
            addFaveSession={item.addFaveSession}
            removeFaveSession={item.removeFaveSession}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}

export default SessionContainer;
