import { connect } from 'react-redux';
import { setEventsList } from '../actions/eventsActions';
import { setTasksList } from '../actions/tasksActions';
import EventsPageView from '../components/pages/EventsPageView';

const mapStateToProps = (state) => {
  return {
    eventsList: state.eventsReducer.eventsList,
    tasksList: state.tasksReducer.tasksList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEventsList: () => dispatch(setEventsList()),
    setTasksList: () => dispatch(setTasksList())
  };
}

const EventsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsPageView);

export default EventsPageContainer;
