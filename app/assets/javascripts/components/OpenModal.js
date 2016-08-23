import React, {Component} from 'react';

class OpenModal extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button className="btn" onClick={() => this.props.setShareModal(true)}>
          <svg className="icon icon-share">
            <use xlinkHref="#icon-share"></use>
          </svg>
        </button>
      </div>
    );
  }
}

export default OpenModal;
