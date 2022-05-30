import './App.css';
import logo1 from './assets/UNITED.png';
import logo2 from './assets/PROPERTIES.png';

function App() {
  return (
    <div className="App flex flex-row border border-yellow w-full h-screen">
      <div className="sm:w-80 md:w-1/3 lg:w-1/3 h-full border border-black bg-[#35A0EE] text-white pt-12 pl-20">
        <div className="flex flex-row">
          <img alt="united" src={logo1}></img>
            <img alt="propertier" src={logo2}></img>
        </div> 
      </div>
    </div>
  );
}

export default App;
