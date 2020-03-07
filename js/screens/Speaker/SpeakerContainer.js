import React, {Component} from 'react';
import {Query} from 'react-apollo';
import Speaker from './Speaker';
import {SINGLE_SPEAKER} from '../../config/queries';
import Loader from '../../components/Loader';
import styles from './styles';

class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.route.params.id);
    return (
      <Query
        query={SINGLE_SPEAKER}
        variables={{id: this.props.route.params.id}}>
        {({data, loading}) => {
          if (loading) return <Loader />;

          if (data) {
            console.log(data.Speaker.name);
            return (
              <Speaker
                speaker={data.Speaker}
                navigation={this.props.navigation}
              />
            );
          }
        }}
      </Query>
    );
  }
}

export default SpeakerContainer;
