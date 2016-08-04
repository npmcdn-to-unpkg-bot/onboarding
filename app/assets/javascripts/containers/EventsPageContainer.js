import { connect } from 'react-redux';
import { setEventsList } from '../actions/static';
import DataTableView from '../components/DataTableView';

const mapStateToProps = (state) => {
  return {
    elementsList: state.staticReducer.eventsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setElementsList: (data) => dispatch(setEventsList(data))
  };
}

const EventsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataTableView);

export default EventsPageContainer;


