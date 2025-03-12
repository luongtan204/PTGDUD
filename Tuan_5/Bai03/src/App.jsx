import { useReducer } from 'react';
import './App.css';

const initialState = {
  a: 0,
  b: 0,
  operator: '',
  result: '',
  nemo: 'Hello Nemo!',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_A':
      return { ...state, a: action.payload };
    case 'SET_B':
      return { ...state, b: action.payload };
    case 'SET_OPERATOR':
      return { ...state, operator: action.payload };
    case 'CALCULATE':
      let result;
      const a = parseFloat(state.a);
      const b = parseFloat(state.b);
      switch (state.operator) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          if (b === 0) {
            alert('Số B không hợp lệ');
            return state;
          }
          result = a / b;
          break;
        default:
          result = '';
      }
      return { ...state, result };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <input
        onChange={(e) => dispatch({ type: 'SET_A', payload: e.target.value })}
        type="text"
        placeholder='Nhập số A'
      />
      <br />
      <input
        onChange={(e) => dispatch({ type: 'SET_B', payload: e.target.value })}
        type="text"
        placeholder='Nhập số B'
      />
      <br />
      <input onChange={() => dispatch({ type: 'SET_OPERATOR', payload: '+' })} type="radio" name="group" value='+' /><span>+</span>
      <input onChange={() => dispatch({ type: 'SET_OPERATOR', payload: '-' })} type="radio" name="group" value='-' /><span>-</span>
      <input onChange={() => dispatch({ type: 'SET_OPERATOR', payload: '*' })} type="radio" name="group" value='*' /><span>*</span>
      <input onChange={() => dispatch({ type: 'SET_OPERATOR', payload: '/' })} type="radio" name="group" value='/' /><span>/</span>
      <br />
      <button onClick={() => dispatch({ type: 'CALCULATE' })}>Calculator</button>
      <br />
      <span>Result = {state.result}</span>
      <br />
      <span>{state.nemo}</span>
    </>
  );
}

export default App;