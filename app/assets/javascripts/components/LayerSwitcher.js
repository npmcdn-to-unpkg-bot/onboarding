import React from 'react';

class LayerSwitcher extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let switchers = [];

    this.props.layersList.map( (layer, i) => {
      const slug = layer.slug

      switchers.push ( <div className="switcher" key={i}>
        <input type="checkbox" id={slug}  checked={ layer.active } onChange={ () => {this.props.toggleLayers( {slug} )} }/>
        <label htmlFor={slug} ></label>
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
