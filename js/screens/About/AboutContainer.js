import React, {Component} from 'react';
import {Query} from 'react-apollo';
import {CODE_OF_CONDUCT} from '../../config/queries';
import About from './About';
import Loader from '../../components/Loader';
class AboutContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query query={CODE_OF_CONDUCT}>
        {({loading, data}) => {
          if (loading) return <Loader />;
          if (data) return <About data={data} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
