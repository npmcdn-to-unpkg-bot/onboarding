import { connect } from 'react-redux';
import { setEventsList } from '../actions/static';
import EventsView from '../components/EventsView';

const mapStateToProps = (state) => {
  return {
    eventsList: state.staticReducer.eventsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEventsList: (data) => dispatch(setEventsList(data))
  };
}

const EventsViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsView);

export default EventsViewContainer;
