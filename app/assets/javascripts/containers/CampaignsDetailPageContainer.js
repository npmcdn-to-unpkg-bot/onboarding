import { connect } from 'react-redux';
import { setCampaignDetail } from '../actions/campaignsActions';
import CampaignsDetailPageView from '../components/pages/CampaignsDetailPageView';

const mapStateToProps = (state) => {
  return {
    campaignDetail: state.campaignsReducer.campaignDetail,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCampaignDetail: (id) => dispatch(setCampaignDetail(id))
  };
}

const CampaignDetailPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignsDetailPageView);

export default CampaignDetailPageContainer;
