import React, {Component} from 'react';
import {Query} from 'react-apollo';
import {ALL_SESSIONS} from '../../config/queries';
import Faves from './Faves';
import {FavesContext} from '../../context/FavesContext';
import {formatSessionData} from '../../screens/Schedule/formatSessionData';
import {ActivityIndicator} from 'react-native';

class FavesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FavesContext.Consumer>
        {value => (
          <Query query={ALL_SESSIONS}>
            {({loading, data, error}) => {
              if (loading) return <Loader />;
              if (error) return error;
              if (data) {
                const checkFaves = data.allSessions.filter(session =>
                  value.faveIds.includes(session.id),
                );
                const {navigation} = this.props;
                const sessions = formatSessionData(checkFaves);

                return (
                  <Faves
                    navigation={navigation}
                    sessions={sessions}
                    faveIds={value.faveIds}
                  />
                );
              }
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}
export default FavesContainer;
