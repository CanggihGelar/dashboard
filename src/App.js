import './App.css';
import Sidebar from './component/sidebar/Sidebar.jsx'
import MainDash from './component/MainDash/MainDash.jsx'
import RightSide from './component/RightSide/RightSide';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
