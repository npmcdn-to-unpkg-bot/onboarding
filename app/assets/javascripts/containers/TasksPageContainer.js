import { connect } from 'react-redux';
import { setTasksList } from '../actions/tasksActions';
import TasksPageView from '../components/pages/TasksPageView';

const mapStateToProps = (state) => {
  return {
    tasksList: state.tasksReducer.tasksList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTasksList: () => dispatch(setTasksList())
  };
}

const TasksViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksPageView);

export default TasksViewContainer;
