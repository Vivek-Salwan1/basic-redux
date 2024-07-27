import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import Hey from './componants/hey';
import { decrement, increment } from './redux/conterSlice';
import { increseLevel, increseScore } from './redux/gameSlice';
import { useEffect, useRef } from 'react';

function App() {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.value);

  const score = useSelector((state)=> state.game.scorecard)
  const level = useSelector((state) => state.game.level)

  const previousScoreRef = useRef(score);
  useEffect(()=>{
  
    if(score > 10){
      dispatch(increseLevel())
    }


  },[score,])

  return (
    <div className="App">
     
      {/* <div className="countere">
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <h1>Count is {counterValue} </h1>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
      </div>
    
      <Hey/> */}
      <textarea  cols={20} rows={15} name="" id="" placeholder='Start typing to increse your score'
       onKeyDown={()=> dispatch(increseScore())}></textarea>

    <div>
      <button onClick={() => dispatch(increseScore(5))}>Play to increase score</button>
      <h3>Typing Score: {score}</h3>
      <h3>Level :{level}</h3>
      <button onClick={() => dispatch(increseLevel())}>Next level</button>
     
    </div>

    </div>
  );
}

export default App;
