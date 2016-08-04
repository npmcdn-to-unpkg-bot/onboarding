import { connect } from 'react-redux';
import { setCampaingsList } from '../actions/static';
import CampaingsPageView from '../components/pages/CampaingsPageView';

const mapStateToProps = (state) => {
  debugger
  return {
    campaingsList: state.staticReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCampaingsList: (data) => dispatch(setCampaingsList(data))
  };
}

const CampaingsViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaingsPageView);

export default CampaingsViewContainer;
