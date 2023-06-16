import {Dispatch} from 'react';
import Task from '../../models/Task';

export const getTasks =
  () => async (dispatch: Dispatch<{type: string; payload: Array<Task>}>) => {
    try {
      const task1: Task = {
        title: 'Task1',
        endDate: '2023-07-01',
      };
      const data: Array<Task> = [task1];
      dispatch({type: 'Fetch All', payload: data});
    } catch (error: any) {
      console.log(error.message);
    }
  };
