import React, {Component} from 'react';
import {queryFaves, deleteFave, createFave} from '../../config/models';
export const FavesContext = React.createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }
  componentDidMount() {
    this.getFavedSessionIds();
  }
  getFavedSessionIds = async () => {
    try {
      const faves = await queryFaves();
      const Ids = faves.map(fave => fave[0]);
      this.setState({faveIds: Ids});
    } catch (e) {
      console.log(e);
    }
  };

  addFaveSession = async sessionId => {
    try {
      const newFav = await createFave(sessionId);
      if (newFav) {
        this.setState({faveIds: [...this.state.faveIds, newFav.id]});
      }
      this.getFavedSessionIds();
    } catch (e) {
      console.log(e);
    }
  };

  removeFaveSession = async sessionId => {
    try {
      await deleteFave(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaveSession,
          removeFaveSession: this.removeFaveSession,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export default FavesProvider;
