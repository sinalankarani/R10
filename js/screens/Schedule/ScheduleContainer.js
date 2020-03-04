import React, {Component} from 'react';
import SessionList from '../../components/SessionList';
import Schedule from './Schedule';

class ScheduleContainer extends Component {
  render() {
    const {navigation} = this.props;
    return <Schedule navigation={navigation} SessionList={SessionList} />;
  }
}

export default ScheduleContainer;
