import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Logins from './pages/Logins';
import VideoEditor from './pages/VideoEditor';
import NavBarElement from './components/NavBarElement';

function App() {
  return (
    <Router>
      <NavBarElement/>
      <Routes>
        <Route path = "/VideoEditor" element = {<VideoEditor />} />
        <Route path = "/Logins" element = {<Logins />} />
        <Route path = "/Home" element = {<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
