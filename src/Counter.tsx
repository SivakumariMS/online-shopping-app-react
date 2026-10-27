import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./features/counter/counterSlice";

export const Counter = () => {
  const count = useSelector((state: any) => {
    return state.counter.value;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter value is :{count}</p>
      <button   className="disableBtn"
          style={{ marginRight: "5px" }} onClick={()=>dispatch(increment())}>Increment</button>
      <button    className="disableBtn"
          style={{ marginRight: "5px" }} onClick={()=>dispatch(decrement())}>Decrement</button>
      <button   className="disableBtn"
          style={{ marginRight: "5px" }} onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  );
};
