
import './App.css';
import Face_1 from './components/Face_1';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <Router> */}
      <Navbar />
      {/* <Routes>
        <Route path='/' exact />
      </Routes>
    </Router> */}
    {/* <h1>temp</h1> */}
      <Face_1 />
    </>
  );
}

export default App;
// Testing github commiting