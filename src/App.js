
import './App.css';
import Header from './components/navbar/navbar';
import LandingPage from './pages/landingPage';
import TeamPage from './pages/Team_Page';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="Team" element={<TeamPage/>} />
    </Routes>
    </div>
  );
}

export default App;
