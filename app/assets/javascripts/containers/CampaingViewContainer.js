import { connect } from 'react-redux';
import CampaingView from '../components/CampaingView';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
}

const CampaingViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaingView);

export default CampaingViewContainer;
