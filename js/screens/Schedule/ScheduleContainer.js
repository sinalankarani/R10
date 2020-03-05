import React, {Component} from 'react';
import Schedule from './Schedule';
import Loader from '../../components/Loader';
import {Query} from 'react-apollo';
import {ALL_SESSIONS} from '../../config/queries';
import {formatSessionData} from './formatSessionData';

class ScheduleContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {value => (
          <Query query={ALL_SESSIONS}>
            {({loading, data, error}) => {
              if (loading) return <Loader />;
              if (error) return error;
              if (data) {
                const {navigation} = this.props;
                const sessions = formatSessionData(data.allSessions);
                return <Schedule navigation={navigation} sessions={sessions} />;
              }
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default ScheduleContainer;
