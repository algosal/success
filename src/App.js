import './App.css';
import { MyButton } from './components/button';
import { Routing } from './components/fix/routing';
import PerfectLaw from './components/PerfectLaw';

function App() {
  return (
    <div className="App">
      <div>
      <header className="App-header">Salman Saeed</header>
      </div>
      <div><Routing /></div>
  <div className='bottom-position'><MyButton/></div>



      <div className='div-shadow' onClick={() => {
        window.open("https://salmansaeed.us/notes");
        window.open("https://salmansaeed.us/search");
      }}>
        <font color="black"><b>S</b></font>
      </div>

    </div>
  );
}

export default App;
