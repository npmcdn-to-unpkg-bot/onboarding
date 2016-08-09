import { connect } from 'react-redux';
import { setCampaignsList } from '../actions/campaignsActions';
import CampaignsPageView from '../components/pages/CampaignsPageView';

const mapStateToProps = (state) => {
  return {
    campaignsList: state.campaignsReducer.campaignsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCampaignsList: () => dispatch(setCampaignsList())
  };
}

const CampaignsViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignsPageView);

export default CampaignsViewContainer;
