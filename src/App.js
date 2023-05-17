// import logo from './logo.svg';
import './App.css';
import Sidebar from './Componants/Allpages/Sidebar';
import Home from './Componants/Allpages/Home';
// import Hidecontent from './Componants/Allpages/Hidecontent';

function App() {
  return (
    <div className="App">
      <div className='main_cont'>
      <Sidebar/>
      <Home/>
      </div>
     
    </div>
  );
}

export default App;
