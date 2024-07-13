
import Destination from './components/destination/Destination';
import Feature from './components/feature/feature';
import LandingPage from './components/LandingPage/LandingPage';
import Discount from './components/discound/Discound';
import './index.css'
import Home from './page/Home';
import { Route,Routes } from 'react-router';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
    <Home/>
    <Routes>
      <Route path='/landing' element={<LandingPage/>}/>
      <Route path='/feature' element={<Feature/>}/>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/deals' element={< Discount/>}/>
    

    </Routes>

     
    </div>
  );
}

export default App;
