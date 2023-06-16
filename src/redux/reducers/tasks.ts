import Task from '../../models/Task';

export default (
  tasks: Array<Task> | false = false,
  action: {type: String; payload: Array<Task>},
) => {
  switch (action.type) {
    case 'Fetch All':
      return action.payload;
    default:
      return tasks;
  }
};
