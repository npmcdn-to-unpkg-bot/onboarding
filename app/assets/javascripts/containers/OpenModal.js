import {connect} from 'react-redux';
import OpenModal from '../components/OpenModal';

import {setShareModal} from '../actions/modal';

const mapStateToProps = state => {
  return {
    modalOpen: state.modal.shareModalOpen
  };
};

const mapDispatchToProps = dispatch => ({
  setShareModal: status =>
    dispatch(setShareModal(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenModal);
