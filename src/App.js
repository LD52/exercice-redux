import './App.css';
import {useSelector} from 'react-redux'; 


function App() {
  const name = useSelector (state => state.name); 
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
