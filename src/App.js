import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { increseLevel, increseScore } from './redux/gameSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  const score = useSelector((state)=> state.game.scorecard)
  const level = useSelector((state) => state.game.level)

  useEffect(()=>{
  
    if(score > 10){
      dispatch(increseLevel())
    }


  },[score, dispatch])

  return (
    <div className="App">
     
   
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
