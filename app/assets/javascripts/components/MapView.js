import React from 'react';
import Map from './Map';

class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <Map tiles={this.props.tiles} />
    );
  }

}

export default MapView;
