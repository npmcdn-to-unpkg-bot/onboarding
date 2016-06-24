import { connect } from 'react-redux';
import { setCommunityData } from '../../actions/static';
import CommunityData from '../../components/static/CommunityData';

const mapStateToProps = (state) => {
  console.log('state.container');
  return {
    communityData: state.communityData
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch.container');
  debugger;
  return {
    setCommunityData: () => dispatch(setCommunityData())
  };
}

const CommunityDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityData);

export default CommunityDataContainer;
