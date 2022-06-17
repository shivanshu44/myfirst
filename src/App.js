
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/signup';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path='/' exact element={<Home />} />
       <Route path='/about'  element={<About /> }/>
       <Route path='/signup'  element={<Signup /> }/>
       <Route path='/login'  element={<Login /> }/>
      </Routes>
    </Router>
    );
}

export default App;
