
import reactLogo from './assets/react.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, incrementByTwo } from './store/slices/counter/counterSlice';

function App() {
  
  const { counter } = useSelector(state => state.counter);

  const dispatch = useDispatch();


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is { counter }</h1>
      <div className="card">
        <button onClick={ () => dispatch(increment()) }>
          Increment
        </button>
      </div>
      <div className="card">
        <button onClick={ () => dispatch(decrement()) }>
          Decrement
        </button>
      </div>
      <div className="card">
        <button onClick={ () => dispatch(reset()) }>
          Reset
        </button>
      </div>
      <div className="card">
        <button onClick={ () => dispatch(incrementByTwo(2)) }>
          Increment By Two
        </button>
      </div>

    </div>
  )
}

export default App
