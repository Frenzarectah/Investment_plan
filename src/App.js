import './App.css';
import logo1 from './assets/UNITED.png';
import logo2 from './assets/PROPERTIES.png';
import Progress from './components/Progress/Progress';

function App() {
  return (
    <div className="App flex flex-row w-full h-screen">
      <div class="w-1/3 h-full bg-[#35A0EE] text-white pt-12 pl-20">
        <div class="flex flex-row">
          <img src={logo1}></img>
          <img src={logo2}></img>
        </div>
        <Progress/>  
      </div>
    </div>
  );
}

export default App;
