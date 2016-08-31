'use strict';

import React from 'react';

class CommunityData extends React.Component {

  componentWillMount() {
    this.props.setCommunityData();
  }

  render() {

    const items = ['users', 'roads'];
    const cummunityItems = this.props.communityData && items.map(
      (key, i) => {
        const data = this.props.communityData;

        return(<div className="community-element" key={i}>
          <h3 className="text text-legend -primary">{key}</h3>
          <p className="text text-numeric-m -darker">{data[key]}</p>
        </div>)
      }
    )

    return (
      <div className="community-data">
        {cummunityItems}
      </div>
    );
  }
}

export default CommunityData;
