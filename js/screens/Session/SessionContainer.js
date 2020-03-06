import React, {Component} from 'react';
import Session from './Session';
import {FavesContext} from '../../context/FavesContext';

class SessionContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {value => (
          <Session
            navigation={this.props.navigation}
            item={this.props.route.params.item}
            faveIds={value.faveIds}
            addFaveSession={value.addFaveSession}
            removeFaveSession={value.removeFaveSession}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}

export default SessionContainer;
