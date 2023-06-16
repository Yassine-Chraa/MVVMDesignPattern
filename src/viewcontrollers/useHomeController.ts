import {useEffect} from 'react';
import useHomeViewModel from '../viewmodels/useHomeViewModel';
import { useSelector } from 'react-redux';

const useHomeController = () => {
  const {fetchData} = useHomeViewModel();
  useEffect(() => {
    fetchData();
    console.log("OKkk")
  }, []);

  const getToDoList = () => {
    const tasks = useSelector((state:any) => state.tasks)
    return tasks;
  };

  return {
    getToDoList,
  };
};

export default useHomeController;
