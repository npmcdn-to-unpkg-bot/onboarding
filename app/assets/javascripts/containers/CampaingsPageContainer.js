import { connect } from 'react-redux';
import { setElementsList } from '../actions/static';
import DataTableView from '../components/DataTableView';

const mapStateToProps = (state) => {
  return {
    elementsList: state.staticReducer.elementsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setElementsList: (data) => dispatch(setElementsList(data))
  };
}

const CampaingsViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataTableView);

export default CampaingsViewContainer;
