import { connect } from 'react-redux';
import { setCampaingsList } from '../actions/static';
import CampaingsPageView from '../components/pages/CampaingsPageView';

const mapStateToProps = (state) => {
  return {
    campaingsList: state.staticReducer.campaingsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCampaingsList: () => dispatch(setCampaingsList())
  };
}

const CampaingsViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaingsPageView);

export default CampaingsViewContainer;
