import { useSelector, useDispatch } from 'react-redux';
import {decrement,increment} from "./redux/counter"
import { Add } from './add'

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch=useDispatch();
  return (
    <div>
      <h1>The count is :{count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button >
      <button onClick={()=>dispatch(decrement())}>Decrement</button >

    </div>

  );
}

export default App;
