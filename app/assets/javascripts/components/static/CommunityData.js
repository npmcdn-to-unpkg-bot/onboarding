'use strict';

import React from 'react';

window.CommunityData = React.createClass({

  componentWillMount() {
    // debugger;
    // this.props.setCommunityData();
  },

  render() {
    return (
      <div className="community-element">
        <h3 className="text text-legend -primary">{ this.props.communityData.title }</h3>
        <p className="text text-numeric-m -darker">{ this.props.communityData.quantity }{this.props.communityData.percentage && '%'}</p>
      </div>
    );
  }
});

CommunityData.propTypes = {
  communityData: React.PropTypes.object
};

export default CommunityData;
