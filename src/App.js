import './App.css';
import logo1 from './assets/UNITED.png';
import logo2 from './assets/PROPERTIES.png';
import Progress from './components/Progress/Progress';

function App() {
  return (
    <div className="App flex flex-row w-full h-screen">
      <div className="w-1/3 h-full bg-[#35A0EE] text-white pt-12 pl-20">
        <div className="flex flex-row">
          <img alt="united" src={logo1}></img>
            <img alt="propertier" src={logo2}></img>
        </div>
        <Progress/>  
      </div>
    </div>
  );
}

export default App;
