
import './App.css';
import {useSelector, useDispatch} from 'react-redux'

const increment = () =>{
    return {
        type: 'INCREMENT'
    }
}
const decrement = () =>{
    return {
        type: 'DECREMENT'
    }
}


function App() {
    const reducer = useSelector(state=>state.counter);
    const dispatch = useDispatch()
  return (
    <div className="App">
     <button onClick={()=>dispatch( increment())}>გაზრდა</button>
      <div>შედეგი : {reducer}</div>
      <button onClick={()=>dispatch(decrement())}>შემცირება</button>
    </div>
  );
}

export default App;
