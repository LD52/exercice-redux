import './App.css';
import {useSelector} from 'react-redux'; 
import { useDispatch} from 'react-redux';
import changeName from './actions/action';
import {useState} from 'react';

function App() {
  const name = useSelector (state => state.name); 
  const dispatch = useDispatch(); 
  const [TypingName, setTypingName] = useState(''); 

  function handleChangeName(event){
    setTypingName (event.target.value); 
  }
  function  handleSubmit (event) {
    event.preventDefault(); 
    dispatch(changeName(TypingName))
  }
  return (
    <div className="App">
      <div className='root'>

         <form className='form'>
          <input type="text"  placeholder="put your name here" className='input'/>
      </form>
      <button className='button'>Submit</button>
      </div>
      <h1>My name is : {name}</h1>

      </div>
     
  );
}

export default App;
