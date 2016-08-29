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
        <label htmlFor={slug} >{layer.title}</label>
        <input type="checkbox" id={slug}  checked={ layer.active } onChange={ () => {this.props.toggleLayers( {slug} )} }/>
      </div>)

    });
    return (
      <div>
        {switchers}
      </div>
    );
  }
}

export default LayerSwitcher;
