import {getTasks} from '../redux/actions/task';
import {useDispatch} from 'react-redux';

const useHomeViewModel = () => {
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch<any>(getTasks());
  };
  return {
    fetchData,
  };
};

export default useHomeViewModel;
