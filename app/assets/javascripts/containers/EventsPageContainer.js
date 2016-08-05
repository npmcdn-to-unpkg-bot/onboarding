import { connect } from 'react-redux';
import { setEventsList } from '../actions/eventsActions';
import EventsPageView from '../components/pages/EventsPageView';

const mapStateToProps = (state) => {
  return {
    eventsList: state.eventsReducer.eventsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEventsList: () => dispatch(setEventsList())
  };
}

const EventsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsPageView);

export default EventsPageContainer;
