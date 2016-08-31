import React from 'react';

class LayerSwitcher extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let switchers = [];

    this.props.taskGroups.map( (layer, i) => {

      switchers.push ( <div className="switcher" key={i}>
        <input type="checkbox" id={layer.slug} checked={ layer.active } onChange={ () => {this.props.toggleLayers( {type:layer.type, active: !layer.active} )} }/>
        <label htmlFor={layer.slug} style={{backgroundColor: layer.color }}></label>
        <span className="label">{layer.title}</span>
      </div>)

    });
    return (
      <div className="c-layers-switcher">
        {switchers}
      </div>
    );
  }
}

export default LayerSwitcher;
