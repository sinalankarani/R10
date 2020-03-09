import React, {Component} from 'react';
import {Query} from 'react-apollo';
import {CODE_OF_CONDUCTS} from '../../config/queries';
import About from './About';
import Loader from '../../components/Loader';
class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Query query={CODE_OF_CONDUCTS}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>There was a problem. {error}</Text>;
          if (data) return <About data={data.allConducts} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
