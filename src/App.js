 import './App.css';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';
import './App.css'
  function App() {
  return (
    <div className="backgound-img">
      {/* header start */}
      <Header></Header> 
         {/* header end */}
      {/* islamic preacher information */}
       <Info></Info>
    </div>
  );
}

export default App;
